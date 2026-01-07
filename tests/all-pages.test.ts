import { expect, test } from '@chromatic-com/playwright';
import { expect as expectA11y, test as testA11y } from './fixtures/a11y.ts';
import { lighthouseTest, thresholds } from './fixtures/performance.ts';

// Define all pages in the static website
const pages = [
	{ url: '/', title: 'Cosplay Portfolio', tags: ['@cosplay', '@homepage'] },
	{ url: '/work.html', title: 'Professional Portfolio', tags: ['@work', '@professional'] },
];

function getTagsForPage(page: { tags: string[] }): string[] {
	return page.tags;
}

// Generate tests for each page
for (const page of pages) {
	const tags = getTagsForPage(page);

	test.describe(`Tests für ${page.title} (${page.url})`, () => {
		// Accessibility Tests
		test.describe('a11y', { tag: [...tags, '@a11y'] }, () => {
			testA11y.skip(
				({ browserName }) => !browserName.startsWith('chromium'),
				'A11y tests only need to run in one browser',
			);

			testA11y(`a11y test for ${page.url}`, async ({ page: playwright, makeAxeBuilder }) => {
				await playwright.goto(page.url);

				const accessibilityScanResults = await makeAxeBuilder()
					.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
					.analyze();

				expectA11y(accessibilityScanResults.violations).toEqual([]);
			});
		});

		// Performance Tests
		test.describe('performance', { tag: [...tags, '@performance'] }, () => {
			lighthouseTest.skip(({ browserName }) => browserName !== 'chromium', 'Lighthouse tests are only supported in Chromium');

			lighthouseTest(`lighthouse tests of ${page.url}`, async ({ page: playwright, port }) => {
				await playwright.goto(page.url);

				const { playAudit } = await import('playwright-lighthouse');

				await playAudit({
					page: playwright,
					thresholds: thresholds,
					port: port,
					opts: {
						logLevel: 'error',
						onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
					},
				});
			});
		});

		// Functional Tests
		test.describe('functional', { tag: [...tags, '@functional'] }, () => {
			test.skip(({ browserName }) => browserName.includes('dark'), 'No need to run functional tests in dark mode');

			test(`Seite lädt ohne Fehler: ${page.url}`, async ({ page: playwright }) => {
				const response = await playwright.goto(page.url);

				expect(response?.status()).toBeLessThan(400);

				const title = await playwright.title();
				expect(title).toBeTruthy();
				expect(title.length).toBeGreaterThan(0);

				const h1Elements = await playwright.locator('h1').count();
				expect(h1Elements).toBeGreaterThan(0);
			});

			test(`Navigation ist vorhanden: ${page.url}`, async ({ page: playwright }) => {
				await playwright.goto(page.url);

				const navElement = await playwright.locator('nav').count();
				expect(navElement).toBeGreaterThan(0);
			});

			test(`Footer ist vorhanden: ${page.url}`, async ({ page: playwright }) => {
				await playwright.goto(page.url);

				const footerElement = await playwright.locator('footer').count();
				expect(footerElement).toBeGreaterThan(0);
			});
		});
	});
}

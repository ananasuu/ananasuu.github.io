import { expect as expectA11y, test as testA11y } from './fixtures/a11y.ts';
import { lighthouseTest, thresholds } from './fixtures/performance.ts';

/**
 * Shared test suite for all pages
 * This function can be used to run common tests across multiple pages
 * @param url The URL to test
 * @param tags Tags to categorize the tests
 */
export async function pageTests(url: string, tags: string[]): Promise<void> {
	testA11y.describe('a11y', { tag: [...tags, '@a11y'] }, () => {
		testA11y.skip(({ browserName }) => browserName !== 'chromium', 'A11y tests only need to run in one browser');

		testA11y(`a11y test for ${url}`, async ({ page, makeAxeBuilder }) => {
			await page.goto(url);

			const accessibilityScanResults = await makeAxeBuilder().analyze();

			expectA11y(accessibilityScanResults.violations).toEqual([]);
		});
	});

	lighthouseTest.describe('performance', { tag: [...tags, '@performance'] }, () => {
		lighthouseTest.skip(
			({ browserName }) => browserName !== 'chromium',
			'Lighthouse tests are only supported in Chromium',
		);

		lighthouseTest(`lighthouse tests of ${url}`, async ({ page, port }) => {
			await page.goto(url);

			const { playAudit } = await import('playwright-lighthouse');
			await playAudit({
				page,
				thresholds: thresholds,
				port,
				opts: {
					logLevel: 'error',
					onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
				},
			});
		});
	});
}

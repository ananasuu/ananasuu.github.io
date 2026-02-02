import type { Page } from '@playwright/test';
import { test as base } from '@playwright/test';

type PerformanceFixture = {
	port: number;
};

// Extend base test to provide a port for Lighthouse
export const lighthouseTest = base.extend<PerformanceFixture>({
	port: async ({}, use, testInfo) => {
		// Use different ports for different chromium projects to avoid conflicts
		const port = testInfo.project.name === 'chromium-dark' ? 9223 : 9222;
		await use(port);
	},
});

// Lighthouse thresholds for performance, accessibility, best-practices, and SEO
export const thresholds = {
	performance: 50,
	accessibility: 80,
	'best-practices': 80,
	seo: 80,
};

import { Fixtures } from '@playwright/test';
import { YaHomePage } from '../pages/ya-home-page';
import { YaMenuPage } from '../pages/ya-menu-page';
import { ContextPagesFixture } from './context-pages';
import { SearchResultsPage } from '../pages/search-results-page';

export type PlaywrightPagesFixture = {
  yaHomePage: YaHomePage;
  yaMenuPage: YaMenuPage;
  searchResultsPage: SearchResultsPage;
};

export const pagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
  yaHomePage: async ({ contextPage }, use) => {
    const yaHomePage = new YaHomePage(contextPage);

    await use(yaHomePage);
  },
  yaMenuPage: async ({ contextPage }, use) => {
    const yaMenuPage = new YaMenuPage(contextPage);

    await use(yaMenuPage);
  },
  searchResultsPage: async ({ contextPage }, use) => {
    const searchResultsPage = new SearchResultsPage(contextPage);

    await use(searchResultsPage);
  }
};

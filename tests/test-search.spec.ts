import { searchTest as test } from './tests';
import { arrowButtonText, queryForTestSearch } from '../fixtures/texts';

test.beforeEach(async ({ yaHomePage }) => {
  await yaHomePage.visit('/e2e-tests/site/page1.html');
});

test('Enter "Яндекс" in search bar, press "Найти" - should be opened search results', async ({
  yaHomePage,
  searchResultsPage
}) => {
  /* test steps */
  await yaHomePage.fillInSearchInput(queryForTestSearch);
  await yaHomePage.clickOnToFindButton();
  await searchResultsPage.arrowButtonIsVisible();
  await searchResultsPage.arrowButtonHaveText(arrowButtonText);
  await searchResultsPage.searchQueriesListHaveCss('display', 'none');
  await searchResultsPage.clickOnArrowButton();
  await searchResultsPage.clickOnArrowButton();
  await searchResultsPage.searchQueriesListHaveCss('display', 'block');
  await searchResultsPage.checkSpecificTextInList(queryForTestSearch);
});

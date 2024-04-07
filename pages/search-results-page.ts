import { BasePage } from './base-page';
import { Page } from '@playwright/test';
import { Button } from '../page-factory/button';
import { ListItem } from '../page-factory/list-item';

export class SearchResultsPage extends BasePage {
  private readonly arrowButton: Button;
  private readonly searchQueriesList: ListItem;
  private readonly searchQueriesListLi: ListItem;

  constructor(page: Page) {
    super(page);
    this.arrowButton = new Button({ page, locator: '[class="arrow-button"]', name: 'Arrow Button' });
    this.searchQueriesList = new ListItem({ page, locator: '[class="list"]', name: 'Search Queries List' });
    this.searchQueriesListLi = new ListItem({ page, locator: '[class="list"] li', name: 'Search Queries List Li' });
  }

  async checkSpecificTextInList(text: string): Promise<void> {
    return this.searchQueriesListLi.checkSpecificText(text);
  }

  async clickOnArrowButton() {
    return this.arrowButton.click();
  }

  async arrowButtonIsVisible() {
    return this.arrowButton.shouldBeVisible();
  }

  async arrowButtonHaveText(text: string) {
    return this.arrowButton.shouldHaveText(text);
  }

  async searchQueriesListHaveCss(key: string, value: string) {
    return this.searchQueriesList.checkCss(key, value);
  }
}

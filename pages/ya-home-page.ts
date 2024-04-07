import { BasePage } from './base-page';
import { Input } from '../page-factory/input';
import { Page } from '@playwright/test';
import { Button } from '../page-factory/button';

export class YaHomePage extends BasePage {
  private readonly searchInput: Input;
  private readonly toFindButton: Button;

  constructor(page: Page) {
    super(page);
    this.searchInput = new Input({ page, locator: '.mini-suggest__input', name: 'Search Input' });
    this.toFindButton = new Button({ page, locator: '[class*="search3__button"]', name: 'To Find Button' });
  }

  async clickOnSearchInput() {
    return this.searchInput.click();
  }

  async clickOnToFindButton() {
    return this.toFindButton.click();
  }

  async fillInSearchInput(text: string): Promise<void> {
    return this.searchInput.fill(text);
  }
}

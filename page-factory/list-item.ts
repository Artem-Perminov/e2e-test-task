import { Component } from './component';
import { LocatorProps } from '../types/page-factory/component';
import test, { expect } from '@playwright/test';

export class ListItem extends Component {
  get typeOf(): string {
    return 'list item';
  }

  async checkCss(key: string, value: string, locatorProps: LocatorProps = {}) {
    await test.step(`Checking CSS ${this.typeOf} with name "${this.componentName}", ${key} = ${value}`, async () => {
      const locator = this.getLocator(locatorProps);
      await expect(locator).toHaveCSS(key, value);
    });
  }

  async checkSpecificText(text: string, locatorProps: LocatorProps = {}) {
    await test.step(`Checking that ${this.typeOf} with name "${this.componentName}", have ${text}`, async () => {
      const locator = this.getLocator(locatorProps);

      const texts = await locator.allTextContents();
      const arrText = [];

      for (const el of texts) {
        arrText.push(el.trim());
      }

      const result: string[] = texts.filter((el) => el === text);

      expect(result.join('')).toBe(text);
    });
  }
}

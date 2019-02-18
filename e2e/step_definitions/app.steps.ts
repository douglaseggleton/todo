import { Given, Then } from 'cucumber';
import { page } from './../page_objects';
import { expect } from 'chai';

Given('a user loading the App', () => {
  return page.app.navigateTo();
});

Then('I should see the title {string}', async (title) => {
  return expect(await page.app.getTitleText()).to.equal(title);
});

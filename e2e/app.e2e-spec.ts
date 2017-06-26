import { SimplexAngularPixiTestPage } from './app.po';

describe('simplex-angular-pixi-test App', () => {
  let page: SimplexAngularPixiTestPage;

  beforeEach(() => {
    page = new SimplexAngularPixiTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sapt!!');
  });
});

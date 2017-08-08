import { JupiterAndTheGiraffePage } from './app.po';

describe('jupiter-and-the-giraffe App', () => {
  let page: JupiterAndTheGiraffePage;

  beforeEach(() => {
    page = new JupiterAndTheGiraffePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

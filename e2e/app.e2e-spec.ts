import { SampleNg2ProjectPage } from './app.po';

describe('sample-ng2-project App', function() {
  let page: SampleNg2ProjectPage;

  beforeEach(() => {
    page = new SampleNg2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

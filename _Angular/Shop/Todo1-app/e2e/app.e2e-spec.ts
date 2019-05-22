import { Todo1AppPage } from './app.po';

describe('todo1-app App', function() {
  let page: Todo1AppPage;

  beforeEach(() => {
    page = new Todo1AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

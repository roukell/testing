const Page = require('./page');

class SearchPage extends Page {

  get inputSearch() { return $('input.gLFyf.gsfi')}
  get btnSubmit() {return $('/html/body/div[2]/div[2]/form/div[2]/div[1]/div[3]/center/input[1]')}

  search(SerachTerm) {
    this.inputSearch.setValue(SerachTerm);
    this.btnSubmit.click();
  }
}

module.exports = new SearchPage();

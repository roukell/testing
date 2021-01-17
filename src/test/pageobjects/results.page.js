const Page = require('./page');

class ResultsPage extends Page {
  get artistName () {return $('h2.qrShPb.kno-ecr-pt.PZPZlf.mfMhoc');}

  getArtistName () {
    return this.artistName.getText();
  }
}

module.exports = new ResultsPage();

const SearchPage = require('../pageobjects/search.page');
const ResultsPage = require('../pageobjects/results.page');

describe('Search returns correct response', () => {
    it('adele', () => {
        SearchPage.open();
        SearchPage.search('adele');
        expect(ResultsPage.getArtistName()).toBe('Adele');
    });
});




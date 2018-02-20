
const visit = require('../visit')

const helpers = require('../helpers');

describe('visit', function () {
    it('should work for a single page', function () {
        const { input, expected } = helpers.singlePage();
        const sitemap = visit(input);
        sitemap.forEach(page => expect(expected).to.contain(page));
    });

    it('should work with multiple pages', function () {
        const { input, expected } = helpers.multiplePages();
        const sitemap = visit(input);
        sitemap.forEach(page => expect(expected).to.contain(page));
    });

    it('should work with pages that have nested links', function () {
        const { input, expected } = helpers.pagesWithLinks();
        const sitemap = visit(input);
        sitemap.forEach(page => expect(expected).to.contain(page));
    });
});
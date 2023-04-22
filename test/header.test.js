const Header = require("../lib/header.js");
const DateModule = require("../lib/date.js");

describe('Header', () => {
  describe('render', () => {
    it('make a header tag for html', () => {
      // Arrange
      const date =DateModule.formatDate(new Date());
      const result = `<header class="header"><h1>Todo Today</h1><p>${date}</p></header>`;
      // Act
      const header = new Header();
      // Assert
      expect(header.render()).toEqual(result);
    });
  });
});

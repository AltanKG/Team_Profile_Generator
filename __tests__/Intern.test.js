const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school argument", () => {
      // Arrange
      const school = "DU";
      const intern = new Intern("Altan", 1, "email", "DU");
      // Act
      const answer = intern.getSchool();

      // Asertion
      expect(answer).toEqual(school);
    });
  });
  describe("getRole", () => {
    it("should return the role", () => {
      // Arrange
      const role = "Intern";
      const intern = new Intern("Altan", 1, "email", "DU");
      // Act
      const answer = intern.getRole();

      // Asertion
      expect(answer).toEqual(role);
    });
  });
});

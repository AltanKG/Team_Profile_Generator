const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the github argument", () => {
      // Arrange
      const github = "Github";
      const engineer = new Engineer("Altan", 1, "email", "Github");
      // Act
      const answer = engineer.getGithub();

      // Asertion
      expect(answer).toEqual(github);
    });
  });
  describe("getRole", () => {
    it("should return the role", () => {
      // Arrange
      const role = "Engineer";
      const engineer = new Engineer("Altan", 1, "email", "Github");
      // Act
      const answer = engineer.getRole();

      // Asertion
      expect(answer).toEqual(role);
    });
  });
});

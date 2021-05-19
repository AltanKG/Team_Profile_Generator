const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should return the role", () => {
      // Arrange
      const role = "Manager";
      const manager = new Manager("Altan", 1, "email", 2);
      // Act
      const answer = manager.getRole();

      // Asertion
      expect(answer).toEqual(role);
    });
  });
});

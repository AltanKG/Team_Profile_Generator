const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name argument", () => {
      // Arrange
      const name = "Altan";
      const employee = new Employee("Altan", 1, 2);
      // Act
      const answer = employee.getName();

      // Asertion
      expect(answer).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return the id argument", () => {
      // Arrange
      const ID = "1";
      const employee = new Employee("Altan", "1", 2);
      // Act
      const answer = employee.getId();

      // Asertion
      expect(answer).toEqual(ID);
    });
  });
  describe("getEmail", () => {
    it("should return the email argument", () => {
      // Arrange
      const email = "email@";
      const employee = new Employee("Altan", 1, "email@");
      // Act
      const answer = employee.getEmail();

      // Asertion
      expect(answer).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return the role", () => {
      // Arrange
      const role = "Employee";
      const employee = new Employee("Altan", 1, "email");
      // Act
      const answer = employee.getRole();

      // Asertion
      expect(answer).toEqual(role);
    });
  });
});

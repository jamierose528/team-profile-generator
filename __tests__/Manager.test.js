const { expect } = require("@jest/globals");
const { it } = require("jest-circus");
const Manager = require("../lib/Manager");

describe("all properties of Manager", () => {
  it("name", () => {
    const manager = new Manager("Mike", "332", "mike@mike.com");
    expect(manager.name).toBe("Mike");
  });
  it("id", () => {
    const manager = new Manager("Mike", "332", "mike@mike.com");
    expect(manager.id).toBe("332");
  });
  it("email", () => {
    const manager = new Manager("Mike", "332", "mike@mike.com");
    expect(manager.email).toBe("mike@mike.com");
  });
  it("officeNumber", () => {
    const manager = new Manager("Mike", "332", "mike@mike.com", "6363");
    expect(manager.officeNumber).toBe("6363");
  });
});

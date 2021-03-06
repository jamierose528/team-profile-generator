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

describe("all methods of Manager", () => {
  it("getName", () => {
    const manager = new Manager("Jenn", "888", "jenn@jenn.com");
    expect(manager.getName()).toBe("Jenn");
  });
  it("getId", () => {
    const manager = new Manager("Jenn", "888", "jenn@jenn.com");
    expect(manager.getId()).toBe("888");
  });
  it("getEmail", () => {
    const manager = new Manager("Jenn", "888", "jenn@jenn.com");
    expect(manager.getEmail()).toBe("jenn@jenn.com");
  });
  it("getRole", () => {
    const manager = new Manager("Jenn", "888", "jenn@jenn.com");
    expect(manager.getRole()).toBe("Manager");
  });
});

const Engineer = require("../lib/Engineer");

describe("all properties of Enginner", () => {
  it("name", () => {
    const engineer = new Engineer("Mike", "332", "mike@mike.com");
    expect(engineer.name).toBe("Mike");
  });
  it("id", () => {
    const engineer = new Engineer("Mike", "332", "mike@mike.com");
    expect(engineer.id).toBe("332");
  });
  it("email", () => {
    const engineer = new Engineer("Mike", "332", "mike@mike.com");
    expect(engineer.email).toBe("mike@mike.com");
  });
  it("github", () => {
    const engineer = new Engineer("Mike", "332", "mike@mike.com", "mikey");
    expect(engineer.github).toBe("mikey");
  });
});

describe("all methods of Engineer", () => {
  it("getName", () => {
    const engineer = new Engineer("Jenn", "888", "jenn@jenn.com");
    expect(engineer.getName()).toBe("Jenn");
  });
  it("getId", () => {
    const engineer = new Engineer("Jenn", "888", "jenn@jenn.com");
    expect(engineer.getId()).toBe("888");
  });
  it("getEmail", () => {
    const engineer = new Engineer("Jenn", "888", "jenn@jenn.com");
    expect(engineer.getEmail()).toBe("jenn@jenn.com");
  });
  it("getRole", () => {
    const engineer = new Engineer("Jenn", "888", "jenn@jenn.com");
    expect(engineer.getRole()).toBe("Engineer");
  });
});

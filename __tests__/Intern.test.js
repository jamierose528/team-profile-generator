const Intern = require("../lib/Intern");

describe("all properties of Intern", () => {
  it("name", () => {
    const intern = new Intern("Mike", "332", "mike@mike.com");
    expect(intern.name).toBe("Mike");
  });
  it("id", () => {
    const intern = new Intern("Mike", "332", "mike@mike.com");
    expect(intern.id).toBe("332");
  });
  it("email", () => {
    const intern = new Intern("Mike", "332", "mike@mike.com");
    expect(intern.email).toBe("mike@mike.com");
  });
  it("school", () => {
    const intern = new Intern("Mike", "332", "mike@mike.com", "UCLA");
    expect(intern.school).toBe("UCLA");
  });
});

describe("all methods of Intern", () => {
  it("getName", () => {
    const intern = new Intern("Jenn", "888", "jenn@jenn.com");
    expect(intern.getName()).toBe("Jenn");
  });
  it("getId", () => {
    const intern = new Intern("Jenn", "888", "jenn@jenn.com");
    expect(intern.getId()).toBe("888");
  });
  it("getEmail", () => {
    const intern = new Intern("Jenn", "888", "jenn@jenn.com");
    expect(intern.getEmail()).toBe("jenn@jenn.com");
  });
  it("getRole", () => {
    const intern = new Intern("Jenn", "888", "jenn@jenn.com");
    expect(intern.getRole()).toBe("Intern");
  });
});

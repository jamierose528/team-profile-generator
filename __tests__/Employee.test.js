const Employee = require("../lib/Employee");

describe("all properties of Employee", () => {
  it("name", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.name).toBe("Mike");
  });
  it("id", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.id).toBe("332");
  });
  it("email", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.email).toBe("mike@mike.com");
  });
});

describe("all methods of Employee", () => {
  it("getName", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getName()).toBe("Jenn");
  });
  it("getId", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getId()).toBe("888");
  });
  it("getEmail", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getEmail()).toBe("jenn@jenn.com");
  });
  it("getRole", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getRole()).toBe("Employee");
  });
});

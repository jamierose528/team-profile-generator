const Employee = require("../lib/Employee");

test("all properties of Employee", () => {
  test("name", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.name).toBe("Mike");
  });
  test("id", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.id).toBe("332");
  });
  test("email", () => {
    const employee = new Employee("Mike", "332", "mike@mike.com");
    expect(employee.email).toBe("mike@mike.com");
  });
});
test("all methods of Employee", () => {
  test("getName", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getName()).toBe("Jenn");
  });
  test("getId", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getId()).toBe("888");
  });
  test("getEmail", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getEmail()).toBe("jenn@jenn.com");
  });
  test("getRole", () => {
    const employee = new Employee("Jenn", "888", "jenn@jenn.com");
    expect(employee.getRole()).toBe("Employee");
  });
});

const functions = require("./function");
// const { it } = require("node:test");
//
// test("Add two 2 and 3", () => {
//   expect(functions.add(2, 3)).toBe(5);
// });
//
// test("Should be null", () => {
//   expect(functions.isNull()).toBeNull();
// });
//
// test("Should be falsy", () => {
//   expect(functions.checkValue(null)).toBeFalsy();
// });
//
// test("User should be Joseph Osawe", () => {
//   expect(functions.createUser()).toEqual({
//     firstName: "Joseph",
//     lastName: "Osawe",
//   });
// });
//
// test("Should be under 1600", () => {
//   const load1 = 800;
//   const load2 = 700;
//   expect(load1 + load2).toBeLessThan(1600);
// });
//
// test('There is no "I" in team', () => {
//   expect("team").not.toMatch(/I/);
// });
//
// test("Admin should be in usernames", () => {
//   usernames = ["John", "Karem", "Admin"];
//   expect(usernames).toContain("Admin");
// });

describe("Add function", () => {
  it("Add 2,2 is equal to 4", () => {
    expect(functions.add(2, 2)).toBe(4);
  });
  it('There is no "I" in team', () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("Random string", () => {
  it("Should a random string of 20", () => {
    const result = functions.randomStrings(20);
    expect(result).toHaveLength(20);
  });
});

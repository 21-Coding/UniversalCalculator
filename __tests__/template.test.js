import { Being } from './../src/calculator.js';



describe("Being", () => {
  test("should show the users current age on Earth.", () => {
    let user = new Being(21)
    expect(user.age).toEqual(21);
  });
});

import { Being } from './../src/calculator.js';



describe("Being", () => {
  test("should show the users current age on Earth.", () => {
    let user = new Being(21)
    expect(user.age).toEqual(21);
  });

  test("should show the users current age on Mercury.", () => {
    let user = new Being(21)
     user.heyMercury();
    expect(user.mercury).toEqual(88);
  });

  test("should show the users current age on Jupiter.", () => {
    let user = new Being(21)
     user.heyJupiter();
    expect(user.jupiter).toEqual(2);
  });

  test("should show the users current age on Mars.", () => {
    let user = new Being(21)
     user.heyMars();
    expect(user.mars).toEqual(11);
  });

  test("should show the users current age on Venus.", () => {
    let user = new Being(21)
     user.heyVenus();
    expect(user.venus).toEqual(11);
  });
});

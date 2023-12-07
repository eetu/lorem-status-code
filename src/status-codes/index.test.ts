import { getRandomStatusCode } from ".";

describe("getRandomStatusCode()", () => {
  test("should return random status code", () => {
    expect(getRandomStatusCode()).toEqual(expect.any(Number));
  });
});

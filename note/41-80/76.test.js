/*

*/

function solution(n) {
  let factorial = 1;
  let num = 1;
  while (factorial < n) {
    factorial *= num += 1;
  }
  return factorial > n ? num - 1 : num;
}

describe("solution", () => {
  test("1", () => {
    expect(solution()).toEqual();
  });

  test("2", () => {
    expect(solution()).toEqual();
  });
});

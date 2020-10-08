import Index from "./index";

test("fully covered", () => {
  const indexObj = new Index();
  expect(indexObj.fully_covered()).toEqual(true);
});

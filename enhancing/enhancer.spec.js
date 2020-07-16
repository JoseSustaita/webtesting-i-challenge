const enhancer = require("./enhancer.js");

const test_items = [
  {
    name: "Low Item",
    durability: 10,
    enhancement: 0,
  },
  {
    name: "Mid Item",
    durability: 50,
    enhancement: 10,
  },
  {
    name: "Mid-High Item",
    durability: 75,
    enhancement: 15,
  },
  {
    name: "Mid-High Item 2",
    durability: 80,
    enhancement: 17,
  },
  {
    name: "High Item",
    durability: 100,
    enhancement: 20,
  },
];

// test away!

//Repair tests
describe("item enhancer unit tests", () => {
  it("repairs", () => {
    expect(enhancer.repair(test_items[0]).durability).toBe(100);
    expect(enhancer.repair(test_items[1]).durability).toBe(100);
    expect(enhancer.repair(test_items[2]).durability).toBe(100);
    expect(enhancer.repair(test_items[3]).durability).toBe(100);
    expect(enhancer.repair(test_items[4]).durability).toBe(100);
  });
});

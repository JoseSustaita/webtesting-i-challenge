const enhancer = require("./enhancer.js");

const test_items = [
  {
    name: "Item 0",
    durability: 10,
    enhancement: 0,
  },
  {
    name: "Item 1",
    durability: 25,
    enhancement: 10,
  },
  {
    name: "Item 2",
    durability: 75,
    enhancement: 15,
  },
  {
    name: "Item 3",
    durability: 80,
    enhancement: 17,
  },
  {
    name: "Item 4",
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

  //Enhancement Succeeds test
  it("succeeds on enhancement", () => {
    let newItem = enhancer.succeed(test_items[0]);
    expect(newItem.durability).toBe(10);
    expect(newItem.enhancement).toBe(1);
    newItem = enhancer.succeed(test_items[1]);
    expect(newItem.durability).toBe(25);
    expect(newItem.enhancement).toBe(11);
    newItem = enhancer.succeed(test_items[4]);
    expect(newItem.durability).toBe(100);
    expect(newItem.enhancement).toBe(20);
  });

  //Enhancement Fails test
  it("fails on enhancement", () => {
    let newItem = enhancer.fail(test_items[0]);
    expect(newItem.enhancement).toBe(0);
    expect(newItem.durability).toBe(5);
    newItem = enhancer.fail(test_items[1]);
    expect(newItem.enhancement).toBe(10);
    expect(newItem.durability).toBe(20);
    newItem = enhancer.fail(test_items[2]);
    expect(newItem.enhancement).toBe(15);
    expect(newItem.durability).toBe(65);
    newItem = enhancer.fail(test_items[3]);
    expect(newItem.enhancement).toBe(16);
    expect(newItem.durability).toBe(70);
    newItem = enhancer.fail(test_items[4]);
    expect(newItem.enhancement).toBe(19);
    expect(newItem.durability).toBe(90);
  });
});

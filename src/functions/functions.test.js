import {cutString, numberInput, getManager} from "./functions";

describe("cutString", () => {
    const testString = "Today was a wonderful day. We watched a move with my friends"
    test("positive", () => {
        expect(cutString(
            testString, 3)
            ).toBe("Today was a...");
        expect(cutString(
            testString, 2)
            ).toBe("Today was...");
        expect(cutString(
            "Today", 1)
            ).toBe("Today...");
    });
    test("negative", () => {
        expect(cutString(
            123, 2)
            ).toBeUndefined;
        expect(cutString(
            null, 5)
            ).toBeUndefined;
        expect(cutString(
            "bla", -5)
            ).toBeUndefined;
        expect(cutString(
            testString, 40)
            ).toBeUndefined;
    });
});


describe("numberInput", () => {
    test("positive", () => {
       expect(numberInput("12")).toBe("12");
       expect(numberInput(0)).toBe("0");
       expect(numberInput("00")).toBe("0");
       expect(numberInput("101")).toBe("101");
       expect(numberInput("01")).toBe("1");
       expect(numberInput(405)).toBe("405");
    });
    test("negative", () => {
       expect(numberInput(null)).toBeUndefined;
       expect(numberInput(undefined)).toBeUndefined;
       expect(numberInput(-5)).toBeUndefined;
       expect(numberInput(100001)).toBeUndefined;
    });
});


describe("getManager", () => {
    test("positive", () => {
       expect(getManager()).toBe(`https://fakestoreapi.com/products?limit=9`);
       expect(getManager()).toBe(`https://fakestoreapi.com/products?limit=18`);
       expect(getManager({category:"somecategory"})).toBe(`https://fakestoreapi.com/products/category/somecategory?limit=9`);
       expect(getManager()).toBe(`https://fakestoreapi.com/products/category/somecategory?limit=18`);
       expect(getManager({category:"somecategory", sort:"title"})).toBe(`https://fakestoreapi.com/products/category/somecategory?sort=title&limit=18`);
    });
    test("negative", () => {
      expect(getManager({})).toBeInstanceOf(Error);
      expect(getManager({tord:"sad"})).toBeInstanceOf(Error);
      expect(getManager({sort: 123, category: Infinity})).toBeInstanceOf(Error);
    });
});
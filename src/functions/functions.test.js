import {cutString} from "./functions";

describe("functions", () => {
    test("positive", () => {
        expect(cutString(
            "Today was a wonderful day. We watched a move with my friends", 8)
            ).toBe("Today wa...");
        expect(cutString(
            "Today was a wonderful day. We watched a move with my friends", 2)
            ).toBe("To...");
        expect(cutString(
            "Today was a wonderful day. We watched a move with my friends", 1)
            ).toBe("T...");
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
    });
});
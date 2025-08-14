import { getIntersects, type TSlot } from "./index";

describe('getIntersects', () => {
    const freeSlot: TSlot = [2, 8];

    test('left border less start', () => {
        expect(getIntersects(freeSlot, [0, 1])).toStrictEqual([[2, 8]]);
        expect(getIntersects(freeSlot, [0, 2])).toStrictEqual([[2, 8]]);
        expect(getIntersects(freeSlot, [0, 5])).toStrictEqual([[5, 8]]);
        expect(getIntersects(freeSlot, [0, 8])).toStrictEqual([]);
        expect(getIntersects(freeSlot, [0, 10])).toStrictEqual([]);
    });

    test('left border equal start', () => {
        expect(getIntersects(freeSlot, [2, 3])).toStrictEqual([[3, 8]]);
        expect(getIntersects(freeSlot, [2, 8])).toStrictEqual([]);
        expect(getIntersects(freeSlot, [2, 10])).toStrictEqual([]);
    });

    test('left border more start and less end', () => {
        expect(getIntersects(freeSlot, [3, 5])).toStrictEqual([[2, 3], [5, 8]]);
        expect(getIntersects(freeSlot, [3, 8])).toStrictEqual([[2, 3]]);
        expect(getIntersects(freeSlot, [3, 10])).toStrictEqual([[2, 3]]);
    });

    test('left border equal end', () => {
        expect(getIntersects(freeSlot, [8, 9])).toStrictEqual([[2, 8]]);
    });

    test('left border more end', () => {
        expect(getIntersects(freeSlot, [10, 11])).toStrictEqual([[2, 8]]);
    });
});
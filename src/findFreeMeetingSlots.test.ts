import { findFreeMeetingSlots } from "./index";

describe('findFreeMeetingSlots', () => {
    test('empty case', () => {
        expect(findFreeMeetingSlots([])).toStrictEqual([[0, 24]]);
    });

    test('full case', () => {
        expect(findFreeMeetingSlots([[[0, 24]]])).toStrictEqual([]);
    });

    test('test 1', () => {
        expect(findFreeMeetingSlots([
            [[16, 18], [11, 12], [14, 15]],
            [[15, 17]],
            [[10, 13]],
        ])).toStrictEqual([
            [0, 10],
            [13, 14],
            [18, 24]
        ]);
    });

    test('test 2', () => {
        expect(findFreeMeetingSlots([
            [[11, 12.34], [14.54, 19], [19.30, 20]],
            [[15.45, 16], [17, 19.13]],
            [[10, 13]],
        ])).toStrictEqual([
            [0, 10],
            [13, 14.54],
            [19.13, 19.3],
            [20, 24]
        ]);
    });
});

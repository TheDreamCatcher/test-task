export type TSlot = [number, number];
export type TSlotUser = TSlot[];

export function getIntersects(freeSlot: TSlot, usedSlot: TSlot): TSlot[] {
    const [freeStart, freeEnd] = freeSlot;
    const [usedStart, usedEnd] = usedSlot;

    // Варианты, что нет пересечения
    if (
        usedEnd <= freeStart ||
        usedStart >= freeEnd
    ) {
        return [freeSlot];
    }

    // Частичное покрытие занятым слотом свободного
    if (usedStart <= freeStart && usedEnd < freeEnd && usedEnd >= freeStart) {
        return [[usedEnd, freeEnd]];
    }

    // Частичное покрытие занятым слотом свободного
    if (usedStart > freeStart && usedStart < freeEnd && usedEnd >= freeEnd) {
        return [[freeStart, usedStart]];
    }

    // Занятый слот полностью покрывает свободное окно
    if (usedStart <= freeStart && usedEnd >= freeEnd) {
        return [];
    }

    // Занятый слот строго внутри свободного - получаем 2 новых слота
    return [[freeStart, usedStart], [usedEnd, freeEnd]];
}

export function findFreeMeetingSlots(slots: TSlotUser[]): TSlot[] {
    const usedSlots: TSlot[] = slots.flat();

    return usedSlots.reduce((acc: TSlot[], usedSlot: TSlot) => {
        const result: TSlot[] = [];

        acc.forEach(freeSlot => {
            getIntersects(freeSlot, usedSlot).forEach(newSlot => result.push(newSlot));
        })

        return result;
    }, [[0, 24]]);
}

export interface Item {
    name: string;
    value: number;
};
export const costItems: Item[] = [
        { name: "no cost", value: 0 },
        { name: "cheap", value: 1 },
        { name: "reasonable", value: 2 },
        { name: "expensive", value: 3 }
    ];

export const capacityItems: Item[] = [
        { name: "low", value: 1 },
        { name: "mid", value: 2 },
        { name: "high", value: 3 }
    ];

export const distanceItems: Item[] = [
        { name: "at home", value: 0 },
        { name: "walking distance", value: 1 },
        { name: "short drive", value: 2 },
        { name: "daytrip", value: 3 }
    ];

export const timeItems: Item[] = [
        { name: "a few hours max", value: 1 },
        { name: "less than a day", value: 2 },
        { name: "multiple days", value: 3 }
    ];
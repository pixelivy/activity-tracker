import { useState } from "react";
import type { Item } from "../utils/interfaces";
import { CategoryCheckbox, CategoryPicker } from "../components/OptionTools";

export default function Home(){
    const [cost, setCost] = useState<number>(1);
    const [capacity, setCapacity] = useState<number>(1);
    const [time, setTime] = useState<number>(1);
    const [distance, setDistance] = useState<number>(1);
    const [friends, setFriends] = useState<boolean>(false);
    const costItems: Item[] = [
        { name: "no cost", value: 0 },
        { name: "cheap", value: 1 },
        { name: "reasonable", value: 2 },
        { name: "expensive", value: 3 }
    ]
    const capacityItems: Item[] = [
        { name: "low", value: 1 },
        { name: "mid", value: 2 },
        { name: "high", value: 3 }
    ]
    const distanceItems: Item[] = [
        { name: "at home", value: 0 },
        { name: "walking distance", value: 1 },
        { name: "short drive", value: 2 },
        { name: "daytrip", value: 3 },
        { name: "vacation", value: 4 }
    ]
    const timeItems: Item[] = [
        { name: "a few hours max", value: 1 },
        { name: "less than a day", value: 2 },
        { name: "multiple days", value: 3 }
    ]

    return(
        <div className="bg-back size-full justify-content-center align-items-center">
            <CategoryPicker category="cost" value={cost} setValue={setCost} options={costItems} />
            <CategoryPicker category="capacity" value={capacity} setValue={setCapacity} options={capacityItems} />
            <CategoryPicker category="distance" value={distance} setValue={setDistance} options={distanceItems} />
            <CategoryPicker category="time" value={time} setValue={setTime} options={timeItems} />
            <CategoryCheckbox category="friends" value={friends} setValue={setFriends}/>

            <p>
                cost: {cost} 
                capacity: {capacity} 
                distance: {distance} 
                time: {time} 
                friends: {String(friends)} 
            </p>
        </div>
    )
}
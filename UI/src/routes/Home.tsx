import { useState } from "react";
import { costItems, timeItems, capacityItems, distanceItems } from "../utils/interfaces";
import { CategoryCheckbox, CategoryPicker } from "../components/OptionTools";

export default function Home(){
    const [cost, setCost] = useState<number>(1);
    const [capacity, setCapacity] = useState<number>(1);
    const [time, setTime] = useState<number>(1);
    const [distance, setDistance] = useState<number>(1);
    const [friends, setFriends] = useState<boolean>(false);

    return(
        <>
        <CategoryPicker category="cost" value={cost} setValue={setCost} options={costItems} />
        <CategoryPicker category="capacity" value={capacity} setValue={setCapacity} options={capacityItems} />
        <CategoryPicker category="distance" value={distance} setValue={setDistance} options={distanceItems} />
        <CategoryPicker category="time" value={time} setValue={setTime} options={timeItems} />
        <CategoryCheckbox category="friends" value={friends} setValue={setFriends}/>
        </>
    )
}
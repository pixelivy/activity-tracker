import { useState } from "react";
import { CategoryCheckbox, CategoryPicker, InputField } from "../components/OptionTools";
import { costItems, timeItems, capacityItems, distanceItems } from "../utils/interfaces";
import { Button } from "@base-ui/react";

export default function Create() {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [cost, setCost] = useState<number>(2);
    const [capacities, setCapacities] = useState<number>(2);
    const [distance, setDistance] = useState<number>(2);
    const [time, setTime] = useState<number>(2);
    const [friends, setFriends] = useState<boolean>(false);

    return (<>
        <div className="flex flex-col md:flex-row items-start">
        <InputField label="Name" value={name} setValue={setName}/>
        <InputField label="Description" value={description} setValue={setDescription}/>
        <InputField label="URL" value={url} setValue={setUrl}/>
        </div>
        <CategoryPicker category="capacities" value={capacities} setValue={setCapacities} options={capacityItems} />
        <CategoryPicker category="distance" value={distance} setValue={setDistance} options={distanceItems} />
        <CategoryPicker category="cost" value={cost} setValue={setCost} options={costItems} />
        <CategoryPicker category="time" value={time} setValue={setTime} options={timeItems} />
        <CategoryCheckbox category="friends" value={friends} setValue={setFriends} />
        <Button className="rounded-xl p-1 m-2 md:m-4 flex border-edge border-2 text-text text-s md:text-xl md:p-5">Submit</Button>
        </>
    );
}
import { useState, type FormEvent } from "react";
import { CategoryCheckbox, CategoryPicker } from "../components/OptionTools";
import type { Item } from "../utils/interfaces";

export default function Create() {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [cost, setCost] = useState<number>(2);
    const [capacities, setCapacities] = useState<number>(2);
    const [distance, setDistance] = useState<number>(2);
    const [time, setTime] = useState<number>(2);
    const [friends, setFriends] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const costItems: Item[] = [
        { name: "no cost", value: 0 },
        { name: "cheap", value: 1 },
        { name: "reasonable", value: 2 },
        { name: "expensive", value: 3 }
    ];
    const capacityItems: Item[] = [
        { name: "low", value: 1 },
        { name: "mid", value: 2 },
        { name: "high", value: 3 }
    ];
    const distanceItems: Item[] = [
        { name: "at home", value: 0 },
        { name: "walking distance", value: 1 },
        { name: "short drive", value: 2 },
        { name: "daytrip", value: 3 }
    ];
    const timeItems: Item[] = [
        { name: "a few hours max", value: 1 },
        { name: "less than a day", value: 2 },
        { name: "multiple days", value: 3 }
    ];

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");

        const payload = {
            name,
            capacities,
            cost,
            distance,
            time,
            friends,
            description,
            url
        };

        try {
            const response = await fetch("http://localhost:8000/add_activity", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                setMessage("Could not create activity.");
                return;
            }

            setMessage("Activity created.");
            setName("");
            setDescription("");
            setUrl("");
            setCost(2);
            setCapacities(2);
            setDistance(2);
            setTime(2);
            setFriends(false);
        } catch {
            setMessage("Could not create activity.");
        }
    }

    return (
        <form className="bg-back size-full p-6 text-text" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-xl font-semibold">Create activity</h1>
            <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    className="ml-2 rounded border border-edge bg-surface px-2 py-1"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                    className="ml-2 rounded border border-edge bg-surface px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="url">URL</label>
                <input
                    id="url"
                    type="text"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    required
                    className="ml-2 rounded border border-edge bg-surface px-2 py-1"
                />
            </div>

            <div className="mb-2"><CategoryPicker category="cost" value={cost} setValue={setCost} options={costItems} /></div>
            <div className="mb-2"><CategoryPicker category="capacities" value={capacities} setValue={setCapacities} options={capacityItems} /></div>
            <div className="mb-2"><CategoryPicker category="distance" value={distance} setValue={setDistance} options={distanceItems} /></div>
            <div className="mb-2"><CategoryPicker category="time" value={time} setValue={setTime} options={timeItems} /></div>
            <div className="mb-4"><CategoryCheckbox category="friends" value={friends} setValue={setFriends} /></div>

            <button type="submit" className="rounded bg-text px-3 py-2 text-back">Create</button>
            {message ? <p className="mt-3">{message}</p> : null}
        </form>
    );
}
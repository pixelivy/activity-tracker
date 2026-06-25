import { useState, type FormEvent } from "react";
import { CategoryCheckbox, CategoryPicker } from "../components/OptionTools";
import { costItems, timeItems, capacityItems, distanceItems } from "../utils/interfaces";

export default function Create() {
    const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000").replace(/\/$/, "");
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [cost, setCost] = useState<number>(2);
    const [capacities, setCapacities] = useState<number>(2);
    const [distance, setDistance] = useState<number>(2);
    const [time, setTime] = useState<number>(2);
    const [friends, setFriends] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

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
            const response = await fetch(`${apiBaseUrl}/add_activity`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                setMessage(`Could not create activity (HTTP ${response.status})${errorText ? `: ${errorText}` : "."}`);
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
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`Network error while creating activity: ${error.message}`);
                return;
            }
            setMessage("Network error while creating activity.");
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
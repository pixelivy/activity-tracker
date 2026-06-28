import { Button } from "@base-ui/react";
import { useState, useEffect } from "react";
import type { Activity } from "../utils/interfaces";

export default function Listing() {
    const API = "localhost:8000"
    const [data, setData] = useState<Activity[]>([]);

    useEffect(() => {
        fetch(`http://${API}/get_activities`)
        .then(res => res.json())
        .then(payload => setData(payload));
    },[]);

    const trackItems = data.map((activity) => 
        <tr key={activity.id}>
            <td className="py-2 pr-4">{activity.name}</td>
            <td className="py-2 pr-4">{activity.description}</td>
            <td>
                <Button>details</Button>
            </td>
        </tr>);

    return (<>
        <table className="w-full text-left text-sm text-text">
            <thead className="border-b border-edge text-text/70">
                <tr>
                    <th className="py-2 pr-4 font-medium">name</th>
                    <th className="py-2 pr-4 font-medium">description</th>
                    <th>link</th>
                </tr>
            </thead>
            <tbody>
            {trackItems}
            </tbody>
        </table>
    </>
    )
}
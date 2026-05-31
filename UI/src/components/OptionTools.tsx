import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react';
import {Checkbox} from '@base-ui/react/checkbox'
import type { Dispatch, SetStateAction } from 'react';
import type { Item } from '../utils/interfaces';

export function CategoryPicker({ category, options, value, setValue }: {category: string, options: Item[], value: number, setValue: Dispatch<SetStateAction<number>>}) {
    return (
        <div>
            <p className='text-text'>{category}</p>
            <ToggleGroup
                className="inline-flex rounded-md shadow-sm"
                value={[String(value)]}
                onValueChange={(groupValue) => setValue(Number(groupValue[0] ?? value))}
            >
                {options.map((option) => (
                    <Toggle
                    key={String(option.name)}
                    value={String(option.value)}
                        className="px-4 py-2 text-sm font-medium border border-edge
                        first:rounded-l-md last:rounded-r-md -ml-px first:ml-0
                        bg-back text-text hover:bg-surface"
                    >
                        {option.name}
                    </Toggle>
                ))}
            </ToggleGroup>
        </div>
    );
}

export function CategoryCheckbox({ category, value, setValue }: { category: string, value: boolean, setValue: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Checkbox.Root
                checked={value}
                onCheckedChange={setValue}
                style={{
                    width: "1rem",
                    height: "1rem",
                    border: "1px solid #333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                }}
            >
                <Checkbox.Indicator
                    style={{
                        width: "0.75rem",
                        height: "0.75rem",
                        background: "#333",
                        display: "block",
                    }}
                />
            </Checkbox.Root>
            <label>{category}</label>
        </div>
    );
}
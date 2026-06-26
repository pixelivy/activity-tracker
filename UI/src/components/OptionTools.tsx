import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@base-ui/react';
import {Checkbox} from '@base-ui/react/checkbox'
import type { Dispatch, SetStateAction } from 'react';
import type { Item } from '../utils/interfaces';
import {FaCheck} from 'react-icons/fa';

export function CategoryPicker({ category, options, value, setValue }:
    {category: string,
    options: Item[],
    value: number,
    setValue: Dispatch<SetStateAction<number>>}) {
    return (
        <div className='flex flex-col items-start gap-0'>
            <label className='text-text text-s md:text-2xl ml-1.5 md:ml-4'>{category}</label>
            <ToggleGroup
                className="inline-flex rounded-md shadow-sm m-1.5 md:m-4"
                value={[String(value)]}
                onValueChange={(groupValue) => setValue(Number(groupValue[0] ?? value))}
            >
                {options.map((option) => (
                    <Toggle
                    key={String(option.name)}
                    value={String(option.value)}
                        className="px-2 md:px-4 py-2 text-xs md:text-xl font-medium border border-edge
                        first:rounded-l-md last:rounded-r-md -ml-px first:ml-0
                        bg-primary text-text hover:bg-accent"
                    >
                        <label className='text-text text-l p-0 md:p-3'>{option.name}</label>
                    </Toggle>
                ))}
            </ToggleGroup>
        </div>
    );
}

export function CategoryCheckbox({ category, value, setValue }: { category: string, value: boolean, setValue: Dispatch<SetStateAction<boolean>> }) {
    return (
        <div className="flex items-center gap-2 m-1.5 md:m-4">
            <Checkbox.Root
                checked={value}
                onCheckedChange={setValue}
                className="size-6 border-2 border-edge flex items-center justify-center bg-primary"
            >
                <Checkbox.Indicator>
                    <FaCheck/>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label className='text-text text-s md:text-2xl'>{category}</label>
        </div>
    );
}

export function InputField({label, value, setValue}:{label: string, value: string, setValue: Dispatch<SetStateAction<string>>}){
    return(
    <div className="flex flex-col items-start gap-2 ml-1.5 md:ml-4">
                <label className='text-text text-s md:text-2xl'>{label}</label>
                <input
                    id="name"
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    required
                    className="ml-2 rounded border border-edge bg-surface text-medium px-2 py-1"
                    />
            </div>)
}
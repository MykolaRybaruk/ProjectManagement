import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // valudation

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return <div className="w-[45rem] mt-16">
        <menu className="flex items-center justify-center gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-850">Cancel</button>
                <button onClick={handleSave}
                        className="px-6 py-2 rounded-md bg-stone:800 text-stone:50 hover:bg-stone-950">Save</button>
            </li>
        </menu>
        <div>
            <Input type='text' ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type='date' ref={dueDate} label="Due Date" />
        </div>
    </div>
}
export default function NewProject() {
    return <div>
        <menu>
            <li>
                <button>Cancel</button>
                <button>Save</button>
            </li>
        </menu>
        <div>
            <p>
                <label>Title</label>
                <input />
            </p>
        </div>
        <div>
            <p>
                <label>Description</label>
                <textarea />
            </p>
        </div>
        <div>
            <p>
                <label>Due Date</label>
                <input />
            </p>
        </div>
    </div>
}
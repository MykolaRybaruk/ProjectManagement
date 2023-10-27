export default function Input({ label, textarea, ...props }) {
    return <p>
        <labell>{label}</labell>
        {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
}
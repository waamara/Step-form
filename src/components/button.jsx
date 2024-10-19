export default function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn text-red-700">
            {children}
        </button>
    );
}
export default function Button({ func, char, isOperation }) {
    var cName = isOperation == "true" ? "operator" : "";
    return (
        <span
            className={cName}
            onClick={() => func({ input: char })}
        >
            {char}
        </span>
    )
}

export default function Button({ func, char, isOperation }) {
    if (char == "") {
        return "";
    }

    var cName = isOperation == "True" ? "operator" : "";
    return (
        <span
            className={cName}
            onClick={() => func({ input: char })}
        >
            {char}
        </span>
    )
}

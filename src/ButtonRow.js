import Button from "./Button";

export default function ButtonRow({ func, td1, td2, td3, td4 }) {
    var operators = ['+', '-', '*', '/', 'C', '='];
    return (
        <tr>
            <td><Button func={func} char={td1} isOperation={operators.includes(td1)} /></td>
            <td><Button func={func} char={td2} isOperation={operators.includes(td2)} /></td>
            <td><Button func={func} char={td3} isOperation={operators.includes(td3)} /></td>
            <td><Button func={func} char={td4} isOperation={operators.includes(td4)} /></td>
        </tr>
    )
}

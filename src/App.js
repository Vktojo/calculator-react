import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [visor, setVisor] = useState(0);

    function setInput(d) {
        var input = d.target.textContent;
        if (input == "C") {
            setVisor("0");
            return;
        }

        var isCurrentOperator = isOperator(input);

        // Se começar com zero, posso colocar o que vier de tela
        if (visor == "0" && !isCurrentOperator) {
            setVisor(input);
            return;
        }

        // Caso mande dois operadores seguidos, prioriza o último
        var isLastCharOperator = isOperator(visor.substr(-1));
        if (isCurrentOperator && isLastCharOperator) {
            // Mas se o atual for um "=", limpa. Caso contrário, substitui 
            if (input == '=') {
                replaceLastChar(visor, '');
            } else {
                setVisor(replaceLastChar(visor, input));
            }
            return;
        }

        // Caso seja um operador
        if (isCurrentOperator) {
            // se ja tem algum operador, resolve a conta
            if (hasOperator(visor)) {
                if (input == "=") {
                    setVisor(eval(visor) + "");
                } else {
                    setVisor(eval(visor) + input);
                }
                return;
            }
            // se não tem e é "=", nem coloca
            else if (input == "=") {
                return;
            }
        }

        setVisor(visor + input);
    }

    function isOperator(d) {
        var operators = ['+', '-', '*', '/', 'C', '='];
        return operators.includes(d);
    }

    function hasOperator(d) {
        for (let i = 0; i < d.length; i++) {
            if (isOperator(d[i])) {
                return true;
            }
        }
        return false;
    }

    function replaceLastChar(string, charToReplace) {
        return string.substring(0, string.length - 1) + charToReplace;
    }


    return (
        <div className="text-center">
            <h1>Minha calculadora</h1>
            <h3>Vitor Kenzo Tojo Costa</h3>
            <div className="center">
                <table id="calculator">
                    <tbody>
                        <tr>
                            <td colSpan="4" id="visor">{visor}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><span onClick={setInput} className="operator">C</span></td>
                            <td><span onClick={setInput} className="operator">/</span></td>
                        </tr>
                        <tr>
                            <td><span onClick={setInput}>7</span></td>
                            <td><span onClick={setInput}>8</span></td>
                            <td><span onClick={setInput}>9</span></td>
                            <td><span onClick={setInput} className="operator">*</span></td>
                        </tr>
                        <tr>
                            <td><span onClick={setInput}>4</span></td>
                            <td><span onClick={setInput}>5</span></td>
                            <td><span onClick={setInput}>6</span></td>
                            <td><span onClick={setInput} className="operator">-</span></td>
                        </tr>
                        <tr>
                            <td><span onClick={setInput}>1</span></td>
                            <td><span onClick={setInput}>2</span></td>
                            <td><span onClick={setInput}>3</span></td>
                            <td><span onClick={setInput} className="operator">+</span></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><span onClick={setInput}>0</span></td>
                            <td></td>
                            <td><span onClick={setInput} className="operator">=</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;

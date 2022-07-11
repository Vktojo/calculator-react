import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [visor, setVisor] = useState(0);

    function setInput(d) {
        return;
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

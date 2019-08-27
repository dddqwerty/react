import React, { useState } from 'react';
import './Login.css';
import { numericLiteral } from '@babel/types';

const Login = () => {

    const [number, numberplus] = useState('');
    const [utga1, utgaolgoh] = useState(0);
    const [utga2, utgaolgoh1] = useState(0);

    

    const click = (value) => {

        numberplus(number + value);

    }
    const uildel = () => {

        utgaolgoh(number)

        numberplus('')


    }
    const ans = () => {

        // utgaolgoh1(() => number);

        numberplus(Number(utga1) + Number(number));
    }


    return (
        <div className="dad">
            <div className="container">
                <div className="input">{number}</div>

                <div className="buttons">
                    <button onClick={() => click(7)}>7</button>
                    <button onClick={() => click(8)}>8</button>
                    <button onClick={() => click(9)}>9</button>
                    <button onClick={uildel}>+</button>
                    <button onClick={() => click(4)}>4</button>
                    <button onClick={() => click(5)}>5</button>
                    <button onClick={() => click(6)}>6</button>
                    <button>-</button>
                    <button onClick={() => click(1)}>1</button>
                    <button onClick={() => click(2)}>2</button>
                    <button onClick={() => click(3)}>3</button>
                    <button>*</button>
                    <button className="zero">0</button>
                    <button onClick={ans}>=</button>
                    <button>/</button>
                </div>
            </div>
        </div>
    )
}

export default Login;

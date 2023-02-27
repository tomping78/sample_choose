import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const QuestionTitle = styled.div`
    width:100%;
    padding:10px 0;
    text-align: center;
    background:darkblue;
    color:orangered;
    font-size:20px;
    font-weight:bold;
`

function Main(props) {

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (+(value) === first * second) {
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setResult('정답입니다.');
        } else {
            setValue('');
            setResult('오답입니다. 다시 시도해보세요.');
        }
        
    }
    const myRef = useRef();
    const autoFocus = () => {
        myRef.current.focus();
    }

    return (
        <div>
            <QuestionTitle>{first} * {second} ?</QuestionTitle>
            <form onSubmit={onSubmit}>
                <input type='number' value={value} onChange={onChange} ref={myRef} />
                <button onClick={autoFocus}>입력</button>
            </form>
            <h3>{result}</h3>
        </div>
    );
};

export default Main;

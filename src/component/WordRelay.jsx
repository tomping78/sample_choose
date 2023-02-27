import React from 'react';
import { memo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const WordRelay = memo(() => {

    const [word, setWord] = useState('호랑나비');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('??');

    const onSubmit = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0] && value.length >= 2) {
            setResult('정답입니다.');
            setWord(value);
            setValue('')
        } else {
            setResult('오답이거나, 두글자 이상 입력하셔야 합니다.');
            setValue('')
        }
    }
    const onChange = (e) => {
        setValue(e.target.value)
    }
    useEffect(() => {
        setResult('아주 적절한 답입니다.')
    }, [setValue])

    return (
        <div>
            <h3>{word}</h3>
            <form onSubmit={onSubmit}>
                <input type='text' value={value} onChange={onChange} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </div>
    );
})

export default WordRelay;
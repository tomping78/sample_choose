import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding:40px 32px 32px 32px;
    border-bottom:1px solid #e9ecef;
    h1 {
        margin:0;
        font-size:30px;
        color:#343a40;
    }
    .day {
        margin-top:4px;
        color:#868e96;
        font-size:20px;
    }
    .task-left {
        color:#20c997;
        font-size:15px;
        margin-top:40px;
        font-weight:bold;
    }
`

function Header() {

    const [counter, setCounter] = useState(0);

    const onIncrease = () => {
        setCounter(prevCounter => prevCounter + 1);
    }
    const onDecrease = () => {
        setCounter((counter >= 1) ? counter - 1 : 0);
    }
    const onReset = () => {
        setCounter(0)
    }
    const [title, setTitle] = useState(`Initial count is ${counter}`);
    useEffect(() => {
        setTitle(`Updated count is ${counter}`);
      }, [counter]);

    return (
                <TodoHeadBlock>
                    <h1>2022년 7월10일{title}</h1>
                    <div className='day'>수요일</div>
                    <div className='task-left'>오늘의 할일</div>
                    <h2>입력 값 : {counter}</h2>
                    <button onClick={onIncrease} >plus</button>
                    <button onClick={onDecrease} >minus</button>
                    <button onClick={onReset} >reset</button>
                </TodoHeadBlock>
    );
}

export default Header;
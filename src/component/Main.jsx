import React from 'react';
import styled from 'styled-components';
// import dummy from '../db/data.json';

const TodoTemplateBlock = styled.div`
    width:500px;
    height:700px;

    position:relative;
    background:#fff;
    border-radius:15px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.84);
    margin:10% auto;
    display:flex;
    flex-direction:column;
`;


function Main({children}) {

    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default Main;
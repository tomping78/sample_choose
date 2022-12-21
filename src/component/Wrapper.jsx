import React from 'react';

function Wrapper(props) {
    const style = {
        backgroundColor:'yellow',
    };

    const names = [
        ['james', 20], 
        ['tom', 28], 
        ['babie', 33]
    ];
    const nameList = names.map((name) => console.log(name[0]) );

    return (
        <div style={style}>
            {props.children} {nameList}
        </div>
    );
}

export default Wrapper;
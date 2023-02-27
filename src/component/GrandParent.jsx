import React from 'react';
import Parent from './Parent';


function GrandParent(props) {
    return (
        <div>
            <Parent />
        </div>
    );
}

export default GrandParent;
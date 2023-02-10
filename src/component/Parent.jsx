import React, {useContext} from 'react';
import { MyContext, TitleContext } from '../App';


function Parent() {

    const myname = useContext(MyContext);
    const title = useContext(TitleContext);
    return (
        <div>
            <div>Received: {myname} {title}</div>
        </div>
    );
}

export default Parent;
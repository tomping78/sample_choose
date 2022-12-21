import React from 'react';

function InputSample({username, email, onChange, onCreate}) {

    return (
        <div>
            <input name='username' placeholder='계정명' onChange={onChange} value={username} />
            <input name='email' placeholder='이메일' onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
            <div>값: {username}({email})</div>
            
        </div>
    );
}

export default InputSample;
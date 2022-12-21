import React, {useEffect} from 'react';

function User({user, text, onRemove, onToggle}) {
    const style = {
        cursor:'pointer', 
        color: (user.active) ? 'green' : 'black'
    }

    useEffect(() => {
        console.log('user값이 설정됨');
        console.log(user);
        return () => {
            console.log('user가 바뀌기 전...');
            console.log(user)
            
        }
    }, [user]);
    return (
        <div>
            <b style={style} onClick={() => onToggle(user.id)}>{user.username} <span>{text}</span></b><span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

export default User;
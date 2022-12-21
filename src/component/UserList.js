import React from 'react';
import User from './User';

function UserList({users, onRemove, onToggle}) {


    return (
        <div>
            {users.map((userls) => (
                <User key={userls.id} user={userls} text='good' onRemove={onRemove} onToggle={onToggle} />
            ) )}
        </div>
    );
}

export default UserList;
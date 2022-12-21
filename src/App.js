import React, {useRef, useState} from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './component/Main';
import Header from './component/Header';
import InputSample from './component/InputSample';
import Wrapper from './component/Wrapper';
import DemoLine from './component/DemoLine';
import UserList from './component/UserList';
import MyComponent from './component/UseTime';

const GlobalStyle = createGlobalStyle`
  body {
    background:#e9ecef;
  }
`;

const App = () => {

  const [inputs, setInput] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInput({
      ...inputs, [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'veloper',
        email: 'public.velop@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@gmail.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@gmail.com',
        active: false
    },
  ]);
const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  setUsers(users.concat(user));

  setInput({
    username: '',
    email: '',
  });

  console.log(nextId.current);
  nextId.current += 1;
};
const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};
const onToggle = id => {
  setUsers(
    users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
  )
  
}

  return (
  <>
    <GlobalStyle />
    <Main>
      <Wrapper>
        <Header />
        <MyComponent />
        <InputSample username={username} email={email} onChange={onChange} onCreate={onCreate} />
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        <DemoLine />
      </Wrapper>
    </Main>
    
  </>
  )
}

export default App;

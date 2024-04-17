import React from "react";
import "./App.css";
import Main from "./component/Main";
import Wrapper from "./component/Wrapper";
import WordRelay from "./component/WordRelay";
import { useState, useRef } from "react";
import GrandParent from "./component/GrandParent";
import Counter from "./component/Counter";
import { MyContext, TitleContext } from "./component/Context";
import MainTest from "./component/MainTest";
import LoginForm from "./component/LoginForm";
import UserList from "./component/UserList";
import InputSample from "./component/InputSample";
import { ThemeProvider } from "styled-components";
import Button from "./component/Button";
import Dialog from "./component/Dialog";
import CreateUser from "./component/CreateUser";

function App() {
  const numbers = [1, 3, 5, 7];
  let listNum = numbers.filter((number) => number < 5);
  listNum = listNum.map((number, idx) => {
    return <div key={idx}>{number + 1}</div>;
  });
  let [myname, setMyname] = useState("John!");
  const onChangeName = () => {
    setMyname("Sarah!");
  };

  const [dialog, setDialog] = useState(true);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "vanilar",
      email: "van@nate.com",
    },
    {
      id: 2,
      username: "brook",
      email: "bk@naver.com",
    },
    {
      id: 3,
      username: "bakara",
      email: "kangwon@high1.com",
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  return (
    <>
      <Main />
      <Wrapper />
      <WordRelay />
      <Counter />
      {listNum}
      <MyContext.Provider value={myname}>
        <TitleContext.Provider value="hello world">
          <GrandParent />
          <InputSample />
          <button onClick={onChangeName}>change</button>
        </TitleContext.Provider>
        <MainTest />
        <LoginForm />
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} />
        <ThemeProvider
          theme={{
            palette: {
              blue: "#228be6",
              gray: "#495057",
              pink: "#f06595",
            },
          }}
        >
          <Button>LIST</Button>
          <Button color="gray" size="large">
            OK
          </Button>
          <Button color="pink" size="small" outline widthfull onClick={onClick}>
            DELETE
          </Button>
          <Dialog
            title="정말로 삭제하시겠습니까"
            confirmText="delete"
            cancelText="취소"
            onConfirm={onConfirm}
            onCancel={onCancel}
            visible={dialog}
          >
            데이터를 삭제
          </Dialog>
        </ThemeProvider>
      </MyContext.Provider>
    </>
  );
}

export default App;

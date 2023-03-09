import React from "react";
import "./App.css";
import Main from "./component/Main";
import Wrapper from "./component/Wrapper";
import WordRelay from "./component/WordRelay";
import { useState } from "react";
import GrandParent from "./component/GrandParent";
import Counter from "./component/Counter";
import { MyContext, TitleContext } from "./component/Context";
import MainTest from "./component/MainTest";
import LoginForm from "./component/LoginForm";
import UserList from "./component/UserList";
import InputSample from "./component/InputSample";

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
        <UserList />
      </MyContext.Provider>
    </>
  );
}

export default App;

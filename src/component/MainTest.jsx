import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
function MainTest() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
    age: 0,
  });
  const { name, nickname, age } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  const onReset = () => {
    dispatch({ name: null });
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={(e) => dispatch(e.target)} />
        <input name="nickname" value={nickname} onChange={onChange} />
        <input type="number" name="age" value={age} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
        <div>
          <b>나이: </b>
          {age}
        </div>
      </div>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

export default MainTest;

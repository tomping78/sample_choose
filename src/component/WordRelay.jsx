import React from "react";
import { useState } from "react";

function WordRelay() {
  const [word, setWord] = useState("호랑이");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0] && value.length >= 3) {
      setResult("Good!!!");
      setValue("");
      setWord(value);
    } else {
      setResult("bad! retry!!");
      setValue("");
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <h2>{word}</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <h3>{result}</h3>
    </div>
  );
}

export default WordRelay;

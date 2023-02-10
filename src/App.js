import React from 'react';
import './App.css';
import Main from './component/Main';
import Wrapper from './component/Wrapper';
import WordRelay from './component/WordRelay';
import { createContext } from 'react';
import GrandParent from './component/GrandParent';

export const MyContext = createContext();
export const TitleContext = createContext();

function App() {
  
  return (
    <>
      <Main />
      <Wrapper />
      <WordRelay />
      <MyContext.Provider value='John!'>
        <TitleContext.Provider value='hello world'>
         <GrandParent />
        </TitleContext.Provider>
      </MyContext.Provider>
    </>
  );
}
 
export default App;
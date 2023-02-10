import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Stylediv = styled.div`
    font-weight:bold;
    font-size: 12px;;
    color:red;
`
function UseTime() {
  const [datak, setData] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dataList = datak;

  return (
    <>
            {dataList && dataList.map(item => (
                <Stylediv key={item.id}>{item.title}</Stylediv>
            ))}
    </>
  );
}

export default UseTime
import React, { useState, createContext } from 'react';

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [info , setInfo ] = useState(null); 

  const [index, setIndex] = useState({
    pageNum: 0,
    btnNum: 0,

  });

  const getBtn = () => {
    return info[index.pageNum].btns[index.btnNum];
  };

  const getTypeReq = () => {
    return info[index.pageNum].title.toLocaleLowerCase();
  };

  const changeBtn = (page, btnIndex) => {
    setIndex({
      pageNum: page,
      btnNum: btnIndex,
    });
  };

  return (
    <InfoContext.Provider value={{ info, changeBtn, getBtn, getTypeReq, setInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
};

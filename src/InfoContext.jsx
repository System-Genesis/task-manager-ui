import React, { useState, createContext, useEffect } from 'react';
import { getObj } from './utils/localStorage';

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [info, setInfo] = useState(null);

  // useEffect(() => {
  //   setInfo(getObj('data')?.data || 'no Data');
  // }, []);

  const [index, setIndex] = useState({
    pageNum: 0,
    btnNum: 0,
  });

  const getBtn = () => {
    let newInfo = info;

    if (!newInfo) {
      newInfo = getObj('data')?.data;
      if (!newInfo) return;

      setInfo(newInfo || 'no data');
    }

    return newInfo[index.pageNum-1].btns[index.btnNum];
  };

  const setBtnByTitle = (pageTitle, btnTitle) => {
    console.log(pageTitle, btnTitle);
    let newInfo = info;

    if (!newInfo) {
      newInfo = getObj('data')?.data;
      if (!newInfo) return;
      setInfo(newInfo || 'no data');
    }

    const newPage = newInfo.find((page) => page.title.toLowerCase() === pageTitle.toLowerCase());

    const btnIndex = newPage.btns.findIndex((btn) => btn.title.toLowerCase() === btnTitle.toLowerCase());

    setIndex({ pageNum: newPage.pageNum, btnNum: btnIndex });
    return newPage.btns[btnIndex];
  };

  const getTypeReq = () => {
    let newInfo = info;
    if (!newInfo) {
      newInfo = getObj('data')?.data;
      if (!newInfo) return;
      setInfo(newInfo || 'no data');
    }
    return newInfo[index?.pageNum-1]?.title?.toLowerCase();
  };

  const changeBtn = (page, btnIndex) => {
    setIndex({
      pageNum: page,
      btnNum: btnIndex,
    });
  };

  // return !info ? <p>Loading...</p> : (
  //     <InfoContext.Provider
  //       value={{
  //         info,
  //         changeBtn,
  //         getBtn,
  //         getTypeReq,
  //         setInfo,
  //         getBtnByTitle,
  //         getIndicesByTitle
  //       }}
  //     >
  //       {props.children}
  //     </InfoContext.Provider>
  //   );

  return (
    <InfoContext.Provider
      value={{
        info,
        changeBtn,
        getBtn,
        getTypeReq,
        setInfo,
        setBtnByTitle,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

import React, { useState, createContext } from 'react';

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [info, setInfo] = useState([
    {
      pageNum: 1,
      title: 'Post',
      btns: [
        {
          title: 'post by Id & source',
          href: '/action',
          params: {
            identifiers: 'identifiers',
            source: [
              { value: 'aka', sourceName: 'aka' },
              { value: 'souf', sourceName: 'souf' },
            ],
            type: [
              { value: 'sdda', sourceName: 'sda' },
              { value: 'souf', sourceName: 'souf' },
            ],
          },
        },
        {
          title: 'post by  source',
          href: '/action',
          params: {
           
            source: [
              { value: 'aka', sourceName: 'aka' },
              { value: 'souf', sourceName: 'souf' },
            ],
            type: [
              { value: 'sdda', sourceName: 'sda' },
              { value: 'souf', sourceName: 'souf' },
            ],
          },
        },
      ],
    },
    {
      pageNum: 2,
      title: 'Get',
      btns: [
        {
          title: 'get by Id & source',
          href: '',
          params: [{ identifiers: 'srting', source: ['aka', 'souf'] }],
        },
      ],
    },
  ]);
  const [index, setIndex] = useState(1)

  return (
    <InfoContext.Provider value={[info, setInfo,index,setIndex]}>
      {props.children}
    </InfoContext.Provider>
  );
};

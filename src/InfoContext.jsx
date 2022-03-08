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
  return (
    <InfoContext.Provider value={[info, setInfo]}>
      {props.children}
    </InfoContext.Provider>
  );
};

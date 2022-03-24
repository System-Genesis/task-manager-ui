export const data = [
  {
    pageNum: 1,
    title: 'Get',
    btns: [
      {
        title: 'all from splitter',
        name: 'splitter/all',
        message: 'זהירות!! בקשה כבדה '
      },
      {
        title: 'source from splitter',
        params: {
          source: ['aka', 'souf'],
        },
        name: 'splitter/source/:source',
      },
      {
        title: 'identifier & source from splitter',
        params: {
          identifier: 'identifier',
          source: ['aka', 'souf'],
        },
        name: 'splitter/identifier/:identifier/source/:source',
      },
      {
        title: 'identifier from splitter',
        params: {
          identifier: 'identifier',
        },
        name: 'splitter/identifier/:identifier',
      },
    ],
  },
  {
    pageNum: 2,
    title: 'Post',
    btns: [
      {
        title: 'Post by identifier & source',
        params: {
          identifier: 'identifier',
          source: ['aka', 'souf'],
        },
        name: 'splitter/identifier/:identifier/source/:source',
      },
    ],
  },
];

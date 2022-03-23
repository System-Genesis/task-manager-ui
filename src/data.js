export const data = [
  {
    pageNum: 1,
    title: 'Get',
    btns: [
      {
        title: 'identifier & source from splitter',
        params: {
          identifier: 'identifier',
          source: ['aka', 'souf'],
        },
        name: 'splitter/identifier/:identifier/source/:source',
      },
      {
        title: 'Get by source',
        params: {
          source: ['aka', 'souf'],
        },
        name: 'splitter/source/:source',
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

//   const srvice = {

//     get:{
//       // {
//       //   name:'byIdentifier',
//       //   params: { identifiers:'46546'},
//       // }

//       byIdentifier:(p)=> ('blblb'+p.identifiers)
//     },
//     // {
//     //   name:'sourceAndIdentifier',
//     //   params: {source: 'aka', identifiers:'46546'},
//     // }

//     post:{
//       sourceAndIdentifier:(p)=> api.name(p)
//     },
//   }

// api
// name (o)=>('blblb'+p.source+'fdsfsd'+p.identifiers)

// // cont
//   service['post'][par.name](par.prams)

export const data = [
    {
      pageNum: 1,
      title: 'Get',
      btns: [
        {
          title: 'Get by Id & source',
          params: {
            identifiers: 'identifiers',
            source: ['aka', 'souf'],
          },
          name: 'sourceAndIdentifier'
        },
        {
          title: 'Get by  source',
          params: {
            source: ['aka', 'souf'],
          },
        },
      ],
    },
    {
      pageNum: 2,
      title: 'Post',
      btns: [
        {
          title: 'Post by Id & source',
          params: [{ identifiers: 'srting', source: ['aka', 'souf'] }],
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
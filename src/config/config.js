// /* eslint-disable import/no-anonymous-default-export */
// import './envFile';

// import * as env from 'env-var';
// console.log(process.env);
// export default {
//   port: env.get('PORT').required().asString(),
//   beckendURL: env.get('BECKEND').required().asString(),
// };

import * as dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.PORT;
export const beckend = process.env.BECKEND;

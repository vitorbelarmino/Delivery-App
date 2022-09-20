const dotenv = require('dotenv/config');
const  jwt = require( 'jsonwebtoken');


const  Jwt = {

   createToken : (user) => {
    const config = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const secret = process.env.SECRET || 'secret';
    const token = jwt.sign({ data: user }, secret, config);

    return token;
  },

   validateToken: (token) => {
    try {
      const { data } = jwt.verify(token, process.env.SECRET);
      return data;
    } catch (_err) {
      const e = new Error('Token must be a valid token');
      e.name = 'UnauthorizedError';
      throw e;
    }
  }



}

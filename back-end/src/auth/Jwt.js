const dotenv = require('dotenv/config');
const  jwt = require( 'jsonwebtoken');


export default class Jwt {

  static createToken(user) {
    const config = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const secret = process.env.SECRET || 'secret';
    const token = jwt.sign({ data: user }, secret, config);

    return token;
  }

  static validateToken(token) {
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

const sinon =  require('sinon');
const chai = require('chai');
// @ts-ignore
const chaiHttp = require('chai-http');

const  app = require('../../api/app');
const { returnLogin, userMock, loginBody, returnLoginMock, findOneLoginMock } = require('../mocks');
const { Users } = require('../../database/models')
const jwt = require('jsonwebtoken');


chai.use(chaiHttp);

const { expect } = chai;

describe('Service de login', () => {
  afterEach(() => {
    sinon.restore()
  })
    it('Testa login com sucesso', async() => {
      sinon.stub(Users, 'findOne').resolves(findOneLoginMock)
      sinon.stub(jwt, 'sign').returns(returnLoginMock.token)
      const response = await chai.request(app).post('/login').send({ email: returnLoginMock.email, password: '123456'})
      expect(response.body).to.be.deep.equal(returnLoginMock)
      expect(response.status).to.be.equal(200)
    })
});

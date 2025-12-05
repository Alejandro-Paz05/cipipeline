import * as chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

const expect = chai.expect;
chai.default.use(chaiHttp);

describe('API tests', () => {
  it('GET /health responde con status ok', (done) => {
    chai.default.request(app)
      .get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal('ok');
        done();
      });
  });
});

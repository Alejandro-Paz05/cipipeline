const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('API tests', () => {
  it('GET /health responde con status ok', (done) => {
    chai.request(app)
      .get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal('ok');
        done();
      });
  });
});

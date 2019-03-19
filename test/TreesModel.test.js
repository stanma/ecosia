// TreesModel.test.js
process.env.NODE_ENV = 'test';
const BlogPost = require('../api/models/TreesModel');
const server = require('../server');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const treesURL = '/trees';

describe('Favourite tree', () => {
  describe('/GET/ - gets result from server', () => {
    it('it should GET correct result from api', done => {
      chai.request(server)
          .get(treesURL)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.property('myFavouriteTree')
              .eql('oak');
            done();
          });
    });
  });
});
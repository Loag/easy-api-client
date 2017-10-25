const expect = require('chai').expect;
const assert = require('assert');
const Client = require('../Client');
require('es6-promise').polyfill();
require('isomorphic-fetch');

describe('tests', function () {
  let client = Client.Client();

  it('defaults set', function(done) {
    expect(client.mode).to.equal('cors');
    expect(client.headers).to.be.an.instanceof(Headers);
    expect(client.method).to.equal('GET');
    expect(client.cache).to.equal('default');
    done();
  });

  it('created one route', function(done) {
    client.add({name: 'demo', url: 'https://jsonplaceholder.typicode.com/posts/1'});
    expect(client.demo);
    done();
  });

  it('created array of routes', function(done) {
    client.add([{name: 'demo1', url: 'https://jsonplaceholder.typicode.com/posts/1'}, {name: 'demo2', url: 'https://jsonplaceholder.typicode.com/posts/1'} ]);
    expect(client.demo1);
    expect(client.demo2);
    done();
  });

  it('route returned json value', function(done) {
    client.demo().then(function(result) {
      expect(result.userId).to.equal(1);
      done();     
    });
  });

});
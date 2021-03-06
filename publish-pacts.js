var projectFolder = __dirname;
var pact = require('@pact-foundation/pact-node');
var project = require('./package.json');

var options = {
  pactFilesOrDirs: [projectFolder + '/pacts'],
  pactBroker: 'https://your.pact.broker.url',
  consumerVersion: project.version,
  tags: ['latest'],
  pactBrokerUsername: 'YOUR_PACT_BROKER_USER',
  pactBrokerPassword: 'YOUR_PACT_BROKER_PASS'
};

pact.publishPacts(options).then(function () {
  console.log('Pacts successfully published!');
});

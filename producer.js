// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client
const pubsub = new PubSub();

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const topicName = 'test';
const data = JSON.stringify({ foo: 'anish' });

// Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
const dataBuffer = Buffer.from(data);

pubsub
  .topic(topicName)
  .publisher()
  .publish(dataBuffer).then((messageId) => {
    console.log(`Message ${messageId} published.`);
  }).catch((err) => {
    console.log(err);
  });

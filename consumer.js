// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client
const pubsub = new PubSub();

/**
 * TODO(developer): Uncomment the following lines to run the sample.
 */
const subscriptionName = 'test-sub';
const timeout = 60;

// References an existing subscription
const subscription = pubsub.subscription(subscriptionName);

var gpio = require('rpi-gpio')
var gpiop = gpio.promise;

var gpio = require('rpi-gpio')
var gpiop = gpio.promise;
 
gpiop.setup(29, gpio.DIR_OUT)
// Create an event handler to handle messages
let messageCount = 0;
const messageHandler = message => {
  console.log(`Received message ${message.data.state}:`);
  console.log(`\tData: ${message.data}`);
  console.log(`\tAttributes: ${message.attributes}`);
  messageCount += 1;
	if(messageCount % 2 === 0)  {
		gpiop.write(29, true);	
	} else {
		gpiop.write(29, false);
	}
  // "Ack" (acknowledge receipt of) the message
  message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);

/*
setTimeout(() => {
  subscription.removeListener('message', messageHandler);
  console.log(`${messageCount} message(s) received.`);
}, timeout * 1000);
*/

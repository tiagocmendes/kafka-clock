const { Kafka } = require("kafkajs");

const clientId = "consumer";
const brokers = ["localhost:9092"];
const topic = "test1";

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({
    groupId: clientId,
    minBytes: 5,
    maxBytes: 1e6,
    // wait for at most 3 seconds before receiving new data
    maxWaitTimeInMs: 1000,
});

let messages = [];
const consume = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic });
    await consumer.run({
        eachMessage: ({ message }) => {
            console.log(`received message: ${message.value}`)
            messages.push(message);
        },
    });
};

const readConsumerMessages = async () => {
    const allMessages = messages;
    messages = [];
    return allMessages;
};

module.exports = { consume, readConsumerMessages };

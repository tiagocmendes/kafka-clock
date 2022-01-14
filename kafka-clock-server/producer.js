const { Kafka } = require("kafkajs");

const clientId = "producer";
const brokers = ["localhost:9092"];
const topic = "test1";

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async (message) => {
    await producer.connect();
    let i = 0;
    try {
        await producer.send({
            topic,
            acks: 1,
            messages: [message],
        });
    } catch (err) {
        console.log("could not write message " + err);
    }
};

module.exports = produce;

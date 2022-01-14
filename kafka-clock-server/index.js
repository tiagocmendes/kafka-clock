// more info at: https://www.sohamkamani.com/nodejs/working-with-kafka/

const express = require("express");
const produce = require("./producer");
const { consume, readConsumerMessages } = require("./consumer");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

consume().catch((err) => {
    console.error("Error in consumer: ", err);
});

app.post(
    "/kafka-clock",
    catchAsync(async (req, res) => {
        produce(req.body).catch((err) => {
            console.error("error in producer: ", err);
        });
        res.send(req.body);
    })
);

app.get(
    "/kafka-clock",
    catchAsync(async (req, res) => {
        readConsumerMessages().then((data) => {
            const messages = data.map((m) => ({
                key: m.key.toString(),
                value: m.value.toString(),
            }));
            res.send(messages);
        });
    })
);

app.listen(8080, () => console.log(`Server listening on port 3000`));

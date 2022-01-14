# kafka-clock

![](./banner.png)

Minimalist full-stack application, built with React and Node/Express.

The main goal of this app is to explore Kafka functionalities:

-   When starting the server, it creates a producer and a consumer for a specific topic.
-   Every second, an HTTP request is made to the API, and the current timestamp is sent to Kafka through the producer.
-   All the messages can be read from Kafka through the consumer.

**Note: Start zookeeper-server and kafka-server before starting the server.**


## Author

-   [tiagocmendes](https://github.com/tiagocmendes)

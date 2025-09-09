const ampq = require('amqplib');

class Producer {
    channel;

    async createChannel(){
        const connection = await ampq.connect(config.rabbitMQ.url);
        this.channel = await connection.createChannel();
        await this.channel.assertExchange(config.rabbitMQ.exchangeName, 'direct');
    }

    async publishMessage(routingKey, message){
        if(!this.channel){
            this.createChannel();
        }

    const exchangeName = config.rabbitMQ.exchangeName;
    await this.channel.assertExchange(exchangeName, 'direct');

    await this.channel.publish(exchangeName, routingKey, Buffer.from(
        JSON.stringify({
            logType: routingKey,
            message: message,
            timestamp: new Date().toISOString()
        })
    ));
    }
}
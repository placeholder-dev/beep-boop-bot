const { AkairoClient, CommandHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: ['627349500456861717', '606919408643866626', '276212973226295296'], 
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './commands/',
            prefix: '?' // or ['?', '!']
        });
        //Load the Commands
        this.commandHandler.loadAll();
    }
}

const client = new MyClient();
const env = process.env

client.login(env.TOKEN);
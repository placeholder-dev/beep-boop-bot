const { 
    AkairoClient, 
    CommandHandler, 
    InhibitorHandler, 
    ListenerHandler 
} = require('discord-akairo');

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

        this.inhibitorHandler = new InhibitorHandler(this, {
            directory: './inhibitors/'
        });
        this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
        this.inhibitorHandler.loadAll();    

        this.listenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}

const client = new MyClient();
const env = process.env

client.login(env.TOKEN);
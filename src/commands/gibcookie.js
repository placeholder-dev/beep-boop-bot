const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('gibcookie', {
           aliases: ['cookie', "gibcookie"] 
        });

    }

    exec(message) {
        return message.reply(':cookie:');
    }
}

module.exports = PingCommand;
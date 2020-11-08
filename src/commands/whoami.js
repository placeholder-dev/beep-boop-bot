const { Command } = require('discord-akairo');

const config = require('../config.json')

class PingCommand extends Command {
    constructor() {
        super('whoami', {
           aliases: ['whoami'] 
        });

    }

    exec(message) {
        if(config.settings.owners.includes(message.author.id)){
            message.reply("You are big daddy developer uwu~")
        }else{
            message.reply("You do not have any permission. Fuck you!s")
        }
    }
}

module.exports = PingCommand;
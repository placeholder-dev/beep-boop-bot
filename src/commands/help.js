const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', "h"] 
        });

    }

    exec(message) {
        return message.channel.send(`\`\`\`css
[gibcookie, cookie] Give a cookie <3        
\`\`\``);
    }
}

module.exports = PingCommand;
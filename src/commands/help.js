const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help', "h"] 
        });

    }

    exec(message) {
        return message.channel.send(`\`\`\`css
[cookie]  Give a cookie <3
[ping]    Send a ping back to see if the bot is alive
[help]    Show this Help Dialog
\`\`\``);
    }
}

module.exports = PingCommand;  
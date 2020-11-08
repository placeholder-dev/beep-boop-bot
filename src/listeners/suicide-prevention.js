const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('message', {
            emitter: 'client',
            event: 'message'
        });
    }

    exec(message) {
        var content = message.content.toLowerCase()
        try {
            if(/suicide|s.u.i.c.i.d.e| kill myselsf/.test(content)){
                message.delete()
                message.author.send(`Please dont commit Suicide! 
                If you are feeling like Self Harm is in any way a good idea then please contact the Suicide Prevention Hotline at (800-273-8255)`)
            }
    
            if(/(kill(er)?|murder(er)?)/.test(content)){
                message.delete()
                message.author.send("Please dont talk about Killing Anyone!")
            }
    
            // This was for Demonstration Purposes
            //
            //if(/banned-*/.test(message.content)){
            //    message.delete()
            //}
            
            // https:// or http://
            if(/(http|https):\/\/discord.gg|discord.com\/.*/.test(content)){
                message.delete()
                message.reply("Please dont send Invite Links!")
            }  
        } catch (error) {
            console.log(`An error Occoured: ${error}`)
        }
    }
}

module.exports = ReadyListener;
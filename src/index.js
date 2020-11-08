const Discord = require('discord.js')

const env = process.env
const bot = new Discord.Client()

const prefix = "!"

bot.on('message', (msg)=>{
    switch (msg.content) {
        case prefix+"gibcookie":
            msg.channel.send(":cookie:")
            break;
    
        default:
            break;
    }
    
    //!FIXME: This doesnt work
    var suicideMessage = new RegExp("(suicide|kills?|murders?)[^.]*(yourself|him|them|her|himself|herself|themselves|you)", "g");
    console.log(`${msg.content}:  ${suicideMessage.test(msg.content)}`)
})

bot.login(env.TOKEN, ()=>{
    console.log(`Logged in as ${bot.user.tag}`)
})
const Discord = require('discord.js');

const client = new Discord.Client();

client.on("ready", function () {
    //Ce que le bot va dire s'il est bien connecté
    console.log("I'm ready!!!");
})

const préfix = "!"

client.login(process.env.TOKEN);

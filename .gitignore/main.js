const Discord = require('discord.js');

const client = new Discord.Client();

client.on("ready", function () {
    //Ce que le bot va dire s'il est bien connecté
    console.log("I'm ready!!!");
})

const préfix = "!"

client.login('Nzg5NTQ1ODA5NTM1Njk2ODk2.X9zn1g.mmp__8aor_oISPAIUAG5G0O888U');

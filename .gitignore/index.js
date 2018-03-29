const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
  bot.user.setGame("Double Toz");
console.log("Zangdhar est connecté");
});

bot.login(process.env.TOKEN);
var prefix = (":::");


bot.on("guildMemberAdd", member => {
member.guild.channels.find("name", "general").send('Bienvenue ${member}')
})

bot.on("guildMemberRemove", member => {
member.guild.channels.find("name", "general").send('${member} viens de quitter')
})

bot.on('guildMemberAdd', member => {
var role = member.guild.roles.find('name', 'Membres');
member.addRole(role)
})

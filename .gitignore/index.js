const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
  bot.user.setGame("Respecte ma p*tain d'autorité !");
console.log("Zangdhar est connecté");
});

bot.login("NDI3ODA3Njk0ODAwMjg5Nzky.DZp6mQ.x86CGbvUPH0NCsOcy5AZmyHS_Ys");

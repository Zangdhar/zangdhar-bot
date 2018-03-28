const Discord = require("discord.js");

var bot = new Discord.Client();

var prefix = ("*")

bot.on("ready" , function() {
  bot.user.setGame("Respecte ma p*tain d'autorité !");
console.log("Zangdhar est connecté");
});

bot.login(process.env.TOKEN);


bot;on("message", message => {
  if (message.content === prefix + "help"){
    message.channel.sendMessage("Liste des commandes: /n -*help");
  }
  
  if (message.content === "salut"){
   message.reply("Bonjour ! ça va ?") 
  }
  
  if (message.content === "oui et toi ?"){
   message.reply("ça va nickel merci ^^") 
  }
  
  if (message.content === "pd"){
   message.reply("Sueveilles ton language ou je te Ban Def !") 
  };

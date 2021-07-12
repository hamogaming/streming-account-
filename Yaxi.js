
const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
Yaxi.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "DEVx7AMO", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
Yaxi.on("ready", () => {
    var join = Yaxi.channels.get("860270669374685258"); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
Yaxi.login("ODY0MDE0OTQ2ODEwMzMxMTM3.YOvSnw.SED7OUtpHC2g0tSf2wdJpGRCDI8");

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1200448965259300874')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=mBZdHuZCfic&list=RDmBZdHuZCfic&start_radio=1') //Must be a youtube video link 
    .setState('Valorant')
    .setName('ris')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.pinimg.com/564x/58/eb/0f/58eb0f94617bbae34dbb294f85e60451.jpg') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('𝒏𝒊𝒕𝒓𝒐, 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒂𝒏𝒅 𝒈𝒂𝒎𝒆 𝒄𝒓𝒆𝒅𝒔 𝒂𝒗𝒂𝒊𝒍') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1191505419764510801.gif?size=80&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('legit shop') //Text when you hover the Small image
    .addButton('Shop﹒‹𝟥', 'https://discord.gg/airiswin')
    .addButton('Vouches﹒‹𝟥', 'https://discord.gg/airiswin');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `𝒂𝒊𝒓𝒊𝒔`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

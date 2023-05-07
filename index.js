const { Client } = require('discord.js-selfbot-v13');
const config = require("./config.json");

const client = new Client({
  checkUpdate: false,
});

const channel = config.channel;
const token = config.token;

async function bump() {
  const channel = await client.channels.fetch(channel)
  try {
    await channel.sendSlash('302050872383242240', 'bump')
    console.count('Bumped!')
  } catch (error) {
    console.error(error)
  }
}


function loop() {
  var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
  setTimeout(function() {
    bump()
    loop()
  }, randomNum)
}

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`)

  bump()
  loop()
})

client.login(token)

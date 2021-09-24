module.exports = {
  showStats: true, // Booleen | true / false
	website: {
		protocol: 'https://', // https:// or http://
		domain: 'promusic.up.railway.app', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: 'tejas.ls.nub' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'PRO MUSIC', // Bot Name
    token: process.env.TOKENS, // Bot token if showing Stats
    logo: 'https://cdn.discordapp.com/avatars/812627276365561867/d944538f37315c0a57c7e32de6b8ae97.png', //Bot Logo used in embeds and favicon
    description: '', //description of your bot used in embed and website
    support: '', // support server url of your bot
    invite: '', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: 'DEDICATED CHANNEL SETUP', // Feature 1 Heading
      description: 'Use command p.setup and bot will create a channel just type song name in that channel and bot will play song no need of prefix or any command' // Feature 1 Description
    },
    feature2: {
      main: '14+ FILTERS ', // Feature 2 Heading
      description: 'BOT HAS 14+ FILTERS AND USE LAVALINK FOR MUSIC' // Feature 1 Description
    },
    feature3: {
      main: 'SMIPLIFIED HELP COMMAND', // Feature 3 Heading
      description: 'Very simple help command with reaction system' // Feature 1 Description
    }
  },
  img: {
    img1: '', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://media.discordapp.net/attachments/862516214160687124/890599192035217528/unknown.png' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};

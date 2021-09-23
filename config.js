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
    token: 'process.env.TOKENS', // Bot token if showing Stats
    logo: '', //Bot Logo used in embeds and favicon
    description: '', //description of your bot used in embed and website
    support: '', // support server url of your bot
    invite: '', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: '', // Feature 1 Heading
      description: '' // Feature 1 Description
    },
    feature2: {
      main: '', // Feature 2 Heading
      description: '' // Feature 1 Description
    },
    feature3: {
      main: '', // Feature 3 Heading
      description: '' // Feature 1 Description
    }
  },
  img: {
    img1: '', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: '' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};

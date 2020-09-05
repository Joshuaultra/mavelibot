const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

client.once('ready', () => {
    console.log('MAVELI BOT is online');
      client.user.setActivity('*help')

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'anugrahichalum'){
        message.channel.send('Noominte anugraham epolum koodeyundavum');
    } else if (command == 'website'){
        message.channel.send('https://maveli.herokuapp.com/');
    }else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCvY-ehTz17Wrav4Rr5wd24A');
    }else if (command == 'specs'){
        message.channel.send('i9 9900K,RTX 3070,32GB Ram');
    }else if (command == 'native place'){
        message.channel.send('Kerala');
    }else if (command == 'gf'){
        message.channel.send('Antreasa');
    }else if (command== 'help'){
        message.channel.send('Commands Are
                             *anugrahichalum
                             *website
                             *youtube
                             *specs
                             *gf');
    }
});

client.login('NzUwMjQ4NDkyODYwOTY0OTI0.X03xWw.163MoZ_qa7ksgqCaA_47VuahKhg');

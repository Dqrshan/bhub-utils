require('./lib/setup');
require('dotenv').config();
const { LogLevel, SapphireClient } = require('@sapphire/framework');
const { prefix } = require('./config.json');

const client = new SapphireClient({
	defaultPrefix: prefix,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS'
	],
	partials: ['CHANNEL'],
	loadMessageCommandListeners: true
});

const main = async () => {
	try {
		client.logger.info('Logging in..');
		await client.login(process.env.TOKEN);
		client.logger.info('Logged in!');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();

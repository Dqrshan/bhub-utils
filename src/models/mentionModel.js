const { DataTypes } = require('sequelize');

class Mentions {
	/**
	 *
	 * @param {import('@sapphire/framework').SapphireClient} client
	 */
	constructor(client) {
		this.client = client;
	}

	async init() {
		this.main = this.client.sql.define('mention_data', {
			user: {
				type: DataTypes.STRING,
				allowNull: false
			},
			guild: {
				type: DataTypes.STRING,
				allowNull: false
			},
			member: {
				type: DataTypes.STRING,
				allowNull: false
			},
			msg: {
				type: DataTypes.STRING,
				allowNull: false
			},
			timestamp: {
				type: DataTypes.INTEGER,
				allowNull: false
			}
		});

		await this.main.sync();
		this.client.logger.debug('Synced Mention Model');
	}
}

module.exports = { Mentions };

module.exports = {
	name: 'prune',
	description: 'Delete the last messages between 2 to 100',
	execute(message, args) {
		const amount = parseInt(args[0]);
		if (isNaN(amount)) {
			return message.reply("that doesn't seem to be a valid number.");
		} else if (amount < 2 || amount > 100) {
			return message.reply(`You need to input a number between 2 and 100`);
		}
		message.channel.bulkDelete(amount, true).catch((err) => {
			console.error(err);
			message.channel.send(
				'There was an error trying to prune messages in this channel'
			);
		});
		message.channel.send(`Deleted the last ${amount} messages`);
	},
};

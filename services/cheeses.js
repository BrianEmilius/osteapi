const connection = require('../config/sql').connect();
connection.connect((err) => {
	if (err) {
		console.log(err.stack);
		return;
	}
	console.log(`connected as id ${connection.threadId}`);
});

/**
 * @module Cheeses
 */
module.exports = {
	/**
	 * getAll
	 * Returnerer et JSON array med alle oste
	 * @returns {Object}
	 */
	'getAll': (next) => {
		const query = `SELECT cheeses.*, type.navn, producent.navn
		FROM cheeses
		INNER JOIN type ON fk_type = type.id
		INNER JOIN producent ON fk_producent = producent.id`;

		connection.query(query, (err, results) => {
			if (err) {
				next(err);
			} else {
				next(null, results);
			}
		});
	},

	/**
	 * getOne
	 * Returnerer et JSON objekt med en enkelt ost
	 * @param {string} varenr - varenummeret på en ost
	 * @returns {Object}
	 */
	'getOne': (varenr, next) => {
		const query = `SELECT cheeses.*, type.navn, producent.navn
		FROM cheeses
		INNER JOIN type ON fk_type = type.id
		INNER JOIN producent ON fk_producent = producent.id
		WHERE cheeses.varenr = ?`;

		connection.query(query, [varenr], (err, result) => {
			if (err) {
				next(err);
			} else {
				next(null, result[0]);
			}
		});
	}
};
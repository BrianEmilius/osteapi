const mysql = require('mysql2');
const db = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password': '',
	'database': 'osteapi'
});

module.exports = (server) => {
	server.get('/cheeses', (req, res) => {
		const query = `SELECT cheeses.*, typer.navn AS typeNavn
		FROM cheeses
		INNER JOIN typer
		ON cheeses.fk_type = typer.id`;

		db.query(query, (err, rows) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(rows);
			}
		});
	});

	server.get('/cheeses/:varenr', (req, res) => {
		const query = `SELECT cheeses.*, typer.navn AS typeNavn
		FROM cheeses
		INNER JOIN typer
		ON cheeses.fk_type = typer.id
		WHERE cheeses.varenr = ?`;

		db.execute(query, [req.params.varenr], (err, row) => {
			if (err) {
				res.status(500);
				res.end();
			} else {
				res.send(row[0]);
			}
		});
	});
};
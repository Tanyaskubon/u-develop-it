const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// conect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MYSQL username,
        user: 'root',
        // Your MYSQL PASSWOORD
        password: '1$Ilikeithot',
        database: 'election'
    },
    console.log (' Connected to the election databade.')
);




db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})




// Default response for any other request (Not Found)
app.get((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

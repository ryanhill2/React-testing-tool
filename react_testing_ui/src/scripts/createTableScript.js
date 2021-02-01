function callMe() {
    const {Client} = require("pg");

    const client = new Client({
        user: "user",
        host: "localhost",
        database: "postgres",
        password: "password123",
        port: "5432"
    });
client.connect()
// pool.query(
//     "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))",
//     (err, res) => {
//         console.log(err, res);
//         pool.end();
//     }
// );

    client.query(
        "INSERT INTO customers (name, address) VALUES ('Hannah', 'Leitrim')",
        (err, res) => {
            console.log(err, res);
            client.end();
        }
    );
}

callMe()
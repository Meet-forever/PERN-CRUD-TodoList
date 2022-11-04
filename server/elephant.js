const pg = require('pg');
const client = new pg.Client(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${DB_USERNAME}`);

client.connect((err)=>{
    if(err) return console.error(`Cannot connect to PostGress`,err);
    client.query('SELECT NOW() AS "the TIME"', (err, res)=>{
            if(err) return console.error('error running query', err);
            console.log(`DB started ${res.rows[0]["the TIME"]}`);
    })
})

module.exports = client; 








// var pg = require('pg');
// var client = new pg.Client("postgres:/.elephantsql.com:The Actual url");

// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//   });

// });

// module.exports = client
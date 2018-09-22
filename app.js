/**
 * server side rendering
 */
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const os = require('os');
const {Pool} = require('pg');
//setting port
const __port = 3000; 
const app = express();




/**
 * connection with database
 */

configFiles = require('./server/config');

const pool = new Pool({
    'host': configFiles.db_connection[0].host,
    'user': configFiles.db_connection[0].Username,
    'password': configFiles.db_connection[0].Password,
    'database': configFiles.db_connection[0].database,
});


app.disable('etag');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'dist/rankFiledShibu')));
app.set('trust proxy', false);

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'dist/rankFiledShibu/index.html'));
});
app.get('/api', (req, res) => res.send('api works!'));
app.get('/api/states', (req, res) => {


    pool.connect((err, client, done) => {
        if(err) {
            console.log(err);
        }
        else{
            
            const query__ = 'SELECT * FROM filings.sp_next_filing_state()';
            client.query(query__, (err, data) => {
                if(err){console.log(err);}
                res.send(data);
                done();
            });
        }
        
    });
});
if(module === require.main) {
    const server = app.listen(__port, () => {
        const port = server.address().port;
        console.log('app running on ', port); 
    });
}

module.exports = app;
// /**
//  * The Server Can be configured and created here...
//  *
//  * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
//  */

// /*
// -- This is the product data, you can view it in the file itself for more details
// {
//     "_id": "019",
//     "isActive": "false",
//     "price": "23.00",
//     "picture": "/img/products/N16501_430.png",
//     "name": "Damage Reverse Thickening Conditioner",
//     "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
//     "tags": [
//         "ojon",
//         "conditioner"
//     ]
// }
// */
// const data      = require('./data');
// const http      = require('http');
// const hostname  = 'localhost';
// const port      = 3035;

// /**
//  * Start the Node Server Here...
//  *
//  * The http.createServer() method creates a new server that listens at the specified port.
//  * The requestListener function (function (req, res)) is executed each time the server gets a request.
//  * The Request object 'req' represents the request to the server.
//  * The ServerResponse object 'res' represents the writable stream back to the client.
//  */
// http.createServer(function (req, res) {
//     // .. Here you can create your data response in a JSON format


//     res.write("Response goes in here..."); // Write out the default response
//     res.end(); //end the response
// }).listen( port );


// console.log(`[Server running on ${hostname}:${port}]`);

const express = require('express')
const path = require('path')
const jsonfile = require('jsonfile')
const bodyParser = require('body-parser');
const app = express();
const port = 3035;
const file = path.join(__dirname, 'data.json');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/api/v1/search', function (req, res) {
  console.log(req.query.name);
    jsonfile.readFile(file)
        .then(obj => {
            obj = obj.data;
            let response = [];
            Object.keys(obj).filter(key => {
                if (obj[key].name.toLowerCase().includes(req.query.name)) {
                    response.push(obj[key]);
                }
            });
            res.status(200).send({
                success: 'true',
                message: 'data retrieved successfully',
                data: response
            })
        })
        .catch(error => console.error(error))

})

// App Configuration

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
// App Configuration => END

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

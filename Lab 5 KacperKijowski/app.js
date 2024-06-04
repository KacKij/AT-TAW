const express = require('express');
const config = require(`./config`);
const service = require('./ConvertDataService');
const ConvertDataService = require('./ConvertDataService');



const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


let chart1 = {"type":"line","data":{"labels":["January","February","March","April","May","June"],"datasets":[{"label":"My First dataset","backgroundColor":"rgb(255, 99, 132)","borderColor":"rgb(255, 99, 132)","data":[0,10,5,2,20,30,45]}]},"options":{}};


const temp = `Czas,Temperatura
2023-11-09 10:00:00,10
2023-11-09 11:00:00,13
2023-11-09 12:00:00,16
2023-11-09 13:00:00,18
2023-11-09 14:00:00,19
2023-11-09 15:00:00,19
2023-11-09 16:00:00,17`;

const dataChart2 = ConvertDataService.convertData(temp);

const chart2 = JSON.stringify(dataChart2);

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 500 },
    { name: 'Tablet', price: 300 }
];


app.get('/', (req, res) => {
    res.render(__dirname + '/index.html',
    {subject: 'Technologie aplikacji webowych', 
    chart1:JSON.stringify(chart1), 
    chart2:chart2,
    products:products,
    });
});

app.get('/template/:variant/:a/:b', (req, res) => {
    let result;
    switch(req.params.variant) {
        case 'sum': result = parseFloat(req.params.a) + parseFloat(req.params.b); break;
        case 'sub': result = req.params.a - req.params.b; break;
        case 'multiply': result = req.params.a * req.params.b; break;
        case 'divide': result = req.params.a / req.params.b; break;
    }
    res.render(__dirname + '/variants.html', {
        subject: 'Technologie aplikacji webowych',
        variant: req.params.variant,
        a: req.params.a, 
        b: req.params.b,
        result: result,
    })
});

app.listen(config.serverPort, function () {
    console.info('Server listening on port ' + config.serverPort)
});
const express = require('express');
const { serverPort } = require('./config');

const app = express();
const Questions = require('./questions').Questions;
const port = require(`./config`).serverPort;

app.get('/api/questions', (request, response) => {
   response.send(Questions);
});


app.get('/api/questions/:id', (req, res) => {
    res.send(
        req.params.id < 0 || req.params.id >= Questions.length ?
        {
            "code": 404,
            "message": "No question with this id."
        } :
        Questions[req.params.id]
    );
});

app.post('/api/questions/:id', (request, response) => {
    Questions.push({
        answer: [],
        category: "TEST",
        correct_answer: "",
        difficulty: "",
        question: "",
        type: "",
    });
    response.send({
        query: "OK",
    }
    )
});

app.listen(serverPort, () => {
    console.info(`Server is running on port ${serverPort}`);
})
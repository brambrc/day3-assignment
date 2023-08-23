const express = require('express');

const app = express();
const port = 3000;

app.get('/search-flight/:from-:to', (req, res) => {
    const from = req.params.from;
    const to = req.params.to;
    res.json({
        from: from,
        to: to
    });
})

app.get('/search-city/:province.:city', (req, res) => {
    const province = req.params.province;
    const city = req.params.city;
    res.send(`Searching city ${city} in ${province}`);
})

app.get('/search-film/', (req, res) => {
    const title = req.query.title;
    const year = req.query.year;
    // filter film by param
    res.send(`Searching film ${title} in ${year}`);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })
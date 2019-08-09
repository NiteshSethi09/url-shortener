const express = require('express');
const app = express();
const shortid = require('shortid');
const schema = require('../model/schema');

app.post('/', async (req, res) => {
    // await res.render('index')
    const { longUrl } = req.body;
    console.log(longUrl);

    // generating shortid
    const shortCode = shortid.generate();
    const shortUrl = `http://localhost:5000/` + shortCode;
    console.log(shortUrl, shortCode);


    let myData = new schema({
        longUrl,
        shortCode,
        shortUrl
    });

    myData.save(function (err) {
        if (err) console.log(`err: ${err.message}`);
    })
    res.redirect('/');
})

app.get('/:id', async (req, res) => {
    try {
        const urlCode = req.params.id;
        const item = await schema.findOne({ shortCode: urlCode });
        if (item) {
            return res.redirect(item.longUrl);
        } else {
            return res.send(`Error occured.`);
        }
    } catch (err) {
        return res.status(500).json(`Server technical error: ${err.message}`);
    }
})

module.exports = app;
const express = require('express');
const sha1 = require('sha1');
const fetch = require('node-fetch');
var router = express.Router();

router.get('/', async (req, res) => {
    const isos = ['es', 'fr', 'it'];
    var statEs, statFr, statIt, statsAll = "";

    await isos.forEach(async (iso) => {
        const apiUrl = `https://developers.sembo.com/sembo/hotels-test/countries/${iso}/hotels`;
        const headers = {
            'X-API-Key': sha1('david.roch.2001@gmail.com'),
            'Host': 'developers.sembo.com'
        };

        var correctlyFetched = false;
        var dataApi = null;

        while(!correctlyFetched) {
            dataApi = await fetch(apiUrl, {
                method: 'GET',
                headers: headers
            })
            .then(response => {
                if (response.ok) {
                    correctlyFetched = true;
                    return response.json();
                }     
            });
        }

        var score, first, second, third = 0;
        var hotel1, hotel2, hotel3 = "";
        dataApi.map((hotel) => {
            if (hotel.score > first) {
                third = second;
                second = first;
                first = hotel.score;
                hotel1 = hotel.name;
            } else if (hotel.score > second) {
                third = second;
                second = hotel.score;
                hotel2 = hotel.name;
            } else if (hotel.score > third) {
                third = hotel.score;
                hotel3 = hotel.name;
            }
            score += hotel.score;
        })
        var meanScore = score/dataApi.length;
        var statsIso = `${iso}: ${meanScore} average, Top 3: ${hotel1}, ${hotel2}, ${hotel3}\n`;
    });

    console.log(statsIso);
});

module.exports = router;
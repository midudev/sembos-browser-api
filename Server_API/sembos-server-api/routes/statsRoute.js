const express = require('express');
const sha1 = require('sha1');
const fetch = require('node-fetch');
var router = express.Router();

const isos = ['es', 'fr', 'it'];

class Stat {
    constructor(country, average, hotel1, hotel2, hotel3) {
        this.country = country;
        this.average = average;
        this.hotel1 = hotel1;
        this.hotel2 = hotel2;
        this.hotel3 = hotel3;
    }
}
var statsReport = [Stat, Stat, Stat];

async function fetchIndividualData(iso) {
    const headers = {
        'X-API-Key': sha1('david.roch.2001@gmail.com'),
        'Host': 'developers.sembo.com'
    };
    const apiUrl = `https://developers.sembo.com/sembo/hotels-test/countries/${iso}/hotels`;
    var dataApi = null;

    var correctlyFetched = false;
    while (!correctlyFetched) {
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

    return dataApi;
}

async function fetchAllData(isos) {
    await Promise.all(isos.map(async (iso, index) => {
        const dataApi = await fetchIndividualData(iso);
        var score = 0, first = 0, second = 0, third = 0;
        var hotel1 = "", hotel2 = "", hotel3 = "";
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
        });

        statsReport[index] = new Stat(iso, score / dataApi.length, hotel1, hotel2, hotel3);
    }));

    return statsReport;
}

router.get('/', async (req, res) => {
    const data = await fetchAllData(isos);

    return res.send(data);
});

module.exports = router;
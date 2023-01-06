// Constants

const express = require('express')
const router = express.Router()

// Main Route

router.get('/', (req, res) => {
    res.send("EvolvingAPI Version 1 - Current API Version | See https://docs.api.evolvingdevs.uk/api/v1 for api endpoints.")
})

// YouTube API Route

const scrapeYt = require("scrape-yt");

router.get('/yt/searchVideo', async (req, res) => {
    let videos = await scrapeYt.search(req.query.q);
    res.json(videos)
})

// Export Router

module.exports = router
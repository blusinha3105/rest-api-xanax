const axios = require('axios')
const cheerio = require('cheerio')

const kwai = async (url) => {
const response = await axios.get(url)
const $ = cheerio.load(response.data)
const hasil = []
var scrapperCreator = `@YoshiMeuAmor`
const author = $('.name').text().replace('\n            ','').replace('\n        ','')
const legenda = $('p').text().replace('\n        ','').replace('\n    ','')
const video = $('#video-ele').attr('src')
hasil.push({ scrapperCreator, author, legenda, video })
return hasil
}

module.exports = { kwai }
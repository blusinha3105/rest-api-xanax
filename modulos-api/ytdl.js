const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const FormData = require('form-data')
const axios = require("axios")
const cheerio = require("cheerio")
const qs = require('qs')
const { fromBuffer } = require('file-type')

//Variável
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

//Função
function post(url, formdata) {
//console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
return fetch(url, {
method: 'POST',
headers: {
accept: "*/*",
"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
'accept-language': "en-US,en;q=0.9",
'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
},
body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')})
}

function yta(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
try {
let document = (new JSDOM(res.result)).window.document
let type = document.querySelectorAll('td')
let filesize = type[type.length - 10].innerHTML
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
let thumb = document.querySelector('img').src
let title = document.querySelector('b').innerHTML
post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp3',
fquality: 320
})
.then(res => res.json())
.then(res => {
try {
let url = /<a.+?href="(.+?)"/.exec(res.result)[1]
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
url,
thumb,
title,
})
} catch (e) {
reject('Erro ao extrair os detalhes do download.')}
})
.catch(e => {
reject('Erro ao fazer a solicitação de conversão.')
})
} catch (e) {
reject('Erro ao analisar a página do YouTube.')}
})
.catch(e => {
reject('Erro ao fazer a solicitação de análise.')
})
} else {
reject('URL INVÁLIDA')}
})
}

function ytv(url) {
return new Promise((resolve, reject) => {
if (ytIdRegex.test(url)) {
let ytId = ytIdRegex.exec(url)
url = 'https://youtu.be/' + ytId[1]
post('https://www.y2mate.com/mates/en60/analyze/ajax', {
url,
q_auto: 0,
ajax: 1
})
.then(res => res.json())
.then(res => {
try {
let document = (new JSDOM(res.result)).window.document
let yaha = document.querySelectorAll('td')
let filesize = yaha[yaha.length - 23].innerHTML
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
let thumb = document.querySelector('img').src
let title = document.querySelector('b').innerHTML
post('https://www.y2mate.com/mates/en60/convert', {
type: 'youtube',
_id: id[1],
v_id: ytId[1],
ajax: '1',
token: '',
ftype: 'mp4',
fquality: 1080
})
.then(res => res.json())
.then(res => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
resolve({
url: /<a.+?href="(.+?)"/.exec(res.result)[1],
thumb,
title,
})
})
.catch(e => {
reject('Erro ao fazer a solicitação de conversão.')
})
} catch (e) {
reject('Erro ao analisar a página do YouTube.')}
})
.catch(e => {
reject('Erro ao fazer a solicitação de análise.')
})
} else {
reject('URL INVÁLIDA')}
})
}

module.exports.yta = yta
module.exports.ytv = ytv
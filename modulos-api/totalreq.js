const fs = require('fs')

const ceemde = JSON.parse(fs.readFileSync('./lib/secret/requests.json'))

const RequestsAdd = () => {
	ceemde[0].totalreq += 1
	fs.writeFileSync('./lib/secret/requests.json', JSON.stringify(ceemde))
}

module.exports = { RequestsAdd }
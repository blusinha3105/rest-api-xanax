bla = process.cwd() // NÃ£o mecha aqui..

const PORT = process.env.PORT || 4141

var fs = require('fs')
var axios = require('axios')
var mumaker = require('mumaker')
var jpeg = require('jpeg-js')
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
const { search } = require('yt-search');
var multer = require('multer')
var Ddos = require('ddos')
var TinyUrl = require('tinyurl');
var BitlyClient = require('bitly').BitlyClient
var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var { igstory} = require('./lib/scrape.js');
var { fromBuffer } = require('file-type')
var gerarnick = require('./lib/gerarnick.js')
var { mediafireDl } = require('./lib/mediafire.js');
var buffer = require('./lib/upload.js')
var exec = require('child_process');
var { Maker } = require('imagemaker.js')
var { pinterestVideoV2 } = require('./modulos-api/pinterest.js') 
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./lib/funcoes.js')
var trans = require('@vitalets/google-translate-api')
const {savefrom} = require('./lib/savefrom.js')
var xfar = require('xfarr-api')
const cors = require('cors')
const { wikimedia } = require("./modulos-api/ScrapersNS/wikimedia.js")
const { wall } = require("./modulos-api/ScrapersNS/scraper.js")
var { color } = require('./lib/color.js')
const { fbdown } = require("./lib/facebook.js")
const {  facebook } = require('./lib/downloader')
const { gis } = require('./lib/gimage')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('./modulos-api/youtubev2.js')
var { nerding, gpwhatsapp, apkmody, pornhubsrc, uptodown, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('./modulos-api/scraper.js')
var { igstalk } = require('./modulos-api/scrape.js')
var { pensadorSearch, wallpaper2 } = require('./modulos-api/scrapperlinda.js')
var { tiktok2, FacebookMp4 } = require('./modulos-api/teste.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo } = require('./lib/scraper/pesquisas.js')
var { kwai } = require('./modulos-api/kwai.js')
var { InArtificial, CorretorOpenAi } = require('./modulos-api/scrapper-vip.js')
var { getVideosPlaylist } = require('./modulos-api/playlist.js')
var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('./lib/scraper/noticias.js')
var { memesDroid } = require('./lib/scraper/aleacrapper.js')
var { ringtone } = require('./lib/scraper/ringtone.js')
var { LetradaMusica } = require('./modulos-api/letraMusic.js')
const { aiovideodl, umma, ytPlay_3} = require('./modulos-api/scraper-2.js');
const { randomGrupos } = require('./modulos-api/groups-random.js');
const { EncoderApi } = require('./modulos-api/functions.js');
var { mercadoLivreSearch2 } = require('./modulos-api/scrapperlinda.js')
const { ytPlayMp3 } = require('./modulos-api/ytmp3.js');
const { igdl } = require('./modulos-api/igdl.js') 
const cfonts = require("cfonts")
const moment = require("moment-timezone");
const { performance } = require('perf_hooks');
const os = require('os')
const { RequestsAdd } = require(bla + '/modulos-api/totalreq.js');
const { pornhub } = require('./modulos-api/pornhub.js');
const { xvideos } = require('./modulos-api/xvideos.js');
const { xnxxsearch } = require('./modulos-api/xnxx.js');
const yts = require('yt-search');
var { ytSearch } = require('./lib/yt.js')
const { youtubedl } = require('./node_modules/@bochilteam/scraper-sosmed/lib/cjs/src/youtube.js');


var criador = "@TIOMODZ"
var apicuttly = ['2038c1a7754b408aa8f9055282638c00e668e','4786cc6a0f19de9c67ea6a4282c494323c932','89d73b3a07209177d0251e30d49d66bd669ac','e841147455d0fdfbf50f74aefe63b6728adc0','27f3aa3f45cb4460bcbac69b782ca470a4570','31a8df09d5a9d8d009790df0b5642e3d76919','09b4e764ff07b10eac1682e71aaf95a78f358','75fe576ce040b619176af22f5a718b2f574f5','e24ee36f9c1519c0a779667a5182a31fb7ccf','903869065d29e23455ddca922071f4bbeb133']
var apibitly = ['2243940c230ad0d748059aee58ddf126b65fd8e7','6cfc18e9bfa554714fadc10a1f6aff7555642348','c71b6658a1d271ddaf2a5077de3dcb9d67f68025','cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43','7915c671fbd90eca96310e5c9442d761225a1080','e5dee46eb2d69fc9f4b0057266226a52a3555356','f09ab8db9cf778b37a1cf8bc406eee5063816dec','964080579f959c0cc3226b4b2053cd6520bb60ad','a4f429289bf8bf6291be4b1661df57dde5066525','3d48e2601f25800f375ba388c30266aad54544ae','4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa','d375cf1fafb3dc17e711870524ef4589995c4f69','43f58e789d57247b2cf285d7d24ab755ba383a28','971f6c6c2efe6cb5d278b4164acef11c5f21b637','ae128b3094c96bf5fd1a349e7ac03113e21d82c9','e65f2948f584ffd4c568bf248705eee2714abdd2','08425cf957368db9136484145aa6771e1171e232','dc4bec42a64749b0f23f1a8f525a69184227e301','0f9eb729a7a08ff5e73fe1860c6dc587cc523035','037c5017712c8f5f154ebbe6f91db1f82793c375']
var translate = (text, lang) => { return new Promise(async (resolve, reject) => { trans(text, { conn: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) });}
var ddos = new Ddos({burst:4, limit:30, testmode:true, whitelist:['187.21.11.237']});

function ping() {
  const speed = require('performance-now');
  const timestampm = speed();
  const latency = speed() - timestampm;
  const ms = latency.toFixed(4);
    return ms
}

const banner = cfonts.render(("NICOLE REST APIS"), {
font: "block",
align: "center",
gradient: ["magenta","red"]
})

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}

async function Request(url) {
he = await fetch(url).then(c => c.json())
 return he
}

async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}

const router = express.Router();
const uuid = require('uuid').v4;
const path = require("path");
const { dirname } = require('path');
var __dirname = dirname(__filename);

var key = JSON.parse(fs.readFileSync("./lib/secret/keys.json"));
const users = JSON.parse(fs.readFileSync("./lib/secret/usuarios.json"));

async function listkeys(apikey, req) {
var i4 = key.map(i => i?.apikey)?.indexOf(apikey)
if(i4 >= 0) {
key[i4].request -= 2;
fs.writeFileSync("./lib/secret/keys.json", JSON.stringify(key, null, 2));

var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = users.map(i => i.key).indexOf(apikey);
if(i3 < 0 && !users.map(i => i.IP).includes(IP?.split(":")[3])){
users.push({key: apikey, IP: [IP?.split(":")[3]]})
fs.writeFileSync("./lib/secret/usuarios.json", JSON.stringify(users, null, 2));
} else if(i3 >= 0 && !users[i3]?.IP.includes(IP?.split(":")[3])) {
users[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("./lib/secret/usuarios.json", JSON.stringify(users, null, 2));
}}} 

var upload = multer()
var app = express()
 
app.get('/security',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "captch.html"))}); 
app.get('/newdash',(req, res) => {
res.sendFile(path.join(__dirname, "./public/views", "dash.html"))});  
app.get('/planos',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "planos.html"))}); 
app.get('/dash',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "docs.html"))});
app.get('/',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "index.html"))}); 
app.get('/panel',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "admin.html"))}); 
 
app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

var blacklist = require('express-blacklist');
app.use(blacklist.blockRequests('./modulos-api/blacklist.txt'));

////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
router.use(ddos.express);
app.get("/", (req,res,next) => {
res.end("Boop");
})
app.use(router);
 
app.get('/api/keyerrada',(req, res) => {
apikey = req.query.apikey;
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
if(ITC < 0) {
return res.json({key:' ❌ Sua apikey é invalida!! ❌'})
} else {return res.json({key:`Sua ApiKey está 100% ✅ - Requests Restantes: ${key[ITC]?.request}`})}})

app.get('/api/status/key',(req, res) => {
apikey = req.query.apikey;
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
if(ITC < 0) {
return res.json({key:' ❌ Sua apikey é invalida!! ❌'})
} else {return res.json({key:`${key[ITC]?.request}`})}})

app.get('/api/add-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({resultado: "Faltando o and"})
var [apikey, senha, rq] = a.split("&")
var senhaofc = "gley"
if(senha != senhaofc) return res.json({resultado: "Senha invalida.."})
if(!apikey) return res.json({resultado: "Kd a key.."})
if(key.map(i => i.apikey).includes(apikey)) {
return res.json({resultado: "Essa key já está inclusa dentro do sistema.."})
} else {
key.push({apikey: apikey, request: rq})
fs.writeFileSync("./lib/secret/keys.json", JSON.stringify(key))
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
return res.json({resultado: `🔑 Chave ApiKey: ${apikey} Foi Adicionada ao Sistema com Exito!\n🚀 Numero de Requisições Disponiveis: ${key[ITC]?.request}`})
}
})

app.get('/api/del-key',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({msg: "Faltando o and"})
var [apikey, senha] = a.split("&")
var senhaofc = "TioModz"
if(senha != senhaofc) return res.json({msg: "Senha invalida.."})
if(!apikey) return res.json({msg: "Kd a key.."})
if(!key.map(i => i.apikey).includes(apikey)) {
return res.json({msg: "Essa key não está inclusa.."})
} else {
var i2 = key.map(i => i.apikey).indexOf(apikey)
key.splice(i2, 1)
fs.writeFileSync("./lib/secret/keys.json", JSON.stringify(key))
return res.json({msg: `apikey ${apikey} deletada com sucesso..`})
}
})

app.get('/welcome', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2023")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync('welkom.png', base64, 'base64')
res.sendFile(bla+'./modulos-api/welkom.png')
})


app.get('/loli', (req, res) => {
(async() => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/shota', (req, res) => {
(async() => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/random/metadinha', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
         json = JSON.parse(fs.readFileSync(bla +'/lib/metadinha.json').toString())
         random = json[Math.floor(Math.random() * json.length)]
         res.json(random) 
})
 
app.get('/+18/loli', (req, res) => {
(async() => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/api/facebook', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
 if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
fbdown(url).then(data => {
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ - 73 999197974`,
resultado: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})



router.all('/api/instamp4', async (req, res) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Coloque o parâmetro: url'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
try {
instavideo = await igdl(url)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: instavideo.resultado[0].link_dl,
})
} catch (err) {
console.log(err)
};
}) 

router.all('/api/info_celular', async (req, res) => {
celular = req.query.celular
if(!celular)return res.json({status:false, motivo:'Coloque o parâmetro: celular'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
auu = await Request(`http://br3.bronxyshost.com:3039/api-bronxys/info_celular?celular=${celular}&apikey=daniel_dzn`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
nomeCelular: `${auu.celular}`,
informações: `${auu.infoc}`,
resumoExtra: `${auu.resumo}`
}
})
})

router.all('/api/horoscopo/v2', async (req, res) => {
signo = req.query.signo
if(!signo)return res.json({status:false, motivo:'Coloque o parâmetro: signo'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
auu = await Request(`http://br3.bronxyshost.com:3039/api-bronxys/horoscopo?signo=${signo}&apikey=daniel_dzn`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
imagem: `${auu.img}`,
título: `${auu.title}`,
inform: `${auu.body}`
}
})
})

app.get('/api/happymod', async(req, res, next) => {
q = req.query.q
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/happymod?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/search/pensador', async(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false, 
msg:'Cadê o parâmetro: QUERY'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
pensadorSearch(query)
.then(dados => {
res.json({
status:true,
criador:'@TIOMODZ',
resultado: dados
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/search/wallpaper', async(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
msg:'Cadê o parâmetro: QUERY'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
wallpaper2(query)
.then(result => {
res.json({
status:true,
criador:'@TIOMODZ',
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/search/edit-tiktok', async(req,res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if(!q)return res.json({status:false,msg:'Cadê o parâmetro: q'})
var getTikTokLink = require('./modulos-api/searchEdit.js')
var url = await getTikTokLink(q)
tiktok2(url).then(result => {
res.json({
status:true,
criador:'@TIOMODZ',
resultado: result
})
}).catch(e => {
res.json({erro: `${e}`})
})
})

app.get('/download/tiktok', async(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cadê o parâmetro: URL'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
tiktok2(url).then(result => {
res.json({
status:true,
criador:'@TIOMODZ',
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/download/facebook', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
 if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
FacebookMp4(url).then(resultado => {
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/filme', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
filme(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
code_by: `@Gabriel`,
pesquisa: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/pornogratis', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
 pornogratis(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/nerding', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
 nerding(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/playstore', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
nome = req.query.nome
 if (!nome) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: nome"})
PlayStoreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/mercadolivre', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
nome = req.query.nome
 if (!nome) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: nome"})
mercadoLivreSearch2(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/amazon', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
nome = req.query.nome
 if (!nome) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: nome"})
AmazonSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/pinterest_mp4', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
pinterestVideoV2(url).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/americanas', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
nome = req.query.nome
 if (!nome) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: nome"})
AmericanasSearch(nome).then(dados => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/yt-playlist', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
 if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
getVideosPlaylist(url).then(resJson => {
res.json({
pesquisa: resJson
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/submarino', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
nome = req.query.nome
 if (!nome) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: nome"})
SubmarinoSearch(nome).then(dados => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/horoscopo', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
signo = req.query.signo
if (!signo) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: signo"})
Horoscopo(signo).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/randomgp', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
categoria = req.query.categoria
 if (!categoria) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: categoria"})
randomGrupos(categoria).then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/download/kwai', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
kwai(url).then(hasil => {
res.json({
status: 200,
criador: `@TIOMODZ`,
resultado: hasil
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/outros/openai', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
pergunta = req.query.pergunta
 if (!pergunta) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: pergunta"})
InArtificial(pergunta).then(hasil => {
res.json({
status: 200,
criador: `@TIOMODZ`,
resultado: hasil
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/outros/openai/corretor', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
texto = req.query.texto
 if (!texto) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: texto"})
CorretorOpenAi(texto).then(hasil => {
res.json({
status: 200,
criador: `@TIOMODZ`,
resultado: hasil
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/memes', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
memesDroid().then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/ringtone', async(req, res, next) => {
query = req.query.query
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  if (!query) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: query"})
ringtone(query).then(hasil => {
res.json({
status: 200,
criador: `@TIOMODZ`,
resultado: hasil
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/globo', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
G1().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/jovempan', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
JovemPan().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/poder360', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
Poder360().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/uol', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
Uol().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/estadao', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
Estadao().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/cnnbrasil', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
CNNBrasil().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/gpwhatsapp', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q;
  if(!q)return res.json({status:false,msg:'Cadê o parâmetro q?'})
 gpwhatsapp(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/apkmody', async(req, res, next) => {
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  if(key.includes(apikey)){
    fetch(encodeURI(`https://yub1lok-api.onrender.com/api/pesquisa/apkmody?apikey=BielzinGay&nome=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/freefire', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayu.p7api.xyz/api/pesquisa/ff?nome=${q}&apikey=saladakk`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/rexdl', async(req, res, next) => {
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/rexdl?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/moddroid', async(req, res, next) => {
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/moddroid?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/sfile', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/sfile?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})


router.all('/api/musicas/itunes', async (req, res) => {
musica = req.query.musica
if(!musica)return res.json({
status:false,
motivo:'Coloque o parâmetro: musica'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
auu = await Request(`https://api.popcat.xyz/itunes?q=${musica}`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
linkAcesso: `${auu.url}`,
nomeMusic: `${auu.name}`,
nomeArtista: `${auu.artist}`,
nomeAlbum: `${auu.album}`,
lançamento: `${auu.release_date}`,
preço: `${auu.price}`,
segundos: `${auu.length}`,
gênero: `${auu.genre}`,
thumbnail: `${auu.thumbnail}`
}
})
})

app.get('/pesquisa/filme', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://yub1lok-api.onrender.com/api/pesquisa/filme?apikey=BielzinGay&nome=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `@TIOMODZ`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

router.all('/api/gerarpessoa', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
auu = await Request(`https://apirest.gestorvip.com/api/gerarpessoa?apikey=Toms123`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
cpf: `${auu.cpf}`,
nome: `${auu.nome}`,
cep: `${auu.cep}`,
}
})
})

app.get('/shortlink/tinyurl', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
TinyUrl.shorten(url, function(url, err) {
  if (err) return res.json(loghandler.error)
	res.json({
		status: true,
		creator: 'VNCS CODE - 73999197974',
		result: url
		})
}); 
})

app.get('/shortlink/cuttly', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
	let randomapicuttly = apicuttly[Math.floor(Math.random() * apicuttly.length)]
	var hasil = await Request(`https://cutt.ly/api/api.php?key=${randomapicuttly}&short=${url}`)
  if (!hasil.url.shortLink ) return res.json('Error')

	res.json({
		status: true,
		creator: 'VNCS CODE - 73999197974',
		result: hasil.url.shortLink
		})
});

app.get('/shortlink/bitly', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
	let randomapibitly = apibitly[Math.floor(Math.random() * apibitly.length)]
	const bitly = new BitlyClient(randomapibitly)
	bitly.shorten(url).then(function(result) {
		res.json({
			status: true,
			creator: 'VNCS CODE - 73999197974',
			result : result.link
			})
	 
	})
	.catch(function(error) {
	 res.json(`${error}`)
	});
})

app.get('/api/igstory', async (req, res, next) => {
          
url = req.query.url
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
if (!url) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro url?"}) 
        if(key.includes(apikey)){
       igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/simi', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
text = req.query.text
if (!text) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro text?"})
        if(key.includes(apikey)){
       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=pt`))
        .then(response => response.json())
        .then(data => {
        var result = data.success;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/pinterest', (req, res) => {
(async() => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
text = req.query.text
if (!text) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro text?"})
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})


app.get('/api/ttp2', async (req, res, next) => {
var texto = req.query.texto
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);

      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato: wa.me/556196378317'})
	if(key.includes(apikey)){    
    hasil = `http://br3.bronxyshost.com:3039/api-bronxys/ttp?texto=${texto}&apikey=daniel_dzn`
       res.send(await getBuffer(hasil))
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})



app.get('/api/fazernick', async (req, res) => {
  apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
let nome = req.query.nome || res.json({msg: 'insira o parâmetro: ?nome='})
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mediafire', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if (!url) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro url?"})
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


app.get('/api/wikimedia', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
query = req.query.query
if (!query) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro query?"})
wikimedia(query)
.then(hasil => {
var resultado = hasil;
res.json({
https_code: 200,
criador: "@TIOMODZ",
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/yt', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
query = req.query.query
if (!query) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro query?"})
yt(query)
.then(hasil => {
var resultado = hasil;
res.json({
https_code: 200,
criador: "@TIOMODZ",
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/gimage', async(req,res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
txt = req.query.txt
if(!txt) return res.json({msg: "Faltando o parametro txt"})
GOOGLE_IMG_SCRAP({
search: txt,
query: {
EXTENSION: GOOGLE_QUERY.EXTENSION.JPG
},
limit: 5,
domains: ["alamy.com", "istockphoto.com", "vecteezy.com", "pinterest.com", "google.com"],
excludeWords: ["black", "white"], //If you don't like black and white cats
custom: "name=content&name2=content2",
safeSearch: false,
 // excludeDomains: ["istockphoto.com", "alamy.com"]
}).then(e => {
resultado = e
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
}) 
})



app.get('/api/wattpad',  async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
query = req.query.query
if (!query) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro query?"})
wattpad(query).then(result => {
res.json({
criador: `@TIOMODZ`,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})
 

app.get('/outros/disney', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/LUvekhW4');
    var data = await response.json();
    var accounts = data.disney;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;

    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/api/figurinhas', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
	  const fig = `${Math.floor(Math.random() * 373)}`
          popopoc = fs.readFileSync(`./lib/figs/${fig}.webp`)
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', popopoc)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
  } catch (error) {
    return res.status(500).json({ resposta: `${error}`, status: 500 });
  }
});


app.get('/outros/combo', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/wniFNhqp');
    var data = await response.json();
    var accounts = data.combo;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;

    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/outros/ufc', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/2DbNi67C');
    var data = await response.json();
    var accounts = data.ufc;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;

    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/outros/sp-pni', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
	var sppni = ["✅ | *LOGIN SP-PNI*\n\n👤 | *USUARIO:* cleoniceferreirapinho@hotmail.com\n🔐 | *SENHA:* gentileza10$\\n\n💠 |  *SITE:* https://si-pni.saude.gov.br/" , "✅ | *LOGIN SP-PNI*\n\n👤 | *USUARIO:* veradaiana18@gmail.com\n🔐 | *SENHA:* 009935V.m\\n\n💠 |  *SITE:* https://si-pni.saude.gov.br/"]
    var logins = sppni[Math.floor(Math.random() * sppni.length)]
 return res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 conta: `${logins}`,
 })} catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/outros/credlink', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
	var credlink = ["✅ | *LOGIN CREDILINK*\n\n👤 | *USUARIO:* COTEL00045\n🔐 | *SENHA:* gABRIEL@31\\n\n💠 |  *SITE:* https://consulta5.confirmeonline.com.br/" , "✅ | *LOGIN CREDILINK*\n\n👤 | *USUARIO:* lafer\n🔐 | *SENHA:* 7AR32Qinfo\\n\n💠 |  *SITE:* https://consulta5.confirmeonline.com.br/"]
    var logins = credlink[Math.floor(Math.random() * credlink.length)]
 return res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 conta: `${logins}`,
 })} catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/outros/pmrj', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
	var pmrj = ["✅ | *LOGIN PM RJ*\n\n👤 | *USUARIO:* 12670489729\n🔐 | *SENHA:* 2664870p\\n\n💠 |  *SITE:* http://portal.pmerj.rj.gov.br" , "✅ | *LOGIN CREDILINK*\n\n👤 | *USUARIO:* 15720631739\n🔐 | *SENHA:* mdf91252\\n\n💠 |  *SITE:* http://portal.pmerj.rj.gov.br"]
    var logins = pmrj[Math.floor(Math.random() * pmrj.length)]
 return res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 conta: `${logins}`,
 })} catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});


app.get('/outros/express', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/ZeHyNQji');
    var data = await response.json();
    var accounts = data.epress;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

app.get('/outros/paramount', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/LDit28EV');
    var data = await response.json();
    var accounts = data.paramount;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/crunchyroll', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/QP7m9Tb1');
    var data = await response.json();
    var accounts = data.crunchyroll;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/deezer', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/N3YNKitQ');
    var data = await response.json();
    var accounts = data.deezer;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/nordvpn', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/s6v8pe61');
    var data = await response.json();
    var accounts = data.nordvpn;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/star', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/f6N5RWWN');
    var data = await response.json();
    var accounts = data.star;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/netflix', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/wxwriPvj');
    var data = await response.json();
    var accounts = data.netflix;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});

 app.get('/outros/hbomax', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  try {
    var response = await fetch('https://pastebin.com/raw/KCeP320a');
    var data = await response.json();
    var accounts = data.hbomax;
    var randomIndex = Math.floor(Math.random() * accounts.length);
    var randomAccount = accounts[randomIndex];
    var totalAccounts = accounts.length;
    return res.json({ DONO: "VNCSCODE - 7399197974", ...randomAccount, "total": '🩸 | *QUANTIDADE RESTANTE:* ' + totalAccounts, "mensagem": '❗ | *OBS:* ' + 'Não Mude nenhuma senha, eu saberei que foi vc!' })
  } catch (error) {
    return res.status(500).json({ resposta: "Erro ao obter contas", status: 500 });
  }
});


app.get('/api/xnxxsearch', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
xnxxsearch(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/pornhubsearch', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
pornhub(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/xvideossearch', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
 xvideos(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/xvideos', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
xvideosSearch(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/xvideosdw', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
xvideosDownloader(url).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/uptodown', async(req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
 if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
 uptodown(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/hackneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/equipemascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffavatar', async(req, res, next) => {
texto = req.query.texto;
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascotegame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/wingeffect', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/angelglx', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gizquadro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blackpink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/girlmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/logogame', async(req, res, next) => {
texto = req.query.texto;
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/romantic', async(req, res, next) => {
texto = req.query.texto;
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/smoke', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/papel', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/narutologo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg2', async(req, res, next) => {
texto = req.query.texto;apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/florwooden', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/madeira', async(req, res, next) => {
texto = req.query.texto;
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!texto3) return res.json({msg: "Cade o parametro texto3"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon2', async(req, res, next) => {
texto = req.query.texto;
if(!texto) return res.json({msg: "Cade o parametro texto"})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lobometal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/harryp', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/shadow', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cemiterio', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalgold', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({msg: "Cade o parametro texto"})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/transformer', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dstone', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fiction', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cattxt', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neondevil', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demonfire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/colaq', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/luxury', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/berry', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/matrix', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/horror', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/nuvem', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neve', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/xmas-cards-3d-online-942.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/areia', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/vidro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/style', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blood', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/pink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/carbon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalblue', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jeans', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/denim-text-effect-online-919.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jokerlogo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/natal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/ossos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/skeleton-text-effect-online-929.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/asfalto', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/road-warning-text-effect-878.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/break', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);

if(!texto) return res.json({status:false,msg:'cade o parametro texto'})

mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})

mumaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})


app.get('/api/lapis', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dgold', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/halloween', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lava', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/toxic', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalfire', async(req, res) => {
texto = req.query.texto;apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunder', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunderv2', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon1', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3d', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/rainbow', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gelo', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

// FIM LOGOS

app.get('/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
bla = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(bla))
})()
})

app.get('/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
bla = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(bla))
})()
})

app.get('/api/marvel', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
var apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'✖️ Apikey Inválida - Entre em contato com o proprietário para solucionar o problema ou registrar sua ApiKey.'})
mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
mumaker.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/angelwing', async(req, res, next) => {
texto = req.query.texto;
var apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'✖️ Apikey Inválida - Entre em contato com o proprietário para solucionar o problema ou registrar sua ApiKey.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `@TIOMODZ`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/canvas/lgbt',(req, res) => {
(async() => {
link = req.query.link
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(link))
})()
})

app.get('/canvas/hitler',(req, res) => {
(async() => {
 link = req.query.link
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);

res.type('jpg')
res.send(await canvacord.Canvas.hitler(link))
})()
})

app.get('/canvas/kiss',(req, res) => {
(async() => {
link = req.query.link
link2 = req.query.link2
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!link2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(link, link2))
})()
})

app.get('/canvas/comunismo', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/comunismo?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/bolsonaro', async (req, res, next) => {
var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/bolsonaro?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/affect', async (req, res, next) => {
var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/affect?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/blur', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/blur?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


app.get('/canvas/beautiful', async (req, res, next) => {
      var link = req.query.link
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})

	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/beautiful?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/circle', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/circle?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/del', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/del?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/invert', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/invert?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/facepalm', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/facepalm?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/facepalm', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/facepalm?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/jail', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/jail?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/rip', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/rip?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/trash', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/trash?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/wasted', async (req, res, next) => {
      var link = req.query.link
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wasted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/wasted', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wasted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/wanted', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wanted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/sepia', async (req, res, next) => {
      var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/sepia?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/canvas/pixelate', async (req, res, next) => {
var link = req.query.link
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/pixelate?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('./tmp/gostosinha.jpg', data)
        res.sendFile('./tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/about',(req, res) => {
res.json({
status:true,
dono:'@TIOMODZ',
msg:'Projeto em beta'
})
})

app.get('/api/antiporno',async (req,res,next) => {
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})


fetch(`https://nsfw-demo.sashido.io/api/image/classify?url=${url}`).then(e => {
res.json(e)
})
})

router.all('/api/twitter', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Cadê o parâmetro url?'
})

auu = await Request(`https://ayu.p7api.xyz/api/dl/twitter?link=${url}&apikey=saladakk`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
descrição: `${auu.resultado.descrição}`,
capa: `${auu.resultado.capa}`,
HD: `${auu.resultado.HD}`,
SD: `${auu.resultado.SD}`,
audio: `${auu.resultado.audio}`,
}
})
})


router.all('/api/v2/letramusic', async (req, res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
query = req.query.query
if(!query)return res.json({
status:false,
motivo:'Cadê o parâmetro query?'
})

auu = await Request(`https://api.popcat.xyz/lyrics?song=${query}`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: {
NomeDaMusica: `${auu.title}`,
artistaMusic: `${auu.artist}`,
LetraMusic: `${auu.lyrics}`,
imagem: `${auu.image}`
}
})
})

app.get('/api/v3/letramusic',  async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
query = req.query.query
if (!query) return res.json({ status : false, creator : `@TIOMODZ`, message : "Cade o parametro query?"})
LetradaMusica(query).then(resultado => {
res.json({
criador: `@TIOMODZ`,
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


app.get('/api/screenshotweb', async (req, res, next) => {
url = req.query.url
if(!url)return res.json({status:false, motivo:'Cadê o parâmetro url?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://api.popcat.xyz/screenshot?url=${url}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/tmp/asupan.jpg', data)
        res.sendFile(bla + '/tmp/asupan.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/rastreio', async (req, res, next) => {
q = req.query.q
if(!q)return res.json({status:false, motivo:'Cadê o parâmetro q?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
const { rastrear } = require('./modulos-api/apis.js')
rastrear(q).then(resultado => {
res.json(resultado)
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
mensagem: 'Erro no Servidor Interno'
})
});
})
 
app.get('/api/consultas', async (req, res) => {
var type = req.query.type
if(!type)return res.json({ status:false, resultado:'Cade o parametro type??'})
query = req.query.query
if(!query)return res.json({ status:false, resultado:'Cade o parametro query??'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
try {
auu = await Request(`http://fra2.to.esthosting.com.br:25567/${type}/${query}`)
auu = auu.resultado
fs.writeFileSync(`./data/consultas/${query}.txt`, '☑️ 𝗫𝗔𝗡𝗔𝗫 𝗕𝗨𝗦𝗖𝗔𝗦 𝗕𝗢𝗧 ☑️' + `\n\n${auu.str}` + '☑️ VOCE É O UNICO RESPONSAVEL POR ESTES DADOS! ☑️')
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: `${auu.str}`,
})
} catch (error) {
return res.status(404).json({ resultado: "Banco De Dados Está Sendo Atualizado Agora - Consulte Novamente em [1 Minuto]", status: 500 });
}
})

app.get('/api/consultas/bank', async (req, res) => {
query = req.query.query
if(!query)return res.json({status:false,resultado:'Cade o parametro query??'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
try {
auu = await Request(`https://brasilapi.com.br/api/banks/v1/${query}`)
let resultadobank = `*👤 ISPB:* ${auu.ispb}\n*🏦 BANCO:* ${auu.name}\n*🏧 CODE:* ${auu.code}\n*👤 FULL NAME:* ${auu.fullName}`
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: `${resultadobank}`,
})
} catch (error) {
return res.status(404).json({ resultado: "Banco De Dados Está Sendo Atualizado Agora - Consulte Novamente em [1 Minuto]", status: 500 });
}
})

app.get('/api/consultas/bin', async (req, res) => {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
try {
auu = await Request(`https://teddyapis.teddymodz.repl.co/bin.php?bin=${query}`)
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: `*💳 BIN:* ${auu.dados.bin}\n*✅ PAIS:* ${auu.dados.pais}\n*🚩 BANDEIRA:* ${auu.dados.bandeira}\n*🅰️ TIPO:* ${auu.dados.tipo}*📊 NIVEL:* ${auu.dados.nivel}\n*🏦 BANCO:* ${auu.dados.banco}`,
})
} catch (error) {
return res.status(404).json({ resultado: "Banco De Dados Está Sendo Atualizado Agora - Consulte Novamente em [1 Minuto]", status: 500 });
}
})


app.get('/api/wikipedia', async (req, res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`,
}) 
})


app.get("/datasave", async (req, res) => {
consulta = req.query.consulta
if(!consulta)return res.json({
status:false,
msg:'insira o tipo de consulta'
})    
  res.sendFile(bla + `/consultas/${consulta}.txt`);
})
	

app.get('/api/mirella', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mirella?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_emoji', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 102)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/Figurinha-emoji/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_flork', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 102)
    hasil = `https://raw.githubusercontent.com/Scheyot2/anya-bot/main/Figurinhas/figu_flork/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figurinhas_ale', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 8051)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


app.get('/ias/bard', async (req, res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
const { init, askAI, Chat } = require('bard-ai');
await init("ZQjixUO4Lze-62g0XJqa5P2VPKLkk8Zx9wQ6omGQrXAPVxWZTLSJ_b5J3ZgswoVTJUDPMw.");
const response = await askAI(q);
res.json({
status: true,
mensagem: 'NICOLE REST APPIS - MELHOR SITE DE APIS',
criador: `@TIOMODZ`,
resultado: response,
})
})

app.get("/ias/bing", async(req, res) => {
try {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
var pesquisa = req.query.pesquisa
if (!pesquisa) return res.json({msg: "Cade, quer pesquisar o que?"})
const url = `https://www.bing.com/search?q=${pesquisa}&setmkt=pt-BR&PC=EMMX01&form=LWS002&scope=web`;
axios(url).then(response => {
const $ = cheerio.load(response.data);
const Rst = [];
$("div > p").each(function(){
const TTL = $(this).text();
if(TTL.length > 10)
Rst.push({ 
TTL
});
});
let bla = ''
for (let i of Rst) {
bla += `${i.TTL.replace(new RegExp("Web", "gi"), "")}\n\n`
}
res.json({
dono: 'VNCSCODE',
resultado: bla
})
}).catch(e => {
return res.json({resultado: "Error, digite algo que queira pesquisar.."})
})
} catch (e) {
return res.json({resultado: `${e}`})
}
})


app.get("/ias/gpt", async(req, res, next) => {
async function PRGT() {
try {
var { Configuration, OpenAIApi } = require("openai") //precisa baixar o módulo (npm i openai)
var { q, apikey, tokengpt } = req.query
var configopen = new Configuration({ apiKey: tokengpt.trim() }); //coloca sua key aqui
 var openai = new OpenAIApi(configopen); //configuração do openai (sincronização da sua key)
 if(!q) return res.json({msg: 'Em que posso te ajudar?, pergunte e eu te responderei 🙂'})
 if(!tokengpt) return res.json({msg: `Faltando definir o token: &tokengpt=SEU
 TOKEN`})
 var resopen = await openai.createCompletion({
frequency_penalty: 0.5, //não sei
max_tokens: 3000, //quantidade máxima de palavra-chave
model: "text-davinci-003", //modelo de respostas
presence_penalty: 0, //não sei
prompt: q, //o que deseja  
temperature: 1, //respostas exatas (não entendi muito bem na documentação)
top_p: 1, //não sei
});
respgpt = resopen.data.choices[0].text.includes('\n') ? resopen.data.choices[0].text.replace('\n\n', '') : resopen.data.choices[0].text
res.json({resposta: respgpt})
} catch (e) {
console.log(e)
res.json({resposta: `${e}`})
}
}
PRGT().catch(async(e) => {
console.log(e)
res.json({resposta: `${e}`})
})
})

app.get("/ias/super_img", async(req, res, next) => {
async function PRGT2() {
try {
var { Configuration, OpenAIApi } = require("openai") //precisa baixar o módulo (npm i openai)
var { q, apikey, tokengpt } = req.query
var configopen = new Configuration({ apiKey: tokengpt.trim()}); //coloca sua key aqui
var openai = new OpenAIApi(configopen); //configuração do openai (sincronização da sua key)
 if(!q) return res.json({msg: 'Em que posso te ajudar?, peça algo, como: hulk com raiva 🙂'})
 var respimg = await openai.createImage({
 prompt: q, //o que deseja
 n: 1, //quantidade de imagem
 size: "1024x1024", //tamanho (aceita apenas: 256x256, 512x512, e 1024x1024)
 });
if(!apikey)return res.json({msg:'cade o parametro apikey'})
res.type("jpeg")
res.send(await getBuffer(respimg.data.data[0].url))
} catch {
return res.json({resposta: "Seu token expirou mano!!"})
}
}
PRGT2().catch(async() => {
return res.json({resposta: "Seu token expirou mano!!"})
})
})

app.get('/ias/animeai', async (req, res, next) => {
 var img = req.query.img
if(!img)return res.json({status:false,motivo:'Cadê o parâmetro img?'})
  apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    hasil = `http://api.lolhuman.xyz/api/imagetoanime?apikey=GataDios&img=${img}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 


app.get('/api/attp', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro img?'})
    hasil = `http://br3.bronxyshost.com:3039/api-bronxys/attp?texto=${texto}&apikey=daniel_dzn`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 
 
app.get('/api/attp1', async (req, res, next) => {
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
    hasil = `https://marcos025.onrender.com/api/maker/attp1?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 

app.get('/api/attp2', async (req, res, next) => {   
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
   apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    hasil = `https://marcos025.onrender.com/api/maker/attp2?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 


app.get('/api/attp3', async (req, res, next) => {
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);  
    hasil = `https://marcos025.onrender.com/api/maker/attp3?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 

app.get('/api/attp4', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
    hasil = `https://marcos025.onrender.com/api/maker/attp4?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 


app.get('/api/attp5', async (req, res, next) => {
      var texto = req.query.texto
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
   apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    hasil = `https://marcos025.onrender.com/api/maker/attp5?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 


app.get('/api/attp6', async (req, res, next) => {
      var texto = req.query.texto 
if(!texto)return res.json({status:false,motivo:'Cadê o parâmetro texto?'})
   apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    hasil = `https://marcos025.onrender.com/api/maker/attp6?texto=${texto}&apikey=XANAX-VNCS$`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/gostosinha.jpg', data)
        res.sendFile(bla+'/tmp/gostosinha.jpg') 
}) 


app.get('/sticker/figu_memes', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/Figurinha-memes/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_anime', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-anime/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_coreana', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 43)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-coreana/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_bebe', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 17)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/main/pack/figbebe/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_desenho', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-desenho/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_animais', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 46)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/main/pack/figanimais/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_engracada', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 25)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-engracadas/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_raiva', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 29)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-raiva/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/sticker/figu_roblox', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
var rnd = Math.floor(Math.random() * 21)
    hasil = `https://raw.githubusercontent.com/Scheyot2/sakura-botv6/main/FIGURINHAS/figurinha-roblox/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/stickera.webp', data)
        res.sendFile('/tmp/stickera.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


app.get('/api/mirellapng', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mirellapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/cibelly', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/cibellymp4?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/cibellypng', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarlapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/miakhalifa', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mia2nsfw?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


app.get('/api/ayarla', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarla?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/ayarlapng', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarlapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/nsfw/ahegao', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const ahegao = JSON.parse(fs.readFileSync(bla + '/data/ahegao.json'));
    const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
    data = await fetch(randahegao).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ahegao.jpeg', data)
    res.sendFile(bla + '/tmp/ahegao.jpeg')
 
})

app.get('/nsfw/ass', async (req, res, next) => {
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const ass = JSON.parse(fs.readFileSync(bla + '/data/ass.json'));
    const randass = ass[Math.floor(Math.random() * ass.length)];
    data = await fetch(randass).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ass.jpeg', data)
    res.sendFile(bla + '/tmp/ass.jpeg')
 
})

app.get('/nsfw/bdsm', async (req, res, next) => {
	apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const bdsm = JSON.parse(fs.readFileSync(bla + '/data/bdsm.json'));
    const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
    data = await fetch(randbdsm).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/bdsm.jpeg', data)
    res.sendFile(bla + '/tmp/bdsm.jpeg')
 
})

app.get('/nsfw/blowjob', async (req, res, next) => {
  apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    const blowjob = JSON.parse(fs.readFileSync(bla + '/data/blowjob.json'));
    const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
    data = await fetch(randblowjob).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/blowjob.jpeg', data)
    res.sendFile(bla + '/tmp/blowjob.jpeg')
})

app.get('/nsfw/cuckold', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const cuckold = JSON.parse(fs.readFileSync(bla + '/data/cuckold.json'));
    const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
    data = await fetch(randcuckold).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cuckold.jpeg', data)
    res.sendFile(bla + '/tmp/cuckold.jpeg')
 
})

app.get('/nsfw/cum', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);		
    const cum = JSON.parse(fs.readFileSync(bla + '/data/cum.json'));
    const randcum = cum[Math.floor(Math.random() * cum.length)];
    data = await fetch(randcum).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cum.jpeg', data)
    res.sendFile(bla + '/tmp/cum.jpeg')
})

app.get('/nsfw/ero', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    const ero = JSON.parse(fs.readFileSync(bla + '/data/ero.json'));
    const randero = ero[Math.floor(Math.random() * ero.length)];
    data = await fetch(randero).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ero.jpeg', data)
    res.sendFile(bla + '/tmp/ero.jpeg')
})

app.get('/nsfw/femdom', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const femdom = JSON.parse(fs.readFileSync(bla + '/data/femdom.json'));
    const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
    data = await fetch(randfemdom).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/femdom.jpeg', data)
    res.sendFile(bla + '/tmp/femdom.jpeg')
 
})

app.get('/nsfw/foot', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req); 
    const foot = JSON.parse(fs.readFileSync(bla + '/data/foot.json'));
    const randfoot = foot[Math.floor(Math.random() * foot.length)];
    data = await fetch(randfoot).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/foot.jpeg', data)
    res.sendFile(bla + '/tmp/foot.jpeg')
})

app.get('/nsfw/gangbang', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    const gangbang = JSON.parse(fs.readFileSync(bla + '/data/gangbang.json'));
    const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
    data = await fetch(randgangbang).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gangbang.jpg', data)
    res.sendFile(bla + '/tmp/gangbang.jpg')
 
})

app.get('/nsfw/glasses', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const glasses = JSON.parse(fs.readFileSync(bla + '/data/glasses.json'));
    const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
    data = await fetch(randglasses).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/glasses.jpeg', data)
    res.sendFile(bla + '/tmp/glasses.jpeg')
 
})

app.get('/nsfw/hentai', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const hentai = JSON.parse(fs.readFileSync(bla + '/data/hentai.json'));
    const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
    data = await fetch(randhentai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hentai.jpeg', data)
    res.sendFile(bla + '/tmp/hentai.jpeg')
 
})

app.get('/nsfw/gifs', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const gifs = JSON.parse(fs.readFileSync(bla + '/data/gifs.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gifs.jpeg', data)
    res.sendFile(bla + '/tmp/gifs.jpeg')
 
})

app.get('/figu', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const gifs = JSON.parse(fs.readFileSync(bla + '/lib/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/stickera.webp', data)
    res.sendFile(bla + '/tmp/stickera.webp')
 
})

app.get('/api/stickera', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const gifs = JSON.parse(fs.readFileSync(bla + '/lib/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/stickera.webp', data)
    res.sendFile(bla + '/tmp/stickera.webp')
 
})

app.get('/nsfw/jahy', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const jahy = JSON.parse(fs.readFileSync(bla + '/data/jahy.json'));
    const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
    data = await fetch(randjahy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/jahy.jpeg', data)
    res.sendFile(bla + '/tmp/jahy.jpeg')
 
})

app.get('/nsfw/manga', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const manga = JSON.parse(fs.readFileSync(bla + '/data/manga.json'));
    const randmanga = manga[Math.floor(Math.random() * manga.length)];
    data = await fetch(randmanga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/manga.jpeg', data)
    res.sendFile(bla + '/tmp/manga.jpeg')
 
})

app.get('/nsfw/masturbation', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const masturbation = JSON.parse(fs.readFileSync(bla + '/data/masturbation.json'));
    const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
    data = await fetch(randmasturbation).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/masturbation.jpeg', data)
    res.sendFile(bla + '/tmp/masturbation.jpeg')
 
})

app.get('/nsfw/neko', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const neko = JSON.parse(fs.readFileSync(bla + '/data/neko.json'));
    const randneko = neko[Math.floor(Math.random() * neko.length)];
    data = await fetch(randneko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/neko.jpeg', data)
    res.sendFile(bla + '/tmp/neko.jpeg')
 
})

app.get('/nsfw/orgy', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const orgy = JSON.parse(fs.readFileSync(bla + '/data/orgy.json'));
    const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
    data = await fetch(randorgy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/orgy.jpeg', data)
    res.sendFile(bla + '/tmp/orgy.jpeg')
 
})

app.get('/nsfw/panties', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const panties = JSON.parse(fs.readFileSync(bla + '/data/panties.json'));
    const randpanties = panties[Math.floor(Math.random() * panties.length)];
    data = await fetch(randpanties).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/panties.jpeg', data)
    res.sendFile(bla + '/tmp/panties.jpeg')
 
})

app.get('/nsfw/pussy', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const pussy = JSON.parse(fs.readFileSync(bla + '/data/pussy.json'));
    const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
    data = await fetch(randpussy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pussy.jpeg', data)
    res.sendFile(bla + '/tmp/pussy.jpeg')
 
})

app.get('/nsfw/neko2', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const neko2 = JSON.parse(fs.readFileSync(bla + '/data/neko2.json'));
    const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
    data = await fetch(randneko2).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/neko2.jpeg', data)
    res.sendFile(bla + '/tmp/neko2.jpeg')
 
})

app.get('/nsfw/tentacles', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const tentacles = JSON.parse(fs.readFileSync(bla + '/data/tentacles.json'));
    const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
    data = await fetch(randtentacles).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/tentacles.jpeg', data)
    res.sendFile(bla + '/tmp/tentacles.jpeg')
 
})

app.get('/nsfw/thighs', async (req, res, next) => {
     apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const thighs = JSON.parse(fs.readFileSync(bla + '/data/thighs.json'));
    const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
    data = await fetch(randthighs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/thighs.jpeg', data)
    res.sendFile(bla + '/tmp/thighs.jpeg')
 
})

app.get('/nsfw/yuri', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const yuri = JSON.parse(fs.readFileSync(bla + '/data/yuri.json'));
    const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
    data = await fetch(randyuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yuri.jpeg', data)
    res.sendFile(bla + '/tmp/yuri.jpeg')
 
})

app.get('/nsfw/zettai', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const zettai = JSON.parse(fs.readFileSync(bla + '/data/zettai.json'));
    const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
    data = await fetch(randzettai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/zettai.jpeg', data)
    res.sendFile(bla + '/tmp/zettai.jpeg')
 
})

app.get('/random/keneki', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const keneki = JSON.parse(fs.readFileSync(bla + '/data/keneki.json'));
    const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
    data = await fetch(randkeneki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/keneki.jpeg', data)
    res.sendFile(bla + '/tmp/keneki.jpeg')
 
})

app.get('/random/megumin', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const megumin = JSON.parse(fs.readFileSync(bla + '/data/megumin.json'));
    const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
    data = await fetch(randmegumin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/megumin.jpeg', data)
    res.sendFile(bla + '/tmp/megumin.jpeg')
 
})

app.get('/random/yotsuba', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const yotsuba = JSON.parse(fs.readFileSync(bla + '/data/yotsuba.json'));
    const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
    data = await fetch(randyotsuba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yotsuba.jpeg', data)
    res.sendFile(bla + '/tmp/yotsuba.jpeg')
 
})

app.get('/random/shinomiya', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const shinomiya = JSON.parse(fs.readFileSync(bla + '/data/shinomiya.json'));
    const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
    data = await fetch(randshinomiya).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shinomiya.jpeg', data)
    res.sendFile(bla + '/tmp/shinomiya.jpeg')
 
})

app.get('/random/yumeko', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const yumeko = JSON.parse(fs.readFileSync(bla + '/data/yumeko.json'));
    const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
    data = await fetch(randyumeko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yumeko.jpeg', data)
    res.sendFile(bla + '/tmp/yumeko.jpeg')
 
})

app.get('/random/tejina', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const tejina = JSON.parse(fs.readFileSync(bla + '/data/tejina.json'));
    const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
    data = await fetch(randtejina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/tejina.jpeg', data)
    res.sendFile(bla + '/tmp/tejina.jpeg')
 
})

app.get('/random/chiho', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const chiho = JSON.parse(fs.readFileSync(bla + '/data/chiho.json'));
    const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
    data = await fetch(randchiho).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/chiho.jpeg', data)
    res.sendFile(bla + '/tmp/chiho.jpeg')
 
})

app.get('/wallpaper/cyberspace', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const cyberspace = JSON.parse(fs.readFileSync(bla + '/data/CyberSpace.json'));
    const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
    data = await fetch(randcyberspace).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cyberspace.jpeg', data)
    res.sendFile(bla + '/tmp/cyberspace.jpeg')
 
})

app.get('/wallpaper/gaming', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const gaming = JSON.parse(fs.readFileSync(bla + '/data/GameWallp.json'));
    const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
    data = await fetch(randgaming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gaming.jpeg', data)
    res.sendFile(bla + '/tmp/gaming.jpeg')
 
})

app.get('/wallpaper/programing', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const programing = JSON.parse(fs.readFileSync(bla + '/data/Programming.json'));
    const randprograming = programing[Math.floor(Math.random() * programing.length)];
    data = await fetch(randprograming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/programing.jpeg', data)
    res.sendFile(bla + '/tmp/programing.jpeg')
 
})

app.get('/wallpaper/wallpapertec', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const teknologi = JSON.parse(fs.readFileSync(bla + '/data/Technology.json'));
    const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
    data = await fetch(randteknologi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/teknologi.jpeg', data)
    res.sendFile(bla + '/tmp/teknologi.jpeg')
 
})

app.get('/wallpaper/mountain', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const mountain = JSON.parse(fs.readFileSync(bla + '/data/Mountain.json'));
    const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
    data = await fetch(randmountain).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/mountain.jpeg', data)
    res.sendFile(bla + '/tmp/mountain.jpeg')
 
})



app.get('/random/toukachan', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const toukachan = JSON.parse(fs.readFileSync(bla + '/data/toukachan.json'));
    const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
    data = await fetch(randtoukachan).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/toukachan.jpeg', data)
    res.sendFile(bla + '/tmp/toukachan.jpeg')
 
})

app.get('/random/akira', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const akira = JSON.parse(fs.readFileSync(bla + '/data/akira.json'));
    const randakira = akira[Math.floor(Math.random() * akira.length)];
    data = await fetch(randakira).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/akira.jpeg', data)
    res.sendFile(bla + '/tmp/akira.jpeg')
 
})

app.get('/random/itori', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const itori = JSON.parse(fs.readFileSync(bla + '/data/itori.json'));
    const randitori = itori[Math.floor(Math.random() * itori.length)];
    data = await fetch(randitori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/itori.jpeg', data)
    res.sendFile(bla + '/tmp/itori.jpeg')
 
})

app.get('/random/kurumi', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const kurumi = JSON.parse(fs.readFileSync(bla + '/data/kurumi.json'));
    const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
    data = await fetch(randkurumi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kurumi.jpeg', data)
    res.sendFile(bla + '/tmp/kurumi.jpeg')
 
})

app.get('/random/miku', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const miku = JSON.parse(fs.readFileSync(bla + '/data/miku.json'));
    const randmiku = miku[Math.floor(Math.random() * miku.length)];
    data = await fetch(randmiku).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/miku.jpeg', data)
    res.sendFile(bla + '/tmp/miku.jpeg')
 
})

app.get('/random/pokemon', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const pokemon = JSON.parse(fs.readFileSync(bla + '/data/pokemon.json'));
    const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    data = await fetch(randpokemon).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pokemon.jpeg', data)
    res.sendFile(bla + '/tmp/pokemon.jpeg')
 
})

app.get('/random/ryujin', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const ryujin = JSON.parse(fs.readFileSync(bla + '/data/ryujin.json'));
    const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
    data = await fetch(randryujin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ryujin.jpeg', data)
    res.sendFile(bla + '/tmp/ryujin.jpeg')
 
})

app.get('/random/rose', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const rose = JSON.parse(fs.readFileSync(bla + '/data/rose.json'));
    const randrose = rose[Math.floor(Math.random() * rose.length)];
    data = await fetch(randrose).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/rose.jpeg', data)
    res.sendFile(bla + '/tmp/rose.jpeg')
 
})

app.get('/random/kaori', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const kaori = JSON.parse(fs.readFileSync(bla + '/data/kaori.json'));
    const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
    data = await fetch(randkaori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kaori.jpeg', data)
    res.sendFile(bla + '/tmp/kaori.jpeg')
 
})

app.get('/random/shizuka', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const shizuka = JSON.parse(fs.readFileSync(bla + '/data/shizuka.json'));
    const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
    data = await fetch(randshizuka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shizuka.jpeg', data)
    res.sendFile(bla + '/tmp/shizuka.jpeg')
 
})

app.get('/random/kaga', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const kaga = JSON.parse(fs.readFileSync(bla + '/data/kaga.json'));
    const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
    data = await fetch(randkaga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kaga.jpeg', data)
    res.sendFile(bla + '/tmp/kaga.jpeg')
 
})

app.get('/random/kotori', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const kotori = JSON.parse(fs.readFileSync(bla + '/data/kotori.json'));
    const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
    data = await fetch(randkotori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kotori.jpeg', data)
    res.sendFile(bla + '/tmp/kotori.jpeg')
 
})

app.get('/random/mikasa', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const mikasa = JSON.parse(fs.readFileSync(bla + '/data/mikasa.json'));
    const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
    data = await fetch(randmikasa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/mikasa.jpeg', data)
    res.sendFile(bla + '/tmp/mikasa.jpeg')
 
})

app.get('/random/akiyama', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const akiyama = JSON.parse(fs.readFileSync(bla + '/data/akiyama.json'));
    const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
    data = await fetch(randakiyama).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/akiyama.jpeg', data)
    res.sendFile(bla + '/tmp/akiyama.jpeg')
 
})

app.get('/random/gremory', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const gremory = JSON.parse(fs.readFileSync(bla + '/data/gremory.json'));
    const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
    data = await fetch(randgremory).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gremory.jpeg', data)
    res.sendFile(bla + '/tmp/gremory.jpeg')
 
})

app.get('/random/isuzu', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const isuzu = JSON.parse(fs.readFileSync(bla + '/data/isuzu.json'));
    const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
    data = await fetch(randisuzu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/isuzu.jpeg', data)
    res.sendFile(bla + '/tmp/isuzu.jpeg')
 
})

app.get('/random/cosplay', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const cosplay = JSON.parse(fs.readFileSync(bla + '/data/cosplay.json'));
    const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
    data = await fetch(randcosplay).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cosplay.jpeg', data)
    res.sendFile(bla + '/tmp/cosplay.jpeg')
 
})

app.get('/random/shina', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const shina = JSON.parse(fs.readFileSync(bla + '/data/shina.json'));
    const randshina = shina[Math.floor(Math.random() * shina.length)];
    data = await fetch(randshina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shina.jpeg', data)
    res.sendFile(bla + '/tmp/shina.jpeg')
 
})

app.get('/random/kagura', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const kagura = JSON.parse(fs.readFileSync(bla + '/data/kagura.json'));
    const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
    data = await fetch(randkagura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kagura.jpeg', data)
    res.sendFile(bla + '/tmp/kagura.jpeg')
 
})

app.get('/random/shinka', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const shinka = JSON.parse(fs.readFileSync(bla + '/data/shinka.json'));
    const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
    data = await fetch(randshinka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shinka.jpeg', data)
    res.sendFile(bla + '/tmp/shinka.jpeg')
 
})

app.get('/random/eba', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const eba = JSON.parse(fs.readFileSync(bla + '/data/eba.json'));
    const randeba = eba[Math.floor(Math.random() * eba.length)];
    data = await fetch(randeba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/eba.jpeg', data)
    res.sendFile(bla + '/tmp/eba.jpeg')
 
})

app.get('/random/deidara', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Deidara = JSON.parse(fs.readFileSync(bla + '/data/deidara.json'));
    const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
    data = await fetch(randDeidara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/deidara.jpeg', data)
    res.sendFile(bla + '/tmp/deidara.jpeg')
 
})



app.get('/random/jeni', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const jeni = JSON.parse(fs.readFileSync(bla + '/data/jeni.json'));
    const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
    data = await fetch(randjeni).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/jeni.jpeg', data)
    res.sendFile(bla + '/tmp/jeni.jpeg')
 
})


app.get('/random/meme', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const meme = JSON.parse(fs.readFileSync(bla + '/data/meme.json'));
    const randmeme = meme[Math.floor(Math.random() * meme.length)];
    data = await fetch(randmeme).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/meme.jpeg', data)
    res.sendFile(bla + '/tmp/meme.jpeg')
 
})

app.get('/wallpaper/satanic', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const satanic = JSON.parse(fs.readFileSync(bla + '/data/satanic.json'));
    const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
    data = await fetch(randsatanic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/satanic.jpeg', data)
    res.sendFile(bla + '/tmp/satanic.jpeg')
 
})



app.get('/random/itachi', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Itachi = JSON.parse(fs.readFileSync(bla + '/data/itachi.json'));
    const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
    data = await fetch(randItachi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ita.jpeg', data)
    res.sendFile(bla + '/tmp/ita.jpeg')
 
})

app.get('/random/madara', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Madara = JSON.parse(fs.readFileSync(bla + '/data/madara.json'));
    const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
    data = await fetch(randMadara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/madara.jpeg', data)
    res.sendFile(bla + '/tmp/madara.jpeg')
 
})

app.get('/random/yuki', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Yuki = JSON.parse(fs.readFileSync(bla + '/data/yuki.json'));
    const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
    data = await fetch(randYuki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yuki.jpeg', data)
    res.sendFile(bla + '/tmp/yuki.jpeg')
 
})

app.get('/wallpaper/asuna', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const asuna = JSON.parse(fs.readFileSync(bla + '/data/asuna.json'));
    const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
    data = await fetch(randasuna).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/asuna.jpeg', data)
    res.sendFile(bla + '/tmp/asuna.jpeg')
 
})

app.get('/random/ayuzawa', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const ayuzawa = JSON.parse(fs.readFileSync(bla + '/data/ayuzawa.json'));
    const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
    data = await fetch(randayuzawa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ayuzawa.jpeg', data)
    res.sendFile(bla + '/tmp/ayuzawa.jpeg')
 
})

app.get('/random/chitoge', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const chitoge = JSON.parse(fs.readFileSync(bla + '/data/chitoge.json'));
    const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
    data = await fetch(randchitoge).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/chitoge.jpeg', data)
    res.sendFile(bla + '/tmp/chitoge.jpeg')
 
})

app.get('/random/emilia', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const emilia = JSON.parse(fs.readFileSync(bla + '/data/emilia.json'));
    const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
    data = await fetch(randemilia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/emilia.jpeg', data)
    res.sendFile(bla + '/tmp/emilia.jpeg')
 
})

app.get('/random/hestia', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const hestia = JSON.parse(fs.readFileSync(bla + '/data/hestia.json'));
    const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
    data = await fetch(randhestia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hestia.jpeg', data)
    res.sendFile(bla + '/tmp/hestia.jpeg')
 
})

app.get('/random/inori', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const inori = JSON.parse(fs.readFileSync(bla + '/data/inori.json'));
    const randinori = inori[Math.floor(Math.random() * inori.length)];
    data = await fetch(randinori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/inori.jpeg', data)
    res.sendFile(bla + '/tmp/inori.jpeg')
 
})

app.get('/random/ana', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const ana = JSON.parse(fs.readFileSync(bla + '/data/ana.json'));
    const randana = ana[Math.floor(Math.random() * ana.length)];
    data = await fetch(randana).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ana.jpeg', data)
    res.sendFile(bla + '/tmp/ana.jpeg')
 
})

app.get('/random/boruto', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Boruto = JSON.parse(fs.readFileSync(bla + '/data/boruto.json'));
    const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
    data = await fetch(randBoruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/bor.jpeg', data)
    res.sendFile(bla + '/tmp/bor.jpeg')
 
})

app.get('/random/erza', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Erza = JSON.parse(fs.readFileSync(bla + '/data/erza.json'));
    const randErza = Erza[Math.floor(Math.random() * Erza.length)];
    data = await fetch(randErza).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/erza.jpeg', data)
    res.sendFile(bla + '/tmp/erza.jpeg')
 
})

app.get('/random/kakashi', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Kakasih = JSON.parse(fs.readFileSync(bla + '/data/kakasih.json'));
    const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
    data = await fetch(randKakasih).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ka.jpeg', data)
    res.sendFile(bla + '/tmp/ka.jpeg')
 
})

app.get('/random/sagiri', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sagiri.jpeg', data)
    res.sendFile(bla + '/tmp/sagiri.jpeg')
 
})

app.get('/random/minato', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Minato = JSON.parse(fs.readFileSync(bla + '/data/minato.json'));
    const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
    data = await fetch(randMinato).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/minato.jpeg', data)
    res.sendFile(bla + '/tmp/minato.jpeg')
 
})

app.get('/random/naruto', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Naruto = JSON.parse(fs.readFileSync(bla + '/data/naruto.json'));
    const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
    data = await fetch(randNaruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/naruto.jpeg', data)
    res.sendFile(bla + '/tmp/naruto.jpeg')
 
})

app.get('/random/nezuko', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Nezuko = JSON.parse(fs.readFileSync(bla + '/data/nezuko.json'));
    const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
    data = await fetch(randNezuko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/nezu.jpeg', data)
    res.sendFile(bla + '/tmp/nezu.jpeg')
 
})

app.get('/random/onepiece', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Pic = JSON.parse(fs.readFileSync(bla + '/data/onepiece.json'));
    const randPic = Pic[Math.floor(Math.random() * Pic.length)];
    data = await fetch(randPic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pic.jpeg', data)
    res.sendFile(bla + '/tmp/pic.jpeg')
 
})

app.get('/random/rize', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Rize = JSON.parse(fs.readFileSync(bla + '/data/rize.json'));
    const randRize = Rize[Math.floor(Math.random() * Rize.length)];
    data = await fetch(randRize).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/rize.jpeg', data)
    res.sendFile(bla + '/tmp/rize.jpeg')
 
})

app.get('/random/sakura', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Sakura = JSON.parse(fs.readFileSync(bla + '/data/sakura.json'));
    const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
    data = await fetch(randSakura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sakura.jpeg', data)
    res.sendFile(bla + '/tmp/sakura.jpeg')
 
})

app.get('/random/sasuke', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Sasuke = JSON.parse(fs.readFileSync(bla + '/data/sasuke.json'));
    const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
    data = await fetch(randSasuke).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sasuke.jpeg', data)
    res.sendFile(bla + '/tmp/sasuke.jpeg')
 
})

app.get('/random/tsunade', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Su = JSON.parse(fs.readFileSync(bla + '/data/tsunade.json'));
    const randSu = Su[Math.floor(Math.random() * Su.length)];
    data = await fetch(randSu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/su.jpeg', data)
    res.sendFile(bla + '/tmp/su.jpeg')
 
})

app.get('/random/montor', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Mon = JSON.parse(fs.readFileSync(bla + '/data/montor.json'));
    const randMon = Mon[Math.floor(Math.random() * Mon.length)];
    data = await fetch(randMon).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/montor.jpeg', data)
    res.sendFile(bla + '/tmp/montor.jpeg');
 
})

app.get('/random/mobil', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Mob = JSON.parse(fs.readFileSync(bla + '/data/mobil.json'));
    const randMob = Mob[Math.floor(Math.random() * Mob.length)];
    data = await fetch(randMob).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/mobil.jpeg', data)
    res.sendFile(bla + '/tmp/mobil.jpeg');
 
})


app.get('/random/anime', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Wai23 = JSON.parse(fs.readFileSync(bla + '/data/wallhp2.json'));
    const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
    data = await fetch(randWai23).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wallhp2.jpeg', data)
    res.sendFile(bla + '/tmp/wallhp2.jpeg');
 
})


app.get('/random/wallhp', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Wai22 = JSON.parse(fs.readFileSync(bla + '/data/wallhp.json'));
    const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
    data = await fetch(randWai22).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wallhp.jpeg', data)
    res.sendFile(bla + '/tmp/wallhp.jpeg');
 
})

app.get('/random/waifu2', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
    const Wai2 = JSON.parse(fs.readFileSync(bla + '/data/waifu2.json'));
    const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
    data = await fetch(randWai2).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wibu2.jpeg', data)
    res.sendFile(bla + '/tmp/wibu2.jpeg');
})

app.get('/random/waifu', async (req, res, next) => {
    const Wai = JSON.parse(fs.readFileSync(bla + '/data/waifu.json'));
    const randWai = Wai[Math.floor(Math.random() * Wai.length)];
    data = await fetch(randWai).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wibu.jpeg', data)
    res.sendFile(bla + '/tmp/wibu.jpeg');
 
})


app.get('/random/hekel', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	Hekel = JSON.parse(fs.readFileSync(bla + '/data/hekel.json'));
    const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
    data = await fetch(randHekel).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hek.jpeg', data)
    res.sendFile(bla + '/tmp/hek.jpeg')
 
})

app.get('/random/kucing', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    Kucing = JSON.parse(fs.readFileSync(bla + '/data/kucing.json'));
    const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
    data = await fetch(randKucing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kucing.jpeg', data)
    res.sendFile(bla + '/tmp/kucing.jpeg')
 
})

app.get('/wallpaper/pubg', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    Pubg = JSON.parse(fs.readFileSync(bla + '/data/pubg.json'));
    const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
    data = await fetch(randPubg).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pubg.jpeg', data)
    res.sendFile(bla + '/tmp/pubg.jpeg')
 
})

app.get('/wallpaper/ppcouple', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    Pp = JSON.parse(fs.readFileSync(bla + '/data/profil.json'));
    const randPp = Pp[Math.floor(Math.random() * Pp.length)]
    data = await fetch(randPp).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pp.jpeg', data)
    res.sendFile(bla + '/tmp/pp.jpeg')
 
})

app.get('/wallpaper/anjing', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    Anjing = JSON.parse(fs.readFileSync(bla + '/data/anjing.json'));
    const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
    data = await fetch(randAnjing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ajg.jpeg', data)
    res.sendFile(bla + '/tmp/ajg.jpeg')
 
})

app.get('/random/doraemon', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    Dora = JSON.parse(fs.readFileSync(bla + '/data/doraemon.json'));
    const randDora = Dora[Math.floor(Math.random() * Dora.length)]
    data = await fetch(randDora).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/dora.jpeg', data)
    res.sendFile(bla + '/tmp/dora.jpeg')
 
})


app.get('/random/elaina', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const Elaina = JSON.parse(fs.readFileSync(bla + '/data/elaina.json'))
    const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
    //tansole.log(randLoli)
    data = await fetch(randElaina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/elaina.jpeg', data)
    res.sendFile(bla + '/tmp/elaina.jpeg')
 
})


app.get('/random/loli', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const Loli = JSON.parse(fs.readFileSync(bla + '/data/loli.json'))
    const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
    //tansole.log(randLoli)
    data = await fetch(randLoli).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/loli.jpeg', data)
    res.sendFile(bla + '/tmp/loli.jpeg')
 
})


app.get('/random/yuri', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const Yuri = JSON.parse(fs.readFileSync(bla + '/data/yuri.json'))
    const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
    //tansole.log(randTech)
    data = await fetch(randYuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/Yuri.jpeg', data)
    res.sendFile(bla + '/tmp/Yuri.jpeg')
 
})


app.get('/random/cecan', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const cecan = JSON.parse(fs.readFileSync(bla + '/data/cecan.json'));
    const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
    data = await fetch(randCecan).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/cecan.jpeg', data)
    res.sendFile(bla + '/tmp/cecan.jpeg');
 
})


app.get('/wallpaper/aesthetic', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Aesthetic = JSON.parse(fs.readFileSync(bla + '/data/aesthetic.json'));
    const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
    data = await fetch(randAesthetic).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/aesthetic.jpeg', data)
    res.sendFile(bla + '/tmp/aesthetic.jpeg');
 
})


app.get('/random/sagiri', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sagiri.jpeg', data)
    res.sendFile(bla + '/tmp/sagiri.jpeg')
 
})

app.get('/random/shota', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const Shota = JSON.parse(fs.readFileSync(bla + '/data/shota.json'));
    const randShota = Shota[Math.floor(Math.random() * Shota.length)];
    data = await fetch(randShota).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/shota.jpeg', data)
    res.sendFile(bla + '/tmp/shota.jpeg');
 
})

app.get('/random/nsfwloli', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   

    const lol = JSON.parse(fs.readFileSync(bla + '/data/nsfwloli.json'));
    const randlol = lol[Math.floor(Math.random() * lol.length)];
    data = await fetch(randlol).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/lol.jpeg', data)
    res.sendFile(bla + '/tmp/lol.jpeg');
 
})

app.get('/random/hinata', async (req, res, next) => {
      apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	   
    const Hinata = JSON.parse(fs.readFileSync(bla + '/data/hinata.json'));
    const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
    data = await fetch(randHin).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/Hinata.jpeg', data)
    res.sendFile(bla + '/tmp/Hinata.jpeg');
 
})

 app.get('/api/soundcloud', async(req, res, next) => {
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
 url = req.query.url
if (!url) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: url"})
soundl(url).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/api/manga', async(req, res, next) => {
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
manga(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/api/hentaistube', async(req, res, next) => {
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
hentaistube(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})
 
 app.get('/api/animes', async(req, res, next) => {
 apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = req.query.q
if (!q) return res.json({ status : false, criador : `@TIOMODZ`, mensagem : "Coloque o parametro: q"})
anime(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})


app.get('/api/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/api/fbdown', async(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})

apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/photooxy', async(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro text??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
photooxy(url, text)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wallpaperanime', async(req,res) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
q = 'Wallpaper anime'
gis(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);

fetch('https://mnazria.herokuapp.com/api/screenshotweb?url='+url, async(error, results) => {
if(error){
console.log(error)
res.json({
status:false,
msg:'Não encontrei o site'
})
} else { 
resultado = results
bala = await getBuffer(resultado.gambar)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/avatar', async(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})


app.get('/api/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})


bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq1',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${textoo}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq2',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${textoo}&text.0.outline.blur=63`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq3',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${textoo}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq4',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq5',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${textoo}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq6',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${textoo}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=Dark Domina bb%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0" width="718" height="1009" alt="" />`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq7',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${textoo}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light20Two&text.0.outline.blur=15`)
res.type('jpg')
res.send(bala)
})

app.get('/api/plaq8',async (req,res,next) => {
var textoo = req.query.texto


bala = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${textoo}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
res.type('jpg')
res.send(bala)
})

app.get('/api/github', async(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Vitinho ツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'}) 
})
})

app.get('/api/wikipedia', async(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axiosapp.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
res.json({
status:true,
criador:'@TIOMODZ',
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


app.get('/youtube/search', async(req,res) => {
query = req.query.query
if(!query)return res.json({status:false,msg:'Cade o parametro query??'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
ytSearch(query)
.then(e => {
res.json({
status:true,
criador:'@@TIOMODZ',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playmix', async(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
search(q) 
.then(e => {
res.json({
status:true,
criador:'@@TIOMODZ',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

   
app.get('/youtube/play', async (req, res, next) =>  {
query = req.query.query
if(!query)return res.json({status:false, resultado:'Cade o parametro query??'  }) 
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
try {
zan = await yts(query)
res.json({
status: true,
creator: `@TIOMODZ`,
Title: zan.all[0].title,
Thumb: zan.all[0].image,
Description : zan.all[0].description,
Duration: zan.all[0].timestamp,
Viewer: zan.all[0].views, 
Author : zan.all[0].author.name,
Channel : zan.all[0].author.name,
Link: zan.all[0].url,
})
} catch (err) {
console.log(err)
};
})


app.get('/youtube/mp3', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({status:false, resultado:'Cade o parametro url??'  }) 
try {
const down = await youtubedl(url);
const audio = await down.audio['128kbps'].download();
data = await fetch(audio).then(v => v.buffer())   
await fs.writeFileSync(bla+'/tmp/asupan.mp4', data)
res.sendFile(bla+'/tmp/asupan.mp4')
} catch (err) {
console.log(err)
};
});

app.get('/youtube/mp4', async (req, res, next) => {
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
url = req.query.url
if(!url)return res.json({status:false, resultado:'Cade o parametro url??'  }) 
try {
const down = await youtubedl(url);
const video = await down.video['360p'].download();
data = await fetch(video).then(v => v.buffer())   
await fs.writeFileSync(bla+'/tmp/asupan.mp4', data)
res.sendFile(bla+'/tmp/asupan.mp4')
} catch (err) {
console.log(err)
};
});

app.get('/api/mememp3', async (req, res, next) => {
var query = req.query.query;
if(!query)return res.json({status:false,message:'- Cadê o parâmetro query?'})
apikey = req.query.apikey
if(key[key.map(i => i?.apikey)?.indexOf(apikey)]?.request <= 0) return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
if(!apikey)return res.json({resultado:'Cade o parametro apikey?'})
if(!key.map(i => i.apikey)?.includes(apikey))return res.sendFile(path.join(__dirname, "./public/", "limited.html"))
await listkeys(apikey, req);
	if(key.map(i => i.apikey)?.includes(apikey)){    
    hasil = `https://supraz.onrender.com/api/audiomeme?quero=${query}&apikey=lhannabo`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla+'/tmp/asupan.mp4', data)
        res.sendFile(bla+'/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


function muptime(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return 'Horas: ' + pad(hours) + ' : ' + 'Minutos: ' + pad(minutes) + ' : ' + 'Segundos: ' +  pad(seconds)
}

app.get('/runtime', async (req, res, next) => {
console.log(color(' ├', 'white'), color('[ STATUS ]', 'red'), color(ping(), 'orange'))
var hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss");
var data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");
apikey = req.query.apikey;
var ITC = key.map(i => i?.apikey)?.indexOf(apikey);
if(ITC < 0) {
return res.json({key:'COLOQUE SUA APIKEY PARA VER O STATUS DA  API!!'})
} else {
const totalreq = JSON.parse(fs.readFileSync('./lib/secret/requests.json'))[0].totalreq;
var old = performance.now();
var neww = performance.now();
var ram = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`;
var json = await (await fetch('https://api.ipify.org/?format=json')).json();
status = {
    status: 'ONLINE!',
    uso_ram: ram,
    local: os.hostname,
    ip: json.ip,
    hora: hora,
    data: data,
    speed: ping(),
	suakey: key[ITC]?.request,
    keys: key.length,
    online: muptime(process.uptime()),
    request: totalreq,

        info:{       
            owner: 'VNCSCODE',
            whatsapp: 'https://wa.me/5573999197974'
        }
    }
res.json(status)
}});


////FUNÇAO DE PAGINA Q NAO TEM FUNÇÃO SOBRE ELA

app.get('*', function(req, res) {
res.status(404).json({
http_code: 404,
aviso: '❌️ PÁGINA NÃO ENCONTRADA! ❌️'
})
})

//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {})

console.log(banner.string)

let xanax = require.resolve(__filename)
fs.watchFile(xanax, () => {
fs.unwatchFile(xanax)
console.log(`ATUALIZANDO JRPC DA API`)
process.exit()
})


module.exports = router;



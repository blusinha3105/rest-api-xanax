"use strict";

const axios = require("axios");
const cheerio = require("cheerio");
const request = require('request');
const Formdata = require('form-data');
const fetch = require('node-fetch')
const fs = require("fs")
const knights = require("knights-canvas");

/* "knights-canvas": "^1.3.7-a",
    "axios": "^0.21.1",
    "cheerio": "^1.0.0-rc.5",
    "request": "^2.88.2",
    "form-data": "^3.0.0",
    "node-fetch": "^2.6.1",
    "fs": "^0.0.1-security",  */

router.get('/canvas/bemvindo', async (req, res, next) => {
 var cdapikey = req.query.apikey;
nome = req.query.nome,
nomegp = req.query.nomegp,
fotogp = req.query.fotogp,
membros = req.query.membros,
perfil = req.query.perfil,
fundo = req.query.fundo
	if(!cdapikey) return res.json(resposta.semkey)
  	if(cdapikey !== key) return res.sendFile(keyinvalida)
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})        
var image = await new knights.Welcome()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment(); 
  data = image.toBuffer();
  await fs.writeFileSync('./bemvindo2.png', data)
  res.sendFile('./bemvindo2.png').catch(e => { res.sendFile(error)})})
  
router.get('/canvas/adeus', async (req, res, next) => {
var cdapikey = req.query.apikey;
 nome = req.query.nome,
 nomegp = req.query.nomegp,
 fotogp = req.query.fotogp,
 membros = req.query.membros,
 perfil = req.query.perfil,
 fundo = req.query.fundo
	if(!cdapikey) return res.json(resposta.semkey)
  	if(cdapikey !== key) return res.sendFile(keyinvalida)
    if (!nome) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${creator}`, message : "coloque o parametrô fundo"})        
   var image = await new knights.Goodbye()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment(); 
  data = image.toBuffer();
  await fs.writeFileSync('./adeus2.png', data)
  res.sendFile('./adeus2.png').catch(e => { res.sendFile(error)})})
  
    router.get('/canvas/levelup', async (req, res, next) => {
    var cdapikey = req.query.apikey;
    foto = req.query.foto,
   	if(!cdapikey) return res.json(resposta.semkey)
   	if(cdapikey !== key) return res.sendFile(keyinvalida)
    if (!foto) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô foto"})
    var image = await new knights.Up()
    .setAvatar(`${foto}`) 
    .toAttachment();
     data = image.toBuffer();
     await fs.writeFileSync('./levelup.png', data)
     res.sendFile('./levelup.png').catch(e => { res.sendFile(error)})})
     
    router.get('/canvas/rank', async (req, res, next) => {
    var cdapikey = req.query.apikey;
    nome = req.query.nome,
    foto = req.query.foto,
    fundo = req.query.fundo,
    xp = req.query.xp,
    reqxp = req.query.reqxp,
    nivel = req.query.nivel,
    ftrank = req.query.ftrank,
   	if(!cdapikey) return res.json(resposta.semkey)
   	if(cdapikey !== key) return res.sendFile(keyinvalida)
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})
    if (!xp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô xp"})
    if (!reqxp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô reqxp"})
    if (!nivel) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nivel"})
    if (!ftrank) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô ftrank"})    
    var image = await new knights.Rank()
    .setAvatar(`${foto}`) 
    .setUsername(`${nome}`) 
    .setBg(`${fundo}`)
    .setNeedxp(`${xp}`) 
    .setCurrxp(`${reqxp}`) 
    .setLevel(`${nivel}`) 
    .setRank(`${fotorank}`) 
    .toAttachment();  
    data = image.toBuffer();
     await fs.writeFileSync('./rank.png', data)
     res.sendFile('./rank.png').catch(e => { res.sendFile(error)})})
  
     function letra(letra){ return new 
     Promise(async(resolve, reject) => {
   		axios.get('https://www.musixmatch.com/search/' + letra).then(async({ data }) => {
   		const $ = cheerio.load(data)
   		const postagem = {};
   		let limk = 'https://www.musixmatch.com'
   		const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
	  		await axios.get(link).then(({ data }) => {
		   const $$ = cheerio.load(data)
		  	postagem.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
		   postagem.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()})})
 	   resolve(postagem)}).catch(reject)})}

function xnxxdl(link_video) { return new Promise((resolve, reject) => {
fetch(link_video, {method: 'get'}).then(sexokk => sexokk.text()).then(sexokk => {var sayo = cheerio.load(sexokk, {xmlMode: false});resolve({
criador: "breno/sayo",
resultado: {título: sayo('meta[property="og:title"]').attr('content'),duração: sayo('meta[property="og:duration"]').attr('content'),img: sayo('meta[property="og:image"]').attr('content'),tipo_vd: sayo('meta[property="og:video:type"]').attr('content'),vd_altura: sayo('meta[property="og:video:width"]').attr('content'),vd_largura: sayo('meta[property="og:video:height"]').attr('content'),informações: sayo('span.metadata').text(),resultado2: {qualidade_baixa: (sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],qualidade_alta: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],qualidade_HLS: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],capa: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],capa69: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],capa_slide: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],capa_slide_grande: sayo('#video-player-bg > script:nth-child(6)').html().match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]}}})}).catch(err => reject({code: 503, status: false, result: err }))})}

//WIKIPEDIA
var wiki = async (query) => {
var res = await axios.get(`https://pt.m.wikipedia.org/wiki/${query}`)
var $ = cheerio.load(res.data)
var postagem = []
var titulo = $('#mf-section-0').find('p').text()
var capa = $('#mf-section-0').find('div > div > a > img').attr('src')
capaofc = capa ? capa : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
img = 'https:' + capaofc
var título = $('h1#section_0').text()
postagem.push({ titulo, img })
return postagem
}


//FF
function ff(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.ffesportsbr.com.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("article.home-post.col-xs-12.col-sm-12.col-md-4.col-lg-4.py-3").each((_, say) => {
    var titulo = $(say).find("h2").text().trim();
    var keywords = $(say).find("ul").text().trim();
    var publicado = $(say).find("span").text().trim();
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var resultado = {
      titulo: titulo,
      keywords: keywords,
      publicado: publicado,
      img: img,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//INSTAGRAM STALK

function igstalk(nome) {
	return new Promise(async (resolve, reject) => {
		let {
			data
		} = await axios('https://www.instagram.com/' + nome + '/?__a=1', {
			'method': 'GET',
			'headers': {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
				'cookie': 'isi sendiri cokie igeh'
			}
		})
		let user = data.graphql.user
		let json = {
			criador: '"_breno.exe_',
			status: 'online',
			code: 200,
			nome: user.username,
			nome_todo: user.full_name,
			verificado: user.is_verified,
			videos: user.highlight_reel_count,
			seguidores: user.edge_followed_by.count,
			seguindo: user.edge_follow.count,
			conta_business: user.is_business_account,
			conta_profissional: user.is_professional_account,
			categoria: user.category_name,
			capa: user.profile_pic_url_hd,
			bio: user.biography,
			info_conta: data.seo_category_infos
		}
		resolve(json)
	})
}

//SEX.NET
function hentaikk(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://thehentaigif.com/?s=${nome}&s_type=all`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.image-wrapper").each((_, say) => {
    var titulo = $(say).find("div.image-post-title.card-title.title-overlay").text().trim();
    var img = $(say).find("img").attr('src');
    var gif = $(say).find("img").attr('data-src');    
    var resultado = {
      titulo: titulo,
      img: img,
      gif: gif
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}


//GRUPO
function gpsrc(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://zaplinksbrasil.com.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.grupo").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var conteudo = $(say).find("div.listaCategoria").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      conteudo: conteudo,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

function nick(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://nickfinder.com/${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.postbox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("time.duration-top").text().trim();
    var qualidade = $(say).find("b.hd-top").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

function soundl(link) {
return new Promise((resolve, reject) => {
		const opções = {
			method: 'POST',
			url: "https://www.klickaud.co/download.php",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				'value': link,
				'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
			}
		};
		request(opções, async function(error, response, body) {
			console.log(body)
			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			resolve({
				titulo: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
				total_downloads: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
				capa: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link_dl: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			});
		});
	})
}

//PORNHUB
function pornhub(q) {
return new Promise((resolve, reject) => {
  axios.get(`https://pt.pornhub.com/video/search?search=${q}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("li.pcVideoListItem.js-pop.videoblock.videoBox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("var.duration").text().trim();
    var qualidade = $(say).find("span.hd-thumbnail").text().trim();
    var autor = $(say).find("div.usernameWrap").text().trim();    
    var visualizações = $(say).find("span.views").text().trim();    
    var data_upload = $(say).find("var.added").text().trim();        
    var hype = $(say).find("div.value").text().trim();    
    var link2 = `https://pt.pornhub.com${link}`
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      autor: autor,
      visualizações: visualizações,
      data_upload: data_upload,
      hype: hype,
      link: link2
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//XVIDEOS
function xvideos(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://xvideosporno.blog.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.postbox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("time.duration-top").text().trim();
    var qualidade = $(say).find("b.hd-top").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//UPTODOWN
function uptodown(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://br.uptodown.com/android/search/${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.item").each((_, say) => {
    var titulo = $(say).find("div.name").text().trim();
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img.app_card_img.lazyload").attr('data-src');
    var descrição = $(say).find("div.description").text().trim();
    var resultado = {
      titulo: titulo,
      link: link,
      icone: img,
      descrição: descrição
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//GRUPOS WHATSAPP
function gpwhatsapp() {
return new Promise((resolve, reject) => {
  axios.get(`https://gruposwhats.app/`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.col-12.col-md-6.col-lg-4.mb-4.col-group").each((_, say) => {
    var nome = $(say).find("h5.card-title").text().trim();
    var descrição = $(say).find("p.card-text").text().trim();
    var link = $(say).find("a.btn.btn-success.btn-block.stretched-link.font-weight-bold").attr('href');
    var img = $(say).find("img.card-img-top.lazy").attr('data-src');
    var resultado = {
      nome: nome,
      link: link,
      descrição: descrição,
      img: img
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}


//HENTAIS TUBE
function hentaistube(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.hentaistube.com/buscar/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.epiItem").each((_, say) => {
    var titulo = $(say).find("div.epiItemNome").text().trim();
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var resultado = {
      titulo: titulo,
      link: link,
      img: img
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}


//NERDING
function nerding(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.nerding.com.br/search?q=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.col-sm-6.col-xs-12.item-boxed-cnt").each((_, say) => {
    var titulo = $(say).find("h3.title").text().trim();
    var descrição = $(say).find("p.summary").text().trim();
    var imagem = $(say).find("img.lazyload.img-responsive").attr('src');
    var link = $(say).find("a.pull-right.read-more").attr('href');
    var review = $(say).find("span.label-post-category").text().trim();
//    var autor = $(say).find("p.post-meta-inner").text().trim();
    var resultado = {
      titulo: titulo,
      descrição: descrição,
      imagem: imagem,
      review: review,      
      link: link
//      autor: autor
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

//APKMODHACKER
function apkmodhacker(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmodhacker.com/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.post-inner.post-hover").each((_, say) => {
    var nome = $(say).find("h2.post-title.entry-title").text().trim();
    var descrição = $(say).find("div.entry.excerpt.entry-summary").text().trim();
    var imagem = $(say).find("img.attachment-thumb-medium.size-thumb-medium.wp-post-image").attr('src');
    var link = $(say).find("a").attr('href');
    var categoria = $(say).find("p.post-category").text().trim();
    var horario_upload = $(say).find("time.published.updated").attr('datetime');   
    var resultado = {
      nome: nome,
      descrição: descrição,
      categoria: categoria,
      imagem: imagem,
      link: link,
      horario_upload: horario_upload
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

module.exports = { gpwhatsapp, hentaistube, nerding, apkmodhacker, xvideos, uptodown, letra, xnxxdl, wiki, ff, igstalk, hentaikk }
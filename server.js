'use strict'
var express = require('express');
var fs      = require('fs');
var request = require('request');
var $ = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  let tickers = ["PSG"]//,"TRXC","RRMS","CVRS","HHS","FPP","GEN"]
  tickers.forEach((ticker) =>{
    let url = `https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?AuthnContext=prospect&prospectnavyear=2011&reinitiate-handshake=0&ChallengeUrl=https://idp.etrade.com/idp/SSO.saml2&env=PRD&symbol=${ticker}&rsO=new&country=US`;
    console.log(url)
    request(url, function(error, response, html){
      if(!error) {
        console.log(response)
        // var parsedHTML = $.load(html).html()
        // console.log(parsedHTML)
        // parsedHTML('div').map(function(i, div) {
        //   console.log(div)
        //})

      }
    })
    
      // if(!error) {
      //   var $ = cheerio.load(html);
      //   console.log($)
      //   $('.lh18').filter(function () {
      //     var data = $(this);
      //     console.log(data)
      //     // title = data.children().first().text().trim();
      //     // release = data.children().last().children().last().text().trim();
      //     //
      //     // json.title = title;
      //     // json.release = release;
      //   })
      // }
    //
    //   //   var title, release, rating;
    //   //   var json = { title : "", release : "", rating : ""};
    //   //
    //   //   $('.title_wrapper').filter(function(){
    //   //     var data = $(this);
    //   //     title = data.children().first().text().trim();
    //   //     release = data.children().last().children().last().text().trim();
    //   //
    //   //     json.title = title;
    //   //     json.release = release;
    //   //   })
    //   //
    //   //   $('.ratingValue').filter(function(){
    //   //     var data = $(this);
    //   //     rating = data.text().trim();
    //   //
    //   //     json.rating = rating;
    //   //   })
    //   // }
    //   //
    //   // fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    //   //   console.log('File successfully written! - Check your project directory for the output.json file');
    //   // })
    //     res.end()
    //   //res.send('Check your console!')
    // })
  })
})

app.listen('8081')
console.log('Magic happens on port 8081');
module.exports = app;

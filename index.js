const express = require('express');
const app = express();
var path  = require("path");
const bodyParser = require("body-parser")
const fs = require('fs') // gebruik je om bestanden te lezen en te schrijven

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



// Todo:
// - Functie hebben die we aanroepen die iets op gaat slaan
// - Informatie veranderen?
// - Informatie opslaan

app.get('/presentaties', function(req, res){
  //const rawData = fs.readFileSync('presentaties.json')
  //const presentatie = JSON.parse(rawData);

/*  const presentatie = {
    titel: 'Test',
    text: 'dit wordt tekst',
    text1: "dit wordt tekst1",
    afbeelding_url: 'http://factuur.tips/wp-content/uploads/Factuur-Voorbeeld-Hovenier-en-Tuinman.jpg',
    afbeelding_width: '10',
    color: "black",
    backgroundColor: "blue",
  }
*/

  return res.send(presentatie)
})

app.post('/presentaties', function(req, res){
  const rawData = fs.readFileSync('presentaties.json');
  const data = JSON.parse(rawData);
  const newPresentatie = {
    color: data.color,
    backgroundColor: data.backgroundColor,
    titel: req.body.titel,
    text: req.body.text,
    text1: req.body.text1,
    width: req.body.width,
    afbeelding_url: req.body.afbeelding_url
  }

  fs.writeFileSync('presentaties.json', JSON.stringify(newPresentatie));
  //res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
  res.redirect('/bewerken');
})

app.post('/presentatieKleuren', function(req, res){
  const rawData = fs.readFileSync('presentaties.json');
  const data = JSON.parse(rawData);
  const newPresentatie = {
    color: req.body.color,
    backgroundColor: req.body.backgroundColor,
    titel: data.titel,
    text: data.text,
    text1: data.text1,
    width: data.width,
    afbeelding_url: data.afbeelding_url
  }

  fs.writeFileSync('presentaties.json', JSON.stringify(newPresentatie));
  //res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
  res.redirect('/bewerken');
})

app.get('/login', function(req,res){
  return res.redirect('/');
})

app.post('/NieuwePagina', function(req,res) {
  const rawData = fs.readFileSync('comments.json');
  const data = JSON.parse(rawData);
  const newPresentatie = {
    username: document.localStorage.getItem('username'),
    titel: "Titel",
    tekst: "Koptekst",
    tekst1: "Tekst"
  }
  data.comments.push(newPresentatie)
  fs.writeFileSync('pages.json', JSON.stringify(data));
})

app.post('/login', function(req,res){
// ww en geb naam uit de request
// is er een gebruiker met die gebruikersnaam? en heeft hij ook dit wachtwoord?
// als ja => redirect naar /pages
// als nee => geef een error (403)
  const rawData = fs.readFileSync('accounts.json')
  const data = JSON.parse(rawData);
  const username = req.body.username
  const password = req.body.password
  const account = data.accounts.find(function(account){
    return username === account.username
  })
  if (account === undefined || password !== account.password) {
    res.status(403)
    return res.send('Wachtwoord of gebruikersnaam is onjuist<br><a href="/"><button>Terug</button></a>')
  } else {
    res.redirect('/pages')
    localStorage.setItem('username', username)
  }
  console.log(account)
})

app.post('/comments', function(req,res){
  const rawData = fs.readFileSync('comments.json');
  const data = JSON.parse(rawData);
  const newComment = {
    name: req.body.name,
    email: req.body.email,
    rate: req.body.cijfer,
    comment: req.body.comment
  }
  data.comments.unshift(newComment);
  fs.writeFileSync('comments.json', JSON.stringify(data));
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/index.html'));
  res.redirect('/');
});

app.post('/welkom', function(req,res){
  const accountRawData = fs.readFileSync('accounts.json');
  const accountData = JSON.parse(accountRawData);
  const newAccount =  {
    username: req.body.newUsername,
    password: req.body.newPassword
  }
  accountData.accounts.push(newAccount);
  fs.writeFileSync('accounts.json', JSON.stringify(accountData));
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
  res.redirect('/pages')
})

app.get('/welkom', function(req,res){
  res.redirect('/')
});
app.get('/pages', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/pages.html');
  //res.json(JSON.parse(fs.readFileSync('pages.json')))
});

app.get('/comments', function(req,res){
  const rawData = fs.readFileSync('comments.json')
  const comments = JSON.parse(rawData);
  res.json(comments)
})

app.get('/help/afbeelding', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/handleidingAfbeelding.html');
});
app.get('/afbInset', function(req,res){
  res.sendFile(__dirname + '/zelfPresentatieMaken/afbInset.png');
})

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/index.html'));
});

app.get('/bewerken',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/zelf_presentatie_maken.html'));
});

app.get('/script', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/script.js'))
});

app.get('/preview',function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/watch.html'));
});

app.get('/help', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/handleiding.html'));
});

app.get('/script1', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/script1.js'));
});

app.get('/homescript', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/homescript.js'));
});

app.get('/style', function(req,res) {
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/style.css'))
})

app.get('/nieuwepresentatie', function(req,res){
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/nieuwepresentatie.html'))
})

app.get('/pagesjs', function(req,res) {
  res.sendFile(path.join(__dirname + '/zelfPresentatieMaken/pages.js'))
})

app.listen(3000);

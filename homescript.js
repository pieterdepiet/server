function rate1() {
  document.getElementById("rate1").className = "fa fa-star checked"
  document.getElementById("rate2").className = "fa fa-star"
  document.getElementById("rate3").className = "fa fa-star"
  document.getElementById("rate4").className = "fa fa-star"
  document.getElementById("rate5").className = "fa fa-star"
  document.getElementById("rate").value = 1
}

function rate2() {
  document.getElementById("rate1").className = "fa fa-star checked"
  document.getElementById("rate2").className = "fa fa-star checked"
  document.getElementById("rate3").className = "fa fa-star"
  document.getElementById("rate4").className = "fa fa-star"
  document.getElementById("rate5").className = "fa fa-star"
  document.getElementById("rate").value = 2
}

function rate3() {
  document.getElementById("rate1").className = "fa fa-star checked"
  document.getElementById("rate2").className = "fa fa-star checked"
  document.getElementById("rate3").className = "fa fa-star checked"
  document.getElementById("rate4").className = "fa fa-star"
  document.getElementById("rate5").className = "fa fa-star"
  document.getElementById("rate").value = 3
}

function rate4() {
  document.getElementById("rate1").className = "fa fa-star checked"
  document.getElementById("rate2").className = "fa fa-star checked"
  document.getElementById("rate3").className = "fa fa-star checked"
  document.getElementById("rate4").className = "fa fa-star checked"
  document.getElementById("rate5").className = "fa fa-star"
  document.getElementById("rate").value = 4
}

function rate5() {
  document.getElementById("rate1").className = "fa fa-star checked"
  document.getElementById("rate2").className = "fa fa-star checked"
  document.getElementById("rate3").className = "fa fa-star checked"
  document.getElementById("rate4").className = "fa fa-star checked"
  document.getElementById("rate5").className = "fa fa-star checked"
  document.getElementById("rate").value = 5
}

if (localStorage.getItem("geweest?") === "ja") {
  document.getElementById("handleiding").innerHTML = "Toch nog even vergeten?<br>Geen probleem. Klik voor de handleiding";
  document.getElementById("title").innerHTML = "Welkom terug.";
  document.getElementById("button1").innerHTML = "Ga verder waar u gebleven was";
  document.getElementById("p").innerHTML = "";
} else {
  localStorage.setItem("geweest?", "ja");
}

if (localStorage.getItem('username') !== null) {
  document.getElementsByClassName('login').innerHTML = "<button onclick='account()'>" + localStorage.getItem('account') + "</button>"
}
function login() {
  document.getElementById("LogIn").style.display = "inline-block";
  document.getElementById("SingUp").style.display = "none";
}

function singUp() {
  document.getElementById("SingUp").style.display = "inline-block";
  document.getElementById("LogIn").style.display = "none";
}

fetch('/comments')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    let newCommentHTML = ''

    myJson.comments.forEach(function(comment){
      newCommentHTML = newCommentHTML + `
        <a title="Mail naar ${comment.name} met het mailadres ${comment.email}" href="mailto:${comment.email}"><h4 class="commentname">${comment.name}</h4></a>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star a${comment.rate}"></span>
        <span class="fa fa-star b${comment.rate}"></span>
        <span class="fa fa-star c${comment.rate}"></span>
        <span class="fa fa-star d${comment.rate}"></span>
        <p class="commentcomment">${comment.comment}</p>
      `
    })

    document.getElementById("allComments").innerHTML = newCommentHTML
  });

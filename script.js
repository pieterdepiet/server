function bewerkBoven() {
  if (localStorage.getItem("boven") === "tekst") {
    document.getElementById("boven").readOnly = false;
    localStorage.setItem("boven", "input")
  } else {
      document.getElementById("boven").readOnly = true;
      localStorage.setItem("boven", "tekst")
  }
}

function bewerkText() {
  if (localStorage.getItem("tekst") === "tekst") {
    document.getElementById("tekst").readOnly = false;
    localStorage.setItem("tekst", "input")
  } else {
    document.getElementById("tekst").readOnly = true;
    localStorage.setItem("tekst", "tekst")
  }
}

function afbset() {
    if (document.getElementById("afbeelding_url").value === "") {
      document.getElementById("afbe").src = "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1";
      document.getElementById("afbe").style.width = document.getElementById("width").value + "%";
    } else {
      document.getElementById("afbe").src = document.getElementById("afbeelding_url").value;
      document.getElementById("afbe").style.width = document.getElementById("width").value + "%";
    }
}

function verandertekst() {
  document.getElementById("achtergrond1").style.color = document.getElementById("tekstkleur").value;
  document.getElementById("boven").style.color = document.getElementById("tekstkleur").value
  document.getElementById("tekst").style.color = document.getElementById("tekstkleur").value
}

function veranderAchtergrond() {
  document.getElementById("achtergrond1").style.backgroundColor = document.getElementById("achtergrondkleur").value
  document.getElementById("boven").style.backgroundColor = document.getElementById("achtergrondkleur").value
  document.getElementById("tekst").style.backgroundColor = document.getElementById("achtergrondkleur").value
}

function displaykleur() {
  document.getElementById("kleuren").style.display = "inherit"
  document.getElementById("kleurenbutton").style.display = "none"
}
function displaykleur1() {
  document.getElementById("kleuren").style.display = "none"
  document.getElementById("kleurenbutton").style.display = "inherit"
}

function save() {
  const form = new FormData(document.getElementById("form"))
  const data = {
    text: form.get('text'),
    text1: form.get('text1'),
    titel: form.get('titel'),
    afbeelding_url: form.get('afbeelding_url'),
    width: form.get('width'),
    presentatietitel: localStorage.getItem("presentatietitel")
  }

  const response = fetch('https://zelfpresentatiemaken.firebaseio.com/gebruikers/'+'hananja'+'/presentaties/'+localStorage.getItem('presentatie')+'.json', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
  console.log(response);
}

function save1() {
  document.getElementById("kleurenform").submit()
}

//Pagina klaarmaken voor gebruik
async function start() {
  if (localStorage.getItem("nieuw") == "ja") {
    console.log("nieuwe Pagina");
  }else{
    const data = await fetch("https://zelfpresentatiemaken.firebaseio.com/gebruikers/"+'hananja'+"/presentaties/"+localStorage.getItem('presentatie')+".json")
    const presentatie = await data.json()
    //Teksten
    document.getElementById("titel").innerHTML = presentatie.titel;
    document.getElementById("boven").innerHTML = presentatie.text;
    document.getElementById("tekst").innerHTML = presentatie.text1;
    document.getElementById("titel1").value = presentatie.titel
    //Kleuren
    document.getElementById("achtergrond1").style.backgroundColor = presentatie.backgroundColor;
    document.getElementById("achtergrond1").style.color = presentatie.color;
    document.getElementById("boven").style.backgroundColor = presentatie.backgroundColor
    document.getElementById("tekst").style.backgroundColor = presentatie.backgroundColor
    document.getElementById("boven").style.color = presentatie.color
    document.getElementById("tekst").style.color = presentatie.color
    document.getElementById("tekstkleur").value = presentatie.color;
    document.getElementById("achtergrondkleur").value = presentatie.backgroundColor;
    //Afbeelding
    document.getElementById("width").value = presentatie.width;
    document.getElementById("afbeelding_url").value = presentatie.afbeelding_url;
    document.getElementById("afbe").src = presentatie.afbeelding_url;
    document.getElementById("afbe").style.width = presentatie.width + "%";
    localStorage.setItem("titel", "tekst")
  }
}
start()

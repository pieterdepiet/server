/* document.getElementById("titelwatch").innerHTML = localStorage.getItem("titel");
document.getElementById("tekstwatch").innerHTML = localStorage.getItem("text");
document.getElementById("tekst1watch").innerHTML = localStorage.getItem("text1");
document.getElementById("achtergrond2").style.backgroundColor = localStorage.getItem("kleur");
document.getElementById("achtergrond2").style.color = localStorage.getItem("tekstkleur");
if (localStorage.getItem("afbeelding_url")==="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1"){
  document.getElementById("afbee").src = "";
} else {
  document.getElementById("afbee").src = localStorage.getItem("afbeelding_url");
}*/

// TODO:
// - Meerdere dias per presentatie
// - Data
//
//  - Gebruiker (meerdere)
//    - gebruikersnaam
//    - wachtwoord
//    - email
//    - Presentaties (meerdere)
//      - Titel
//      - Dias (meerdere)
//        - Titel
//        - Text

async function laadPresentatie(){
  const data = await fetch("https://zelfpresentatiemaken.firebaseio.com/gebruikers.json", {
  //   mode:"no-cors"
  })
  console.log(data);
  const presentatie = await data.json();
  console.log(presentatie);
}
laadPresentatie()

/*async function laadPresentatie(){
  const data = await fetch('/presentaties')
  const presentatie = await data.json()
  console.log(presentatie)

  document.getElementById("titelwatch").innerHTML = presentatie.titel
  document.getElementById("tekstwatch").value = presentatie.text
  document.getElementById("tekst1watch").value = presentatie.text1
  document.getElementById("achtergrond2").style.backgroundColor = presentatie.backgroundColor
  document.getElementById("achtergrond2").style.color = presentatie.color
  if (presentatie.afbeelding_url ==="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.freepik.com%2Ficonen-gratis%2Fafbeelding-invoegen-icoon_318-33972.jpg%3Fsize%3D338%26ext%3Djpg&f=1"){
    document.getElementById("afbee").src = "";
  } else {
    document.getElementById("afbee").src = presentatie.afbeelding_url;
  }
  document.getElementById("afbee").style.width = presentatie.width + '%'

}
laadPresentatie()
*/

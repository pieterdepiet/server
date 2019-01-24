async function nieuwepresentatie(){
  const geting = await fetch("https://zelfpresentatiemaken.firebaseio.com/gebruikers/hananja/presentaties.json")
  const data = await geting.json()
  localStorage.setItem("presentatietitel", document.getElementById("titel").value)
  console.log(data.length);
  localStorage.setItem("presentatie", data.length)
  localStorage.setItem("nieuw", "ja")
  window.open("/bewerken", "_self")
}

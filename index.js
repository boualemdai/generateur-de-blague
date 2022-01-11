/*https://api.blablagues.net/?rub=blagues
https://randomuser.me/api/?results=24
https://www.themealdb.com/api/json/v1/1/search.php?s=tomato*/
const header = document.getElementById("header");
const content = document.getElementById("content");
function gererUneBlage(){
fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    header.textContent = data.data.content.text_head;
    content.textContent =
      data.data.content.text !== ""
        ? data.data.content.text
        : data.data.content.text_hidden;
    });
}
gererUneBlage()
window.addEventListener("click",gererUneBlage)
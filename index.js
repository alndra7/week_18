document.addEventListener("DOMContentLoaded", function(){
    let heroes = JSON.parse(json);
    let heroesContent = "";
    for (let hero of heroes) {
        
        heroesContent += `<div class="hero">
        <h2> ${hero.name}</h2>
        Ваша оценка:<br>
        <div class="rating"> 
        <input type="radio" name="${hero.name}" value="1">
        <input type="radio" name="${hero.name}" value="2">
        <input type="radio" name="${hero.name}" value="3">
        <input type="radio" name="${hero.name}" value="4">
        <input type="radio" name="${hero.name}" value="5">
        </div>
        <div>Вселенная: ${hero.universe}</div>
        <div>Род занятий: ${hero.occupation}</div>
        <div>Альтер-эго ${hero.alterego}</div>
        <div>Друзья: ${hero.friends}</div>
        <div>Суперсилы: ${hero.superpowers}</div>
        <img src="${hero.url}" alt="hero image" class="img">
        <div>Информация: ${hero.info}</div>
        </div>`
    }
    document.getElementById("heroes-container").innerHTML = heroesContent;
    let ratingList = document.querySelectorAll('.rating')

    ratingList.forEach((rating) => {

        rating.onclick = function(e) {
            let result = e.target.value;
            rateName = e.target.name;
            console.log (result);
            console.log (e.target.name);
            localStorage.setItem(rateName, result);
            }  
    })
});

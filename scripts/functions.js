const card=document.getElementById('cards');
let htmlEvents="";
const currentDate= "2022-01-01";
const txtInput=document.getElementById('search');
const txtButton=document.getElementById('buttonSearch');
const categoriesContainer=document.getElementById('categories');
const categoriesChecked=document.getElementsByClassName('category');
const theOnly=document.getElementById('theonlycategory');
const elOtroCheckbox=document.getElementById('elotrocheckbox');

let checkbox=[];


function createCard(event)
{
    htmlEvents+=`<div class="card" style="width: 16rem;height: 400px;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p class="card-text">${event.description}</p>
    </div>
    <div class="card-body">
    <span class="cards-span">Price $${event.price}</span>
    <a href="details.html?id=${event._id}" class="btn btn-primary">See more...</a>
    </div>
</div>`;
    
card.innerHTML=htmlEvents;
}

function createAllCards()
{
for(let event of data.events)
{
createCard(event);
}
}

function deleteCards()
{
    htmlEvents="";
    card.innerHTML=htmlEvents;
}


txtInput.addEventListener("keyup", e =>
{

   // data.events.forEach(event => event.name.toLowerCase().includes(e.target.value.toLowerCase())? createCard(card,event): console.log("perra"))
    data.events.forEach(event => {if(event.name.toLowerCase().includes(e.target.value.toLowerCase()))
    {
        deleteCards();
        createCard(event);
        if(txtInput.value==="")
        {
            createAllCards();
        }
    }});

})



function categoriesfiltered()
{
let categories=[];
let filteredCategories=[];

for(let event of data.events)
{
    categories.push(event.category);
}

return filteredCategories= categories.reduce((acumulador,valorIterado) => {
    if(!acumulador.includes(valorIterado))
    {
        acumulador.push(valorIterado);
    }
    return acumulador;
}, []);
}


function createCategoriesCheckboxes()
{
    let fcategories=categoriesfiltered();
    for(let fcategory of fcategories)
    {
    categoriesContainer.innerHTML+=`<label> <input class="category" type="checkbox" name="category" value="${fcategory}">${fcategory}</label>`;
    }
}





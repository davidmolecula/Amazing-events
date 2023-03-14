const card=document.getElementById('cards');
let htmlEvents="";
const txtInput=document.getElementById('search');
const txtButton=document.getElementById('buttonSearch');
const categoriesContainer=document.getElementById('categories');
const categoriesChecked=document.getElementsByClassName('category');




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

function createPastCards()
{
for(let event of data.events)
{
let eventDate=event.date;
if(data.currentDate>eventDate)
    {
    createCard(event);
}
}
}

function createFutureCards()
{
for(let event of data.events)
{
let eventDate=event.date;
if(data.currentDate<eventDate)
    {
createCard(event);
    
}
}
}

function createAllCards(eventos)
{
for(let event of eventos)
{
createCard(event);
}
}

function deleteCards()
{
    htmlEvents="";
    card.innerHTML=htmlEvents;
}


let cardPast=[];
for(let event of data.events)
  {
    let eventDate=event.date;
    if(data.currentDate>eventDate)
      {
        cardPast.push(event);
  }
  }

let cardFut=[];
for(let event of data.events)
  {
    let eventDate=event.date;
    if(data.currentDate<eventDate)
      {
        cardFut.push(event);
  }
  }




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


function searchCards(events,e)
{
deleteCards();
if(enabledSettings.length!==0)
{
for(let enabled of enabledSettings)
{
    const filtrado=events.filter(evento => evento.category.toLowerCase()===enabled.toLowerCase()); 
    
    filtrado.forEach(filt => {if(filt.name.toLowerCase().includes(e.target.value.toLowerCase()) || filt.description.toLowerCase().includes(e.target.value.toLowerCase()))
        {

            createCard(filt);
            if(txtInput.value==="")
            {
            deleteCards();
            for(let enabled of enabledSettings)
            {
                const filtrado=events.filter(evento => evento.category.toLowerCase()===enabled.toLowerCase()); 
                for(let eventof of filtrado)
                {
                createCard(eventof);
                }
            }
            }
        }});
}
}
else {
events.forEach(evento => {if(evento.name.toLowerCase().includes(e.target.value.toLowerCase()) || evento.description.toLowerCase().includes(e.target.value.toLowerCase()))
{
    createCard(evento);
    if(txtInput.value==="")
    {
        deleteCards();
        createAllCards(events);
    }
}});
}
}

function cardFromChecks(eventTime)
{
if(txtInput.value==='')
{
deleteCards();
}
enabledSettings = 
  Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
  .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
  .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
  for(let enabled of enabledSettings)
{
    const filtrado=eventTime.filter(evento => evento.category.toLowerCase()===enabled.toLowerCase()); 
    filtrado.forEach(filt => {
      if(txtInput.value==='')
      {
       createCard(filt);
      }
      
    
   })
}
if(enabledSettings.length===0&&txtInput.value==='')
{
  for(let card of eventTime)
  {
    createCard(card);
  }
}
}


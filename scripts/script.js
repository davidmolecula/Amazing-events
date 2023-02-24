let card=document.getElementById('cards');
let htmlEvents="";




for(let event of datos.events)
{
  htmlEvents+=` <div class="card" style="width: 16rem;height: 400px;">
  <img src="${event.image}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
  </div>
  <div class="card-body">
      <span class="cards-span">Price ${event.price}</span>
      <a href="details.html" class="btn btn-primary">See more...</a>
  </div>
</div>`;
card.innerHTML=htmlEvents;

console.log(event.currentDate)
}








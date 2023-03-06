const locationSearch=location.search

const params= new URLSearchParams(locationSearch)

const id=params.get("id")

const evento= data.events.find(evento => evento._id==id);
let tickets=evento.capacity-evento.assistance;
const detailContainer=document.getElementById('detailContainer');

detailContainer.innerHTML=` <div class="row flex-lg align-items-center g-5 py-5">
<div class="col-10 col-sm-8 col-lg-6">
    <img src="${evento.image}"
        class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
</div>
<div class="col-lg-6" id="details-info-container">
    <h1>${evento.name}</h1> 
    <p class="spans"><span class="span">Date: ${evento.date}</span><span class="span">Place: ${evento.place}</span><span class="span">Tickets available:${tickets}</span></p>
    <p class="lead">${evento.description}.</p>
    <p class="spans"><span class="span">Price: $${evento.price}</span><a class="span">Buy</a></p>
</div>
</div>`
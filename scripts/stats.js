const firstRow=document.querySelector('.first-row');
const pastStats=document.getElementsByClassName('past-col-1');
const pastStats2=document.getElementsByClassName('past-col-2');
const pastStats3=document.getElementsByClassName('past-col-3');
const upcomingStats=document.getElementsByClassName('upcoming-col-1');
const upcomingStats2=document.getElementsByClassName('upcoming-col-2');
const upcomingStats3=document.getElementsByClassName('upcoming-col-3');


function eventsAssistance(dataEvents)
{
let maxAssistance;
let minAssistance;
let largerCapacity;
let string;
maxAssistance= dataEvents.reduce((acumulador,valorIterado) => {
    if((acumulador.assistance)/acumulador.capacity<valorIterado.assistance/valorIterado.capacity)
    {
      return valorIterado;
    ;
    }
    return acumulador;
});

minAssistance= dataEvents.reduce((acumulador,valorIterado) => {
  if((acumulador.assistance)/acumulador.capacity>valorIterado.assistance/valorIterado.capacity)
  {
    return valorIterado;
  ;
  }
  return acumulador;
});

largerCapacity= dataEvents.reduce((acumulador,valorIterado) => {
  if(acumulador.capacity<valorIterado.capacity)
  {
    return valorIterado;
  ;
  }
  return acumulador;
});

string=`<td>${maxAssistance.name}</td>
<td>${minAssistance.name}</td>
<td>${largerCapacity.name}</td>`;

firstRow.innerHTML=string;


}

eventsAssistance(data.events);

function statisticCount(event)
{
let revenues=[];
let percentageOfAttendance;
let percentageOfAttendanceArray=[];
let string='';
let total=0;
let count=0;
let percentageTotalOfAttendance=0;
let i=0;
let categories=categoriesfiltered();


for(let cat of categories)
{
    count=0;
    percentageTotalOfAttendance=0;
event.forEach(e => {
if(e.category===cat)
{
    total=total+e.assistance*e.price;
    percentageTotalOfAttendance=percentageTotalOfAttendance+(e.assistance/e.capacity)*100;
    count+=1;
} 
})


percentageOfAttendance=Math.trunc(percentageTotalOfAttendance/count);
percentageOfAttendanceArray.push(percentageOfAttendance);

revenues.push(total)
}


for(i=0;i<categories.length;i++)
{
    string=`${categories[i]}`;

    pastStats[i].innerHTML=string;
    pastStats2[i].innerHTML=revenues[i];
    pastStats3[i].innerHTML=`${percentageOfAttendanceArray[i]}%`;
}
}

statisticCount(cardPast);

function statisticCount2(event)
{
let revenues=[];
let percentageOfAttendance;
let percentageOfAttendanceArray=[];
let string='';
let total=0;
let count=0;
let percentageTotalOfAttendance=0;
let i=0;
let categories=categoriesfiltered();


for(let cat of categories)
{
    count=0;
    percentageTotalOfAttendance=0;
    total=0;
    if(cat!=='Cinema')
    {
event.forEach(e => {
  if(e.category===cat)
  {
    
    total=total+e.estimate*e.price;
    percentageTotalOfAttendance=percentageTotalOfAttendance+(e.estimate/e.capacity)*100;
    count+=1;
}

})
}else{
    total=0;
    percentageOfAttendance=0;
    count=1;
}

percentageOfAttendance=Math.trunc(percentageTotalOfAttendance/count);
percentageOfAttendanceArray.push(percentageOfAttendance);

revenues.push(total)
}



for(i=0;i<categories.length;i++)
{
    
    string=`${categories[i]}`;
    upcomingStats[i].innerHTML=string;
    upcomingStats2[i].innerHTML=revenues[i];
    upcomingStats3[i].innerHTML=`${percentageOfAttendanceArray[i]}%`;
}
}

statisticCount2(cardFut);
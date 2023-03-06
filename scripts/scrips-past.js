for(let event of data.events)
{
  let eventDate=event.date;
  if(currentDate>eventDate)
    {
      createCard(event);
}
}
createCategoriesCheckboxes();
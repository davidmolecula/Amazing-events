createAllCards(data.events);
createCategoriesCheckboxes();
let checkboxes = document.querySelectorAll("input[type=checkbox][name=category]");
let enabledSettings = [];

txtInput.addEventListener("keyup", e =>
{

  searchCards(data.events,e);

})



// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
  cardFromChecks(data.events);
  })

});





let checkboxes = document.querySelectorAll("input[type=checkbox][name=category]");
let enabledSettings = []
// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    deleteCards();
    enabledSettings = 
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      for(let enabled of enabledSettings)
    {
        const filtrado=data.events.filter(evento => evento.category.toLowerCase()===enabled.toLowerCase()); 
        for(let eventof of filtrado)
        {
        createCard(eventof);
        }
    }
    if(enabledSettings.length===0)
    {
      createAllCards();
    }
  })

});
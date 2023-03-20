let urlApi="https://mindhub-xj03.onrender.com/api/amazing";
async function getData()
{
try {
  const response= await fetch(urlApi);
  const data= await response.json();
  localStorage.setItem('dataLocal', JSON.stringify(data));
  return data;
  } catch(error){
    console.log("No se pudo obtener info de la API");
  }
}
getData();
let data=JSON.parse(localStorage.getItem('dataLocal'));
console.log(data);
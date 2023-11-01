const bt= document.querySelector('.buscar');
const producto1 = document.querySelector('#search-card-2');
const ingrediente1 = document.querySelector('#search-card-4');
const clase = document.querySelector('.error1');

bt.addEventListener('click', search);

//variables unidas a las etiquetas html and input
//entrar.value;

// funcion que convierte de minusculas a mayusculas vinculado al input
function mayus(e) {
  e.value = e.value.toUpperCase();
}

//*****************************************************************/
const enter = document.querySelector('#search-input');
enter.addEventListener("keydown", (e) => {
  if(e.keyCode === 13) {
    search();
  };
});

function search(){
  list.forEach(recetas => {
    if(enter.value === recetas.producto){
      let producto = (recetas.producto); // esto captura los datos
      let ingrediente = (recetas.ingrediente);
    
      producto1.innerHTML = producto; // esto inserta en el html
      ingrediente1.innerHTML = ingrediente;
      
    };
  });
};
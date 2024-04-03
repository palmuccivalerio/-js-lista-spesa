


// Array contenente gli elementi della lista della spesa
const listaSpesa = ["latte", "noccioline", "dentifricio", "shampo", "lamette"];


// Seleziona l'elemento HTML con classe 
let listElem = document.querySelector(".lista-spesa");
// Inizializzazione dell'indice per il ciclo while
let i= 0
 // Ciclo while per creare e aggiungere elementi della lista della spesa
while ( i < listaSpesa.length ) {
// Continua finché l'indice è minore della lunghezza della lista della spesa
 // Ottiene l'elemento corrente della lista della spesa
  const curItem = listaSpesa[i]; // string

  // Crea un nuovo elemento di lista
  const listItemElem = document.createElement("li"); // object
  // Imposta il testo dell'elemento di lista con l'elemento corrente della lista della spesa
  listItemElem.innerHTML = curItem;
  //Console log per verdere elementi stampati in console
  console.log(listItemElem);

 // Aggiunge l'elemento di lista all'elemento HTML selezionato
  listElem.append(listItemElem);
// Incrementa l'indice per passare all'elemento successivo della lista della spesa
  i++
}

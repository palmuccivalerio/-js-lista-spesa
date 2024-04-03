TITOLO
Dovete stampare la lista di spesa in pagina utilizzando ciclo while.
Rifacciamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.


Esercizio: Stampare la lista della spesa con un ciclo while
Descrizione
L'obiettivo di questo esercizio è stampare la lista della spesa in pagina utilizzando un ciclo while al posto del ciclo for.

Passaggi da seguire:
Inizializzazione della variabile di controllo: Inizializzare una variabile che fungerà da controllo per il ciclo while. Questa variabile rappresenterà l'indice della lista della spesa.

Condizione di continuazione: Configurare il ciclo while in modo che continui finché la variabile di controllo è minore della lunghezza della lista della spesa.

Stampa degli elementi della lista: All'interno del ciclo while, stampare ciascun elemento della lista della spesa.




codice in due versioni che abbiamo visto:
const shoppingList = ["latte", "biscotti", "pasta", "formaggio"];

// let listElem = document.querySelector(".shopping-list");
// console.log(listElem);
// let result = "";
// for (let i = 0; i < shoppingList.length; i++) {
//   const curItem = shoppingList[i]; // string
//   console.log(curItem);
//   result += `<li>${curItem}</li>`; // string
// }
//
// listElem.innerHTML = result;

// Create Element method

let listElem = document.querySelector(".shopping-list");


for (let i = 0; i < shoppingList.length; i++) {
  const curItem = shoppingList[i]; // string

  const listItemElem = document.createElement("li"); // object
  listItemElem.innerHTML = curItem;
  console.log(listItemElem);

  listItemElem.addEventListener("click", function() {
    listItemElem.classList.toggle("done");
  });

  listElem.append(listItemElem);
}


Ciclo for:
Utilizzo: Il ciclo for è solitamente utilizzato quando si conosce il numero esatto di iterazioni necessarie.
Struttura: La struttura di base del ciclo for comprende tre parti: l'inizializzazione della variabile di controllo, la condizione di continuazione e l'aggiornamento della variabile di controllo.
Esempio:
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log(i);
}
Vantaggi: È più conciso e leggibile quando si sa in anticipo quante iterazioni saranno necessarie.



Ciclo while:
Utilizzo: Il ciclo while è utilizzato quando la condizione di continuazione è basata su una condizione booleana generica.
Struttura: Il ciclo while continua finché la condizione specificata è valutata come vera.
Esempio:
javascript
Copy code
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
Vantaggi: È flessibile e può essere utilizzato quando non si conosce in anticipo il numero di iterazioni necessarie. Può essere più adatto a situazioni in cui la condizione di terminazione non è legata a un contatore incrementale.

Differenze:
Il ciclo for è più adatto quando si conosce il numero di iterazioni necessarie, mentre il ciclo while è più flessibile e può essere utilizzato quando la condizione di terminazione non è legata a un contatore incrementale.
Il ciclo for ha una struttura più compatta e include l'inizializzazione, la condizione e l'aggiornamento della variabile di controllo nello stesso costrutto, mentre con il ciclo while queste operazioni devono essere gestite esternamente al ciclo stesso.

Il ciclo while può causare un'iterazione infinita se la condizione di terminazione non viene mai soddisfatta, quindi è necessario prestare attenzione a garantire che la condizione venga eventualmente valutata come falsa.
// interface Grupo {
//   nombreGrupo: string;
//   añoDeFormacion: number;
//   activo: boolean;
//   generoMusical: string;
// }

// const beatles: Grupo = {
//   nombreGrupo: "The Beatles",
//   añoDeFormacion: 1960,
//   activo: true,
//   generoMusical: "Rock and Roll",
// };

// const queen: Grupo = {
//   nombreGrupo: "Queen",
//   añoDeFormacion: 1970,
//   activo: false,
//   generoMusical: "Pop Rock",
// };
// const acDc: Grupo = {
//   nombreGrupo: "AC/DC",
//   añoDeFormacion: 1973,
//   activo: true,
//   generoMusical: "Rock and Roll",
// };

// const ludwinVanBeethoven: Grupo = {
//   nombreGrupo: "Ludwig van Beethoven",
//   añoDeFormacion: 1770,
//   activo: false,
//   generoMusical: "Classical",
// };

// const rollingStone: Grupo = {
//   nombreGrupo: "Rolling Stones",
//   añoDeFormacion: 1957,
//   activo: true,
//   generoMusical: "Rock and Roll",
// };

// console.log("%c" + beatles.nombreGrupo, "background:green ; font-size:16px");
// console.log("Año de formacion :" + " " + beatles.añoDeFormacion);
// console.log("Estado :" + " " + beatles.activo);
// console.log("Género :" + " " + beatles.generoMusical);

// console.log("%c" + queen.nombreGrupo, "background:green ; font-size:16px");
// console.log("Año de formacion :" + " " + queen.añoDeFormacion);
// console.log("Estado :" + " " + queen.activo);
// console.log("Género :" + " " + queen.generoMusical);

// console.log("%c" + acDc.nombreGrupo, "background:green ; font-size:16px");
// console.log("Año de formacion :" + " " + acDc.añoDeFormacion);
// console.log("Estado :" + " " + acDc.activo);
// console.log("Género :" + " " + acDc.generoMusical);

// console.log("%c" + ludwinVanBeethoven.nombreGrupo, "background:green ; font-size:16px");
// console.log("Año de formacion :" + " " + ludwinVanBeethoven.añoDeFormacion);
// console.log("Estado :" + " " + ludwinVanBeethoven.activo);
// console.log("Género :" + " " + ludwinVanBeethoven.generoMusical);

// console.log("%c" + rollingStone.nombreGrupo, "background:green ; font-size:16px");
// console.log("Año de formacion :" + " " + rollingStone.añoDeFormacion);
// console.log("Estado :" + " " + rollingStone.activo);
// console.log("Género :" + " " + rollingStone.generoMusical);



const nextTurn = (document.getElementById("nextTurn")) as HTMLElement;
const prevTurn = (document.getElementById("prevTurn")) as HTMLElement;
const reset = (document.getElementById("reset")) as HTMLElement;
const change = (document.getElementById("change")) as HTMLElement;


nextTurn.addEventListener("click", () => {
  const turnInput = document.getElementById("turn") as HTMLInputElement;
  const turn = parseInt(turnInput.value); 
  const newTurn = turn + 1;
  turnInput.value = (newTurn.toString()).padStart(2,"0");

 
});

prevTurn.addEventListener("click", () => {

  const turnInput = document.getElementById("turn") as HTMLInputElement;
  const turn = parseInt(turnInput.value);
  if (turn >= 1){
  const newTurn = turn - 1;
  turnInput.value = (newTurn.toString()).padStart(2,"0");
  
}
  else{
    alert("no existen turnos negativos")
  }
})

reset.addEventListener("click", () => {
  const turnInput = document.getElementById("turn") as HTMLInputElement;
  const changeTurn = document.getElementById("changeturn") as HTMLInputElement;

  turnInput.value = "00";
  changeTurn.value = "00";
})

change.addEventListener("click", () => {
  const changeTurn = document.getElementById("changeturn") as HTMLInputElement;
  const turn = parseInt(changeTurn.value);
  const turnInput = document.getElementById("turn") as HTMLInputElement;
  turnInput.value = (turn.toString()).padStart(2,"0");

})


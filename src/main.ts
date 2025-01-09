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



// const nextTurn = (document.getElementById("nextTurn")) as HTMLElement;
// const prevTurn = (document.getElementById("prevTurn")) as HTMLElement;
// const reset = (document.getElementById("reset")) as HTMLElement;
// const change = (document.getElementById("change")) as HTMLElement;


// nextTurn.addEventListener("click", () => {
//   const turnInput = document.getElementById("turn") as HTMLInputElement;
//   const turn = parseInt(turnInput.value); 
//   const newTurn = turn + 1;
//   turnInput.value = (newTurn.toString()).padStart(2,"0");

 
// });

// prevTurn.addEventListener("click", () => {

//   const turnInput = document.getElementById("turn") as HTMLInputElement;
//   const turn = parseInt(turnInput.value);
//   if (turn >= 1){
//   const newTurn = turn - 1;
//   turnInput.value = (newTurn.toString()).padStart(2,"0");
  
// }
//   else{
//     alert("no existen turnos negativos")
//   }
// })

// reset.addEventListener("click", () => {
//   const turnInput = document.getElementById("turn") as HTMLInputElement;
//   const changeTurn = document.getElementById("changeturn") as HTMLInputElement;

//   turnInput.value = "00";
//   changeTurn.value = "00";
// })

// change.addEventListener("click", () => {
//   const changeTurn = document.getElementById("changeturn") as HTMLInputElement;
//   const turn = parseInt(changeTurn.value);
//   const turnInput = document.getElementById("turn") as HTMLInputElement;
//   turnInput.value = (turn.toString()).padStart(2,"0");

// })

let score :number = 0

const showScore = () => {
  const scoreElement = document.getElementById("score") as HTMLElement;
  scoreElement.innerHTML = ` PUNTUACIÓN : ${score}`;
}



const giveMeCard = () => {
  // const cardElement = document.getElementById("card") as HTMLElement;
  let randomNumber = Math.floor(Math.random()*10 )+1;
  if (randomNumber > 7){
    randomNumber = randomNumber + 2;
  }
  if (randomNumber > 7){
    score = score + 0.5
  }else {
  score += randomNumber;
  }

  // cardElement.innerHTML = `Card: ${randomNumber}`;
  showCard(randomNumber);
  showScore();
  gameOver(score)

  }

  const gameOver = (number:number) => {
    const gameOverElement = document.getElementById("gameOver") as HTMLElement;
    if (number === 7.5 ){
      gameOverElement.innerHTML = "Game Over! Has ganado!";
      buttonNewCard.setAttribute("disabled", "disabled");
    }
    if (number > 7.5){
      gameOverElement.innerHTML = "Game Over! Has perdido!";
      buttonNewCard.setAttribute("disabled", "disabled");
      buttonPlanted.setAttribute("disabled", "disabled"); 
      
    }
  }
  
  const showCard = (card :number) :void => {
    const cardElement = document.getElementById("cardPlayer") as HTMLImageElement;
    switch(card){
      case 1:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg");
        break;
        
      
      case 2:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg");
        break;
        
      
      case 3:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");
        break;
        
      
      case 4:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg");
        break;
        
      
      case 5:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg");
        break;
        
      
      case 6:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg");
        break;
        
      
      case 7:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg");
        break;
        
      
      case 10:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg");
        break;
        
      
      case 11:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg");
        break;
        
      
      case 12:
        cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg");
        break;
        
      }
    }
    const buttonNewCard = document.getElementById("newCard") as HTMLButtonElement;
    buttonNewCard.addEventListener("click", giveMeCard);

    const planted =() => {
      buttonNewCard.setAttribute("disabled", "disabled");
      const plantedElement = document.getElementById("planted") as HTMLElement;
      if (score < 4){
        plantedElement.innerHTML = "Has sido muy conservador";
        buttonPlanted.setAttribute("disabled", "disabled"); 
      }else if (score === 5){
        plantedElement.innerHTML = "Has sido conservador";
        buttonPlanted.setAttribute("disabled", "disabled"); 
      }else if (score <=7) {
        plantedElement.innerHTML = "Casi casi..";
        buttonPlanted.setAttribute("disabled", "disabled"); 
      }

    }
    const buttonPlanted = document.getElementById("buttonPlanted") as HTMLButtonElement;
    buttonPlanted.addEventListener("click", planted);

    const buttonNewGame = document.getElementById("newGame") as HTMLButtonElement;
    buttonNewGame.addEventListener("click", () => {
      location.reload();
    });

   
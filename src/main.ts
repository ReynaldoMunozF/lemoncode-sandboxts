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

// let score :number = 0

// const showScore = () => {
//   const scoreElement = document.getElementById("score") as HTMLElement;
//   scoreElement.innerHTML = ` PUNTUACIÓN : ${score}`;
// }



// const giveMeCard = () => {
//   // const cardElement = document.getElementById("card") as HTMLElement;
//   let randomNumber = Math.floor(Math.random()*10 )+1;
//   if (randomNumber > 7){
//     randomNumber = randomNumber + 2;
//   }
//   if (randomNumber > 7){
//     score = score + 0.5
//   }else {
//   score += randomNumber;
//   }

//   // cardElement.innerHTML = `Card: ${randomNumber}`;
//   showCard(randomNumber);
//   showScore();
//   gameOver(score)

//   }

//   const gameOver = (number:number) => {
//     const gameOverElement = document.getElementById("gameOver") as HTMLElement;
//     if (number === 7.5 ){
//       gameOverElement.innerHTML = "Game Over! Has ganado!";
//       buttonNewCard.setAttribute("disabled", "disabled");
//     }
//     if (number > 7.5){
//       gameOverElement.innerHTML = "Game Over! Has perdido!";
//       buttonNewCard.setAttribute("disabled", "disabled");
//       buttonPlanted.setAttribute("disabled", "disabled"); 
      
//     }
//   }
  
//   const showCard = (card :number) :void => {
//     const cardElement = document.getElementById("cardPlayer") as HTMLImageElement;
//     switch(card){
//       case 1:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg");
//         break;
        
      
//       case 2:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg");
//         break;
        
      
//       case 3:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");
//         break;
        
      
//       case 4:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg");
//         break;
        
      
//       case 5:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg");
//         break;
        
      
//       case 6:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg");
//         break;
        
      
//       case 7:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg");
//         break;
        
      
//       case 10:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg");
//         break;
        
      
//       case 11:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg");
//         break;
        
      
//       case 12:
//         cardElement.setAttribute("src","https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg");
//         break;
        
//       }
//     }
//     const buttonNewCard = document.getElementById("newCard") as HTMLButtonElement;
//     buttonNewCard.addEventListener("click", giveMeCard);

//     const planted =() => {
//       buttonNewCard.setAttribute("disabled", "disabled");
//       const plantedElement = document.getElementById("planted") as HTMLElement;
//       if (score < 4){
//         plantedElement.innerHTML = "Has sido muy conservador";
//         buttonPlanted.setAttribute("disabled", "disabled"); 
//       }else if (score === 5){
//         plantedElement.innerHTML = "Has sido conservador";
//         buttonPlanted.setAttribute("disabled", "disabled"); 
//       }else if (score <=7) {
//         plantedElement.innerHTML = "Casi casi..";
//         buttonPlanted.setAttribute("disabled", "disabled"); 
//       }

//     }
//     const buttonPlanted = document.getElementById("buttonPlanted") as HTMLButtonElement;
//     buttonPlanted.addEventListener("click", planted);

//     const buttonNewGame = document.getElementById("newGame") as HTMLButtonElement;
//     buttonNewGame.addEventListener("click", () => {
//       location.reload();
//     });

// type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

// interface Pacientes {

//   id: number;
//   nombre: string;
//   apellidos: string;
//   sexo: string;
//   temperatura: number;
//   frecuenciaCardiaca: number;
//   especialidad: Especialidad;
//   edad: number;
// }

// const pacientes: Pacientes[] = [
//   {
//     id: 1,
//     nombre: "John",
//     apellidos: "Doe",
//     sexo: "Male",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 80,
//     especialidad: "Medico de familia",
//     edad: 44,
//   },
//   {
//     id: 2,
//     nombre: "Jane",
//     apellidos: "Doe",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 70,
//     especialidad: "Medico de familia",
//     edad: 43,
//   },
//   {
//     id: 3,
//     nombre: "Junior",
//     apellidos: "Doe",
//     sexo: "Male",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 90,
//     especialidad: "Pediatra",
//     edad: 8,
//   },
//   {
//     id: 4,
//     nombre: "Mary",
//     apellidos: "Wien",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 120,
//     especialidad: "Medico de familia",
//     edad: 20,
//   },
//   {
//     id: 5,
//     nombre: "Scarlett",
//     apellidos: "Somez",
//     sexo: "Female",
//     temperatura: 36.8,
//     frecuenciaCardiaca: 110,
//     especialidad: "Cardiólogo",
//     edad: 30,
//   },
//   {
//     id: 6,
//     nombre: "Brian",
//     apellidos: "Kid",
//     sexo: "Male",
//     temperatura: 39.8,
//     frecuenciaCardiaca: 80,
//     especialidad: "Pediatra",
//     edad: 11,
//   },
// ];

// // Obtener pacientes asignados a Pediatría

// const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
//   let resultado: Pacientes[] = [];
//   for (let i = 0; i < pacientes.length; i++) {
//     if (pacientes[i].especialidad === "Pediatra") {
//       resultado[resultado.length] = pacientes[i]; 
//     }
//   }
//   return resultado;
// };

// // Obtener pacientes asignados a Pediatría y menores de 10 años
// const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
//   let resultado: Pacientes[] = [];
//   for (let i = 0; i < pacientes.length; i++) {
//     if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
//       resultado[resultado.length] = pacientes[i]; 
//     }
//   }
//   return resultado;
// };

// // Activar protocolo de urgencia
// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//   for (let i = 0; i < pacientes.length; i++) {
//     if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
//       return true;
//     }
//   }
//   return false;
// };

// //  Reasignar pacientes de Pediatría a Médico de Familia
// const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
//   let resultado: Pacientes[] = [];
//   for (let i = 0; i < pacientes.length; i++) {
//     let paciente = pacientes[i];
//     if (paciente.especialidad === "Pediatra") {
//       resultado[resultado.length] = { ...paciente, especialidad: "Medico de familia" };
//     } else {
//       resultado[resultado.length] = paciente;
//     }
//   }
//   return resultado;
// };

// //  Comprobar si hay pacientes en Pediatría
// const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
//   for (let i = 0; i < pacientes.length; i++) {
//     if (pacientes[i].especialidad === "Pediatra") {
//       return true;
//     }
//   }
//   return false;
// };

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Obtener pacientes asignados a Pediatría
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.filter(paciente => paciente.especialidad === "Pediatra");

// Obtener pacientes asignados a Pediatría y menores de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);

// Activar protocolo de urgencia
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => 
  pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);

//  Reasignar pacientes de Pediatría a Médico de Familia
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.map(paciente => 
    paciente.especialidad === "Pediatra" ? { ...paciente, especialidad: "Medico de familia" } : paciente
  );

// Comprobar si hay pacientes en Pediatría
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => 
  pacientes.some(paciente => paciente.especialidad === "Pediatra");
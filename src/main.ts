// function barajarCartas<T>(array: T[]): T[] {
//     const barajarCartas = [...array]; 
//     for (let i = barajarCartas.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [barajarCartas[i], barajarCartas[j]] = [barajarCartas[j], barajarCartas[i]]; 
//     }
//     return barajarCartas;
// }

// type Carta = { id: number; emoji: string };

// const cartas: Carta[] = [
//     { id: 1, emoji: "🐱" }, { id: 2, emoji: "🐶" },
//     { id: 3, emoji: "🐰" }, { id: 4, emoji: "🐹" },
//     { id: 5, emoji: "🦊" }, { id: 6, emoji: "🐻" },
//     { id: 7, emoji: "🐱" }, { id: 8, emoji: "🐶" },
//     { id: 9, emoji: "🐰" }, { id: 10, emoji: "🐹" },
//     { id: 11, emoji: "🦊" }, { id: 12, emoji: "🐻" }
// ];

// const cartasBarajadas = barajarCartas(cartas);
// console.log(cartasBarajadas);


// document.addEventListener("DOMContentLoaded", () => {
//     const carta = document.getElementById("carta") as HTMLImageElement;
    
//     if (carta) {
//         carta.addEventListener("click", () => {
//             // Cambiar la imagen al hacer clic
//             carta.src = carta.dataset.atras || "assets/reverso.png";
//         });
//     }
// });import { obtenerCartas } from "./imagenes";

const obtenerCartas: string[] = [
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"
];

document.addEventListener("DOMContentLoaded", () => {
    const cartas = document.querySelectorAll(".imagen") as NodeListOf<HTMLImageElement>;
    let cartasVolteadas: HTMLImageElement[] = [];


    cartas.forEach((carta, index) => {
        carta.dataset.frente = obtenerCartas[index]; 
        
    });

    cartas.forEach(carta => {
        carta.addEventListener("click", () => {
            if (cartasVolteadas.length < 2 && !cartasVolteadas.includes(carta)) {
                carta.src = carta.dataset.frente || carta.src;  
                cartasVolteadas.push(carta);
            }

           
        });
    });
});



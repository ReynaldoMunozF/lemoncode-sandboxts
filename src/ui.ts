import { tablero } from "./model";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
  esPartidaCompleta,
} from "./motor";

document.addEventListener("DOMContentLoaded", () => {
  const iniciarPartidaBtn = document.querySelector(
    "#iniciar-partida"
  ) as HTMLButtonElement;
  const contenedorCartas = document.querySelector(
    "#contenedor-cartas"
  ) as HTMLElement;
  const mensajeGanaste = document.querySelector(
    "#mensaje-ganaste"
  ) as HTMLElement;
  iniciarPartidaBtn.addEventListener("click", () => {
    iniciaPartida(tablero);
    reiniciarCartas();
    actualizarUI();
    mensajeGanaste.style.display = "none";
  });

  const reiniciarCartas = () => {
    tablero.cartas.forEach((carta) => {
      carta.estaVuelta = false;
      carta.encontrada = false;
    });
  };

  const actualizarUI = () => {
    contenedorCartas.innerHTML = "";
    tablero.cartas.forEach((carta, index) => {
      const cartaDiv = document.createElement("div");
      cartaDiv.classList.add("carta");
      cartaDiv.setAttribute("data-indice-array", index.toString());

      const imagen = document.createElement("img");
      imagen.src = carta.estaVuelta ? carta.imagen : "asset/reverso.png";
      cartaDiv.appendChild(imagen);

      cartaDiv.addEventListener("click", () => {
        if (sePuedeVoltearLaCarta(tablero, index)) {
          voltearLaCarta(tablero, index);
          actualizarUI();

          if (tablero.estadoPartida === "UnaCartaLevantada") {
            tablero.estadoPartida = "DosCartasLevantadas";
            const indiceA = tablero.indiceCartaVolteadaA!;
            const indiceB = index;

            if (sonPareja(indiceA, indiceB, tablero)) {
              parejaEncontrada(tablero, indiceA, indiceB);
              actualizarUI();
              tablero.estadoPartida = "CeroCartasLevantadas";
              tablero.indiceCartaVolteadaA = undefined;
            } else {
              setTimeout(() => {
                parejaNoEncontrada(tablero, indiceA, indiceB);
                actualizarUI();

                tablero.estadoPartida = "CeroCartasLevantadas";
                tablero.indiceCartaVolteadaA = undefined;
              }, 1000);
            }
          } else {
            tablero.estadoPartida = "UnaCartaLevantada";
            tablero.indiceCartaVolteadaA = index;
          }
        }
      });

      contenedorCartas.appendChild(cartaDiv);
    });

    if (esPartidaCompleta(tablero)) {
      mensajeGanaste.style.display = "block"; 
    }
  };
});

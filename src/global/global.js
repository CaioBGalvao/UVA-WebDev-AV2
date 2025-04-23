import Konami from "konami";

const { VITE_ENV, VITE_PORT } = import.meta.env;

let env = "";

if (VITE_ENV !== undefined && typeof VITE_ENV === "string") {
  if (VITE_ENV === "production") {
    env = "http://caiogalvao.com.br/UVA-WebDev-AV2/";
  } else {
    env = `http://localhost:${VITE_PORT}`;
  }
} else {
  throw new Error("Secret Variable not defined");
}

// Isso se faz necessário já que é assim que funciona a lib
// eslint-disable-next-line no-unused-vars
const easterEgg = new Konami(`${env}/contato/contato.html?promo=konamiCode`);

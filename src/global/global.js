import Konami from "konami";

const nodeEnv = import.meta.env.NODE_ENV;

let env = "";

if (nodeEnv !== undefined && typeof nodeEnv === "string") {
  if (nodeEnv === "production") {
    env = "http://caiogalvao.com.br/UVA-WebDev-AV2/";
  } else {
    env = "http://localhost/";
  }
} else {
  throw new Error("Secret Variable not defined");
}

// Isso se faz necessário já que é assim que funciona a lib
// eslint-disable-next-line no-unused-vars
const easterEgg = new Konami(`${env}/contato/contato.html?promo=konamiCode`);

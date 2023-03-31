import './style.css';

import tsLogo from './assets/ts.svg';
import jsLogo from './assets/js.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';
import nodeLogo from './assets/nodejs.svg';
import viteLogo from '/vite.svg';

import { verifyPalindrome } from './palindrome';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>TS - Palíndromo</h1>
    <div class="card__palindrome">
      <b>O que é um palíndromo?</b>
      <br>
      <p>Um palíndromo nada mais é que uma palavra, frase ou número que permanece igual mesmo quando lida de trás para frente. Entende-se que: palíndromo é uma série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois sentidos.
      <br>
      <b>Por exemplo</b>: Ana, Natan e "Subi no onibus"
      </p>
    </div>
    <div class="card">
      <input id="pldm" type="text" placeholder="Digite aqui...">
      <br><br>
      <button id="pldm_send" type="submit">Verificar</button>
      <p id="pldm_output">Resultado: </p>
    </div>
    <p>Stacks usadas:</p>
    <div class="card__stacks">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="icon" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
        <img src="${htmlLogo}" class="icon" alt="HTML logo" />
      </a>
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
        <img src="${cssLogo}" class="icon" alt="CSS logo" />
      </a>
      <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
        <img src="${jsLogo}" class="icon" alt="JavaScript logo" />
      </a>
      <a href="https://nodejs.org/en" target="_blank">
        <img src="${nodeLogo}" class="icon" alt="NodeJS logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${tsLogo}" class="icon" alt="TypeScript logo" />
      </a>
    </div>
    
    <footer>
      <br>
      Versão: 1.0.0 <br> 
      Desenvolvido com 💖 por
      <a href="https://github.com/pratesMatheus" target="_blank">
        Matheus Prates
      </a> 
  </footer>
  </div>
`

const btn = document.querySelector<HTMLButtonElement>('#pldm_send')!;
btn.addEventListener('click', () => {
  verifyPalindrome(document.querySelector<HTMLInputElement>('#pldm')!);
})
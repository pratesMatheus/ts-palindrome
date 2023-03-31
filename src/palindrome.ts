import { elementByIdGetter } from "./components/DOM";


export function verifyPalindrome (element: HTMLInputElement) {
  const txt: string = element.value;
  const output =  txt.toLowerCase();

  if (!txt.trim()) {
    return elementByIdGetter('pldm_output', output,'insira um texto válido');
  } else {
    for (let i = 0; i < output.length / 2; i++){
      if(output[i] !== output[output.length -1 -i]){
        return elementByIdGetter('pldm_output', output, 'não é um palíndromo');
        //return false;
      }
    }
    return elementByIdGetter('pldm_output', output, 'é um palíndromo');
  }
}
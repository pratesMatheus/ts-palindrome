import { capitalize } from '../utils/capitalize';

/* interface iGetElementById {
  id: string;
  output?: string;
  msg: string
}
export function getElementById ({id, output, msg}:iGetElementById){
  return document.getElementById(id)!.innerText= `${capitalize(output!)} ${msg}`
}
*/

export function elementByIdGetter (id: string, output: string, msg:string){

  return document.getElementById(id)!.innerText= `${capitalize(output!)} ${msg}`
}
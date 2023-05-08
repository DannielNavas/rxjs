// operadores son funciones en rxjs
// operadores pipeables y operaciones creacionales
// creacionales  FromEvent, interva, from y of
// pipeables observable de entrada y observable de salida

// Map itera sobre los valores de entrada  transforma un valor directo del observable.
// Filter filtra los valores de entrada y devuelve un observable de salida.
// reduce cambia todos los valores emitidos por un observable, usando una funcion acumuladora

import { filter, from } from "rxjs";

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
  // map((number) => number * 2),
  // map((number) => number ** 2) // exponente
  // reduce((acc, cur) => acc + cur, 0) // acumulador
  filter((number) => number % 2 === 0) // pares
);

numbers$.subscribe(console.log);

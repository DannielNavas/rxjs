// catchError puede retornar un nuevo observable o puede retornar un error
// retry permite intentar nuevamente la petición DEPENDIENDO Las veces que le indiquemos retry(n)

import { of } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";

// TODO: Observable return
// const letter$ = of("a", "b", "c", "d").pipe(
//   map((letter) => {
//     if (letter === "c") {
//       x = 4;
//     }
//     return letter;
//   }),
//   catchError((err) => of("Ha ocurrido un error"))
// );

const letter$ = of("a", "b", "c", "d").pipe(
  map((letter) => {
    if (letter === "c") {
      x = 4;
    }
    return letter;
  }),
  retry(3),
  catchError((err) => of(err.message))
);
letter$.subscribe(console.log);

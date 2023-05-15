// https://pokeapi.co/api/v2/pokemon/itto
// https://httpbin.org/delay/2

import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

// const ditto$ = ajax("https://pokeapi.co/api/v2/pokemon/ditto").pipe(
//   map((resp) => console.log(resp.response)),
//   catchError((err) => {
//     console.log(err.message);
//     of(err);
//   })
// );

// ditto$.subscribe(console.log);

const postRequest$ = ajax
  .post({
    url: "https://httpbin.org/delay/5",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: {
      message: "Hola mundo",
    },
  })
  .pipe(
    map((resp) => resp),
    catchError((err) => {
      console.log(err.message);
      of(err);
    })
  );

postRequest$.subscribe(console.log);

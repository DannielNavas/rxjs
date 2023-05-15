import { mergeMap, takeUntil, timer } from "rxjs";
import { fromFetch } from "rxjs/fetch";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const ditto$ = fromFetch(url).pipe(
  mergeMap((response) => {
    if (response.ok) {
      // OK return data
      return response.json();
    } else {
      // Server is returning a status requiring the client to try something else.
      return of({ error: true, message: `Error ${response.status}` });
    }
  }),
  // abortar peticion despues de 1 segundo
  takeUntil(timer(1000))
);

ditto$.subscribe(console.log);

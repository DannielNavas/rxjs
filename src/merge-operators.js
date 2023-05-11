// merge -> removido en v8 por mergeWhit
// mergeAl convierte un observable de orden superior en un observable de primera orden
// mergeMap

import { from, interval, map, mergeMap } from "rxjs";

// const onClick$ = fromEvent(document, "click").pipe(map((event) => event.type));
// const onMoseMove$ = fromEvent(document, "mousemove").pipe(
//   map((event) => event.type)
// );

// onClick$.pipe(mergeWith(onMoseMove$)).subscribe(console.log);

// mergeAll

// const onClick$ = fromEvent(document, "click");

// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));

// const primeraOrden$ = ordenSuperior$.pipe(mergeAll());

// primeraOrden$.subscribe(console.log);

// onClick$.subscribe(console.log);
// onMoseMove$.subscribe(console.log);

// mergeMap

const letters$ = from(["a", "b", "c", "d"]);
const result$ = letters$.pipe(
  mergeMap((letter) => interval(1000).pipe(map((i) => letter + i)))
);

result$.subscribe(console.log);

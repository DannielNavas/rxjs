// Operadores de tiempo
// debunceTime: Emite un valor de la fuente solo despues de que haya pasado un periodo de tiempo de N milisegundos sin otra emision de la fuente
// throttleTime: Emite un valor de la fuente, luego ignora los valores de la fuente durante los siguientes N milisegundos, luego repite este proceso
// auditTime: CUANDO VE UN VALOR DE LA FUENTE, LO IGNORA MÁS LOS SIGUIENTES durante N milisegundos y luego emite el valor mas reciente.
// sampleTime: Muestra la fuente observable a intervalos de N milisegundos

import { fromEvent } from "rxjs";

const onClick$ = fromEvent(document, "click");

// onClick$.subscribe(console.log);

// debounceTime

// onClick$.pipe(debounceTime(3000)).subscribe(console.log);

// auditTime

onClick$.pipe(auditTime(3000)).subscribe(console.log);

// throttleTime

// onClick$.pipe(throttleTime(3000)).subscribe(console.log);

// sampleTime

// onClick$.pipe(sampleTime(3000)).subscribe(console.log);

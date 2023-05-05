import { interval, timer } from "rxjs";
// TODO: Crear un observable que emita un valor cada 2 segundos
const sequenceNumbers$ = interval(2000);
// TODO: Crear un observable que emita un valor cada 5 segundos pero solo una vez entrega el primero 0
const delayedTimmer$ = timer(5000);

delayedTimmer$.subscribe(console.log);

sequenceNumbers$.subscribe(console.log);

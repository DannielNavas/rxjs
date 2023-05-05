import { asyncScheduler, from, of } from "rxjs";

// const fruits$ = from(["apple", "banana", "orange"]);
const fruits$ = from(["apple", "banana", "orange"], asyncScheduler);
const fruit$ = of("apple", "banana", "orange");

fruits$.subscribe(console.log);
fruit$.subscribe(console.log);

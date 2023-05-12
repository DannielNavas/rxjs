// startWhith permite emitir los valores de sus argumentos en orden
// endWith permite emitir los valores de sus argumentos al final

import { from, of } from "rxjs";
import { endWith, startWith } from "rxjs/operators";

const letters$ = of("a", "b", "c").pipe(startWith("x", "y", "z"));

letters$.subscribe(console.log);

const numbers$ = from([1, 2, 3, 4, 5]).pipe(endWith(6, 7, 8, 9, 10));

numbers$.subscribe(console.log);

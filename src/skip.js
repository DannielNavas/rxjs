// operado que omite los primeros n valores emitidos por el observable skip(n)

import { of } from "rxjs";
import { skip } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(skip(5));

numeros$.subscribe(console.log);

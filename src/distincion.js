// operadores de distincion
// distinct: solo emite valores no repetidos 12123 => 123
// distinctUntilChanged: solo emite valores que no son iguales al anterior valor 1223312 => 12312
// distinctUntilKeyChanged: solo emite valores que no son iguales al anterior valor segun una propiedad 1223312 => 12312

import { of } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const repeatNumberDistinct$ = of(1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 1, 2, 3, 4).pipe(
  distinct()
);

const repeatNumberDistinctUn$ = of(1, 1, 1, 2, 2, 3, 3, 4, 5, 6, 1, 2, 3, 4).pipe(
  distinctUntilChanged()
);

const repeatNumber$ = of(
  { k: 1 },
  { k: 2 },
  { k: 3 },
  { k: 2 },
  { k: 3 },
  { k: 5 },
  { k: 4 }
).pipe(distinctUntilKeyChanged("k"));

repeatNumberDistinct$.subscribe(console.log);
repeatNumberDistinctUn$.subscribe(console.log);
repeatNumber$.subscribe(console.log);

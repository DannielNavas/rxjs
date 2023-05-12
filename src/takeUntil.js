// takeUntil emite valores hasta que un segundo observable se completa

import { fromEvent } from "rxjs";
import { takeUntil } from "rxjs/operators";

const onMoseMove$ = fromEvent(document, "mousemove");
const onMoseDown$ = fromEvent(document, "mousedown");

const sourceCompleted$ = onMoseMove$.pipe(takeUntil(onMoseDown$));

sourceCompleted$.subscribe(console.log);

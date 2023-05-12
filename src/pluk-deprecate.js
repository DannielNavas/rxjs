// pluck como map pero solo para elegir una de las propiedades anidadas de cada valor emitido
// desventaja sera eliminado en la version 8 de rxjs

import { fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";

fromEvent(document, "mousemove").pipe(pluck("clientX")).subscribe(console.log);

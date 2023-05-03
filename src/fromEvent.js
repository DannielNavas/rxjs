import { fromEvent } from "rxjs";

const mouseMove$ = fromEvent(document, "keydown");
// mouseMove$.subscribe(({ x, y }) => {
//   console.log(x, y);
// });

const observerMouse = {
  next: (value) => console.log("next", value.key),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};

mouseMove$.subscribe(observerMouse);

import { Observable } from "rxjs";

// TODO: la convension es agregarle un simbolo de dolar al final del nombre de la variable

const observable$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.next(5);
  subscriber.error("error");
  subscriber.complete();
});

const observador = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};

observable$.subscribe(observador);

import { Observable, Subject } from "rxjs";

// TODO: con el Observable en este caso se genera un nuevo valor para cada suscripción
const number$ = new Observable((subscriber) => {
  subscriber.next(Math.round(Math.random() * 100));
});

// TODO: con el Subject en este caso emite para los dos observadores el mismo valor, es multicast
const numbersRandom$ = new Subject();

const observador1 = {
  next: (value) => console.log("next:", value),
};

const observador2 = {
  next: (value) => console.log("next:", value),
};

numbersRandom$.subscribe(observador1);
numbersRandom$.subscribe(observador2);

// TODO: el valor tiene que ser emitido despues de hacer la subscripcion
// numbersRandom$.next(Math.round(Math.random() * 100));

// TODO: se enlaza el observable con el subject
number$.subscribe(numbersRandom$);

numbersRandom$.next(666);

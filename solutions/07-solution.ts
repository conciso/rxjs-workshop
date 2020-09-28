import { interval, Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

/**
 * Aufgabe: nutze ein interval(1000) und logge die Werte von 10
 * Zahlen und multiliziere diese mit 10 über ein eigenes ma "myMap"
 * und logge die Ergebnisse über console.log
 */

const obs = interval(1000).pipe(
  take(10),
  myMap((x) => x * 10)
);

obs.subscribe((x) => console.log(x));

function myMap<T, R>(fn: (value: T) => R) {
  return (source: Observable<T>) =>
    new Observable<R>((subscriber) => {
      return source.subscribe({
        next: (value) => subscriber.next(fn(value)),
        error: (err) => subscriber.error(err),
        complete: () => subscriber.complete(),
      });
    });
}

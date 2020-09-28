import { Observable } from "rxjs";

/**
 * Aufgabe: Benutze den Obsevable constructor um alle Werte eine Arrays
 * aus zu liefern (implementiere dein eigenes from(..))
 */

function fromArray(values) {
  return new Observable(observer => {
    for (let value of values) {
      observer.next(value);
    }
    observer.complete();
  });
}

var arr$ = fromArray([1, 2, 3, 4, 5]);

arr$.subscribe({
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log("complete"),
});

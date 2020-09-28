import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

/**
 * Aufgabe: starte ein interval(1000) und beende es nach 10 Sekunden
 * wieder auf eine deklerative Art. Logge die Ausgabe des intervals über
 * console.log.
 */

 const destroy$ = new Subject<void>();

 interval(1000)
  .pipe(takeUntil(destroy$))
  .subscribe(val => console.log(val));

 setTimeout(() => {
   destroy$.next();
   destroy$.complete();
 }, 10000);
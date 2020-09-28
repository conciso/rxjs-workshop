/**
 * Aufgabe: nutze ein interval(1000) und logge die Werte von 10 ungeraden
 * Zahlen über einen custom operator "takeOdd" über console.log
 */

import { interval } from "rxjs";
import { filter, take } from "rxjs/operators";

const obs = interval(1000).pipe(
    take(10),
    takeOdd()
  );
  
  obs.subscribe((x) => console.log(x));
  
  function takeOdd() {
    return filter((x: number) => x % 2 !== 0);
  }
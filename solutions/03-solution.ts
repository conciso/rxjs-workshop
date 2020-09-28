/**
 * Aufgabe: nutze ein Iínterval(1000) und logge die Werte von 10 geraden
 * Zahlen über console.log
 */

import { interval } from "rxjs";
import { filter, map, take } from "rxjs/operators";

const obs = interval(1000).pipe(
    take(10),
    filter((x) => x % 2 === 0),
    map((x) => x * 10)
  );
  
  obs.subscribe((x) => console.log(x));
  
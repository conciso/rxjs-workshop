import { from, of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";

/**
 * Aufgabe: Erstelle ein Observable welches {name: 'Klaus'} und {name: 'Andreas'}
 * emitted und diese mit { age: 30 } erweitert, indem du 2 Observables Kombinierst
 * 
 * Ergebnis: --{ name: 'Klaus', age: 30 }--{ name: 'Andreas', age: 30 }--|->
 */

type Person = { name: string };
const source: Person[] = [{ name: "Klaus" }, { name: "Andreas" }];
const age$ = of({ age: 30 });

from(source)
  .pipe(
    mergeMap((person: Person) => {
      return age$.pipe(map(age => {
        return {...person, ...age};
      }));
    })
  )
  .subscribe((person) => console.log(person));

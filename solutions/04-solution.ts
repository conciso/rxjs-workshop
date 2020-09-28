/**
 * Aufgabe: Sorge dafür, dass jeweils nur der Name über console.log geloggt
 * wird und aufeinander folgende dubletten gefiltert werden
 */

import { from } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

type Person = { name: string };

const klaus = { name: "Klaus" };
const gabi = { name: "Gabi" };
const andreas = { name: "Andreas" };
const source: Person[] = [klaus, klaus, gabi, gabi, gabi, andreas, andreas, gabi];

from(source)
  .pipe(
    map((pers : Person) => pers.name),
    distinctUntilChanged()
  )
  .subscribe((name) => console.log(name));

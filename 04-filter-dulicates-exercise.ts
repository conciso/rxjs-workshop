import { } from "rxjs";
import { } from "rxjs/operators";

/**
 * Aufgabe: Sorge dafür, dass jeweils nur der Name über console.log geloggt
 * wird und aufeinander folgende dubletten gefiltert werden
 */

type Person = { name: string };

const klaus = { name: "Klaus" };
const gabi = { name: "Gabi" };
const andreas = { name: "Andreas" };
const source: Person[] = [klaus, klaus, gabi, gabi, gabi, andreas, andreas, gabi];

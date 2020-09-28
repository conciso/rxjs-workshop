## Willkommen!

### Setup

* Install git and clone this repository
* Run `npm install`

### Nützliche Links:

* https://github.com/ReactiveX/RxJS (official source code)
* https://rxjs.dev (official docs)
* https://rxmarbles.com
* https://reactive.how/rxjs

## Wichtige Operatoren

Creation:

* `interval`
* `from`
* `of`

Transformation:

* `map`
* `scan`

Filtering:

* `filter`
* `take`
* `skip`

Combination:

* `concat` (einer nach dem anderen)
* `merge` (parallel, "OR")
* `startWith(x)` (alias für `concat` und `of(x)`)
* `combineLatest` (parallel, "AND")

Flattening:

* `switchAll` (concurrency 1, with cancellation)
* `concatAll` (concurrency 1, waits for completion)
* `mergeAll` (infinite concurrency)

Others:

* `tap`
* `delay`

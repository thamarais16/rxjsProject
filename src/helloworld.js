import { of } from "rxjs";
import { map } from "rxjs/operators";


let hello = of("hello", "world").pipe(
    map(item => {
        return item;
    })
);

hello.subscribe(
    data => console.log(data),
    err => console.log(err),
    () => console.log("completed")
)
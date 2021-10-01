import { of } from "rxjs";
import { map } from "rxjs/operators";


let hello = of("hello", "world").pipe(
    map(item => {
        return item;
    })
);

hello.subscribe(
    dat => console.log(dat),
    err => console.log(err),
    () => console.log("completed")
)
import { Observable, of, from, pipe, timer, filter } from "rxjs";
import { 
    map, 
    tap,
    delay,
    delayWhen
} from "rxjs/operators";


// let ofOpr = of(1, 2, 3, 4, 5);

//of opr
// let ofCusPipe = pipe(
    
//     tap(val => { console.log("before changes "+ val)}),
//     filter(val => { return val % 2 == 0;}),
//     delayWhen(item => timer(3*1000)),
// );

// ofCusPipe(ofOpr).subscribe(
//     (data) => { console.log("after changed"+ data); },
//     (err) => { console.log("error"); },
// );


//from opr
// let fromOpr = from(gen()).pipe(
//     delayWhen(item => timer(4000)),
//     tap(val => { console.log(val)})
// ).subscribe();

// function* gen(){
//     let i = 1;
//     while(i<=5){
//         yield i;
//         i++;
//     }
// }

//timer 

let timerOpr = timer(1000, 3000).pipe(
    tap(val => {console.log(val)})
).subscribe();
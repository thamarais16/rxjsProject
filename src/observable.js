import { observable, Observable } from "rxjs";

const obs = new Observable(observer => {
    observer.next(10);
    observer.next(20);
    observer.next(30);
    setTimeout(()=>{ observer.next(40)}, 3000);
    setTimeout(()=>{ observer.complete()}, 5000);
})


// console.log("before observable");

// obs.subscribe({
//     next(data) {
//         console.log(data)
//     },
//     error(err ) {
//         console.log(err)
//     },
//     complete() {
//         console.log("completed")
//     }
// })

// console.log("after observable");



let obser = Observable.create((observr)=>{
    try{
        setTimeout(()=>{ observr.next(10)}, 1000);
        setTimeout(()=>{ observr.next(20)}, 3000);
        setTimeout(()=>{ observr.next(30)}, 5000);
        setTimeout(()=>{ observr.next(40)}, 7000);
        setTimeout(()=>{ observr.complete()}, 9000);
    }catch(e){
        observr.error(e)
    }
})

obser.subscribe(
    (data) => {console.log(data)},
    (err) =>{ console.log(err)},
    () => {console.log("completed")},
)
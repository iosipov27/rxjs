import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/Observable/fromEvent';



// let obs = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     obs.subscribe(addItem);
// }, 5000)




const observable = Observable.create((observer: any) => {
    observer.next('Hello Man');
    observer.next('How are you?');
    setInterval(() => {
        observer.next('Not bad');
    }, 2000)
});

const observer = observable.subscribe(
    (item: any) => { addItem(item) },
    (error: any) => { addItem(error) },
    () => { addItem('Complete') }
);

const observer2 = observable.subscribe((item: any) => addItem(item));

observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe();
}, 5000)









function addItem(val: any) {
    let node = document.createElement('li');
    let text = document.createTextNode(val);
    node.appendChild(text);
    document.getElementById('output').appendChild(node);
}
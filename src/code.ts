import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import 'rxjs/add/operator/share';



// let obs = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     obs.subscribe(addItem);
// }, 5000)




const observable = Observable.create((observer: any) => {
    observer.next('Hello Man');
    observer.next('How are you?');
    setInterval(() => {
        observer.next('Not bad');
    }, 3000)
}).share()

const observer = observable.subscribe(
    (item: any) => { addItem(item) },
    (error: any) => { addItem(error) },
    () => { addItem('Complete') }
);

setTimeout(() => {
    const observer2 = observable.subscribe((item: any) => addItem('Subscriver2: ' + item));
}, 1000);











function addItem(val: any) {
    let node = document.createElement('li');
    let text = document.createTextNode(val);
    node.appendChild(text);
    document.getElementById('output').appendChild(node);
}
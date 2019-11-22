import { Observable } from 'rxjs/Observable';


const observable = Observable.create((observer: any) => {
    observer.next('Hello Man');
    observer.next('How are you?');
    setInterval(() => {
        observer.next('Not bad');
    }, 1000)
});


function addItem(val: any) {
    let node = document.createElement('li');
    let text = document.createTextNode(val);
    node.appendChild(text);
    document.getElementById('output').appendChild(node);
}


const observer = observable.subscribe(
    (item: any) => { addItem(item) },
    (error: any) => { addItem(error) },
    () => { addItem('Complete') }
);

setTimeout(() => {
    observer.complete();
    observer.unsubscribe();
}, 5000)
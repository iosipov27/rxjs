import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import 'rxjs/add/operator/share';



const subject = new AsyncSubject();

const observer1 = subject.subscribe(
    (data) => addItem('1 ' + data),
    (err) => addItem(err),
    () => addItem('Complete')
)

let i = 0;

setInterval(() => subject.next(i++), 100)


setTimeout(() => {
    const observer2 = subject.subscribe((data) => addItem('2 ' + data));
    subject.complete();
}, 500)












function addItem(val: any) {
    let node = document.createElement('li');
    let text = document.createTextNode(val);
    node.appendChild(text);
    document.getElementById('output').appendChild(node);
}
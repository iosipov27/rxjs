import { Subject, BehaviorSubject } from 'rxjs';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import 'rxjs/add/operator/share';



const subject = new BehaviorSubject('First');

const observer1 = subject.subscribe(
    (data) => addItem('1 ' + data),
    (err) => addItem(err),
    () => addItem('Complete')
)

subject.next('Start')
subject.next('Start1')
subject.next('Start2')
subject.next('Start3')

const observer2 = subject.subscribe((data) => addItem('2 ' + data));


subject.next('Second')
subject.next('Third')

observer2.unsubscribe()

subject.next('Forth')









function addItem(val: any) {
    let node = document.createElement('li');
    let text = document.createTextNode(val);
    node.appendChild(text);
    document.getElementById('output').appendChild(node);
}
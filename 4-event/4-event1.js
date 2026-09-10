import { EventEmitter } from "node:events";

const myNewEventObject = new EventEmitter();

myNewEventObject.on('myEvent', (data) => {  //Callbackfunction
    // Programmcode wenn das Event ausgelöst wird
    console.log(data);
});

myNewEventObject.emit('myEvent', 'Event 1 Daten schicken...');
myNewEventObject.emit('myEventSecond', 'Daten von Event 2');
myNewEventObject.emit('myEvent', 'nochmal Event call Nummer 3');

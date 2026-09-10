const target = new EventTarget();

target.addEventListener('specialEvent', (event) => {
    // wenn Event ausgelöst wird
    console.log(`${event.type} wurde ausgelöst.`);
});

const event = new Event('specialEvent');

target.dispatchEvent(event); //Auslöser
target.dispatchEvent(event);

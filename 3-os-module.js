const os = require('node:os');  // ganzes Modul wird geladen
console.log(os.uptime());

console.log(os.release());
console.log(os.version());
console.log(os.freemem());

// nur eine Funktion wird geladen
const { uptime } = require('node:os');
console.log(uptime());

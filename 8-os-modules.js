const os = require('os');

// info of current user
const user = os.userInfo();
console.log(user);

//method returns user uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const current = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};

console.log(current);
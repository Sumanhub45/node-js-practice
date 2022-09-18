const os = require('os');


// platform method returns the operating system platform
console.log(os.platform());

// cpu arch method returns the CPU architecture
console.log(os.arch());

// cpu core method returns the number of logical CPU cores
console.log(os.cpus());

// free memory method returns the amount of free system memory in bytes
console.log(os.freemem());

// total memory method returns the total amount of system memory in bytes
console.log(os.totalmem());

// home directory method returns the home directory of the current user
console.log(os.homedir());

// uptime method returns the system uptime in seconds
console.log(os.uptime());

// hostname method returns the hostname of the operating system
console.log(os.hostname());

// network interfaces method returns an array of objects containing information about each network interface
console.log(os.networkInterfaces());

// release method returns the operating system release
console.log(os.release());

// type method returns the operating system name
console.log(os.type());

// userInfo method returns an object containing information about the current user
console.log(os.userInfo());

// tmpdir method returns the operating system's default directory for temporary files
console.log(os.tmpdir());

// endianness method returns the endianness of the CPU
console.log(os.endianness());

// loadavg method returns an array containing the 1, 5, and 15 minute load averages
console.log(os.loadavg());

// constants method returns an object containing commonly used constants
console.log(os.constants);







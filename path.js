const path = require('path');

// Base name method returns the last portion of a path 
console.log(path.basename(__filename));

// Directory name method returns the directory name of a path
console.log(path.dirname(__filename));

// File extension method returns the extension of the path
console.log(path.extname(__filename));

// Create path object method returns an object from a path
console.log(path.parse(__filename));

// Concatenate paths method concatenates the given path segments
console.log(path.join(__dirname, 'test', 'hello.html'));

// Normalize method normalizes the given path
console.log(path.normalize('/test//test1//test2/hello.html'));

// Resolve method resolves a sequence of paths or path segments into an absolute path
console.log(path.resolve(__dirname, 'test', 'hello.html'));

// Is absolute method determines whether a path is absolute
console.log(path.isAbsolute(__dirname));

// Relative method returns the relative path from from to to based on the current working directory
console.log(path.relative(__dirname, '/test'));

// To namespaced path method returns a path as a string in the format suitable for use as a file URL
console.log(path.toNamespacedPath(__dirname));

// Format method returns a path string from an object
console.log(path.format({
    root: '/',
    dir: '/test',
    base: 'hello.html',
    ext: '.html',
    name: 'hello'
}));

// Separator method returns the platform specific path segment separator
console.log(path.sep); 

// Delimiter method returns the platform specific path delimiter
console.log(path.delimiter);








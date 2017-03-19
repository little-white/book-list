let fs = require('fs');
let bookList = fs.readFileSync('book', 'utf8');

bookList.split(/\r?\n/).forEach((elem) => {
    if (!fs.existsSync(`《${elem}》`)) {
    	fs.mkdir(`《${elem}》`, 0777);
    }

    fs.writeFile(`《${elem}》/README.md`);
});

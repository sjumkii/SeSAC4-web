// readFile callback형식
const fs = require("fs");

fs.readFile( './info.txt', function (err, data) {
    if (err) throw err;

    console.log(data)
    console.log(data.toString());
})


// readFile promise형식
const fs = require("fs").promises;

fs.readFile('./info.txt')
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
})


// writeFile 방법1
const fs = require("fs").promises;

fs.writeFile('./write.txt', '가나다라')
.then(() => {
    return fs.readFile('./write.txt');
})
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
})


// writeFile 방법2
const fs = require("fs").promises;

fs.writeFile('./write.txt', '가나다라')
.then(() => {
    return fs.readFile('./write.txt');
})
.then((data) => {
    return console.log(data);
})
.then((data) => {
    console.log(data.toString());
})
.catch((err) => {
    console.error(err);
})


// copyFile
const fs = require("fs").promises

fs.copyFile('./write.txt', './copy.txt')
.then(() => {
    console.log("복사 완료");
})
.catch((err) => {
    console.error(err)
})


// async/await
const fs = require("fs").promises;

async function exec() {
    await fs.mkdir('./sesac');
    await fs.writeFile('./sesac/write.txt', '가나다라');
    await fs.copyFile('./sesac/write.txt', './sesac/write1.txt');
    await fs.rename("./sesac/write1.txt", "./sesac/new.txt");
}

exec();
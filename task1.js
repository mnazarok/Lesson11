//Task1
const FiveSecond = 5000;

function task1(text, time) {
    setTimeout(() => {
        console.log(`${text}`)
    }, time );
};

task1("This is Sparta", FiveSecond);


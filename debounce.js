function debounce(f, ms) {
    let timer = null;

    return function(...args) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(onComplete);
    };
}

function f(x) { console.log(x) }
let f = debounce(f, 1000);

f(1);
f(2);

setTimeout(function() { f(3)}, 1100);
setTimeout(function() { f(4)}, 1200);
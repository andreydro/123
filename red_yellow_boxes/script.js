const checkCross = arr => {
    arr.forEach(box => {
        const { top, left, right, bottom } = box.getBoundingClientRect();
        arr.forEach(anyBox => {
            if (box === anyBox) return;
            const coord = anyBox.getBoundingClientRect();
            if (
                bottom < coord.top ||
                top > coord.bottom ||
                (right < coord.left || left > coord.right)
            ) {
                document.querySelector(".trafficlight").classList.remove("redColor");
            } else {
                document.querySelector(".trafficlight").classList.add("redColor");
            }
        });
    });
};

const updatePosition = () => {
    const { left, top, right, bottom } = document
        .querySelector("#main-box")
        .getBoundingClientRect();
    document.querySelectorAll(".field").forEach((field, index) => {
        const box = document.querySelectorAll(".box")[index];
        if (+field.querySelector(".x").value < left)
            field.querySelector(".x").value = left;
        if (+field.querySelector(".x").value >
            right - field.querySelector(".w").value
        )
            field.querySelector(".x").value = right - field.querySelector(".w").value;
        if (+field.querySelector(".y").value < top)
            field.querySelector(".y").value = top;
        if (+field.querySelector(".y").value >
            bottom - field.querySelector(".h").value
        )
            field.querySelector(".y").value =
            bottom - field.querySelector(".h").value;
        box.style.left = +field.querySelector(".x").value + "px";
        box.style.top = +field.querySelector(".y").value + "px";
        box.style.width = +field.querySelector(".w").value + "px";
        box.style.height = +field.querySelector(".h").value + "px";
    });
    checkCross(document.querySelectorAll(".box"));
};

document.querySelectorAll(".field").forEach(field => {
    field.addEventListener("change", e => {
        updatePosition();
    });
});

const move = (e, elem, index, offsetX, offsetY, limits) => {
    const { width, height } = elem.getBoundingClientRect();
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    x =
        x < limits.left ?
        limits.left :
        x > limits.right - width ?
        limits.right - width :
        x;
    y =
        y < limits.top ?
        limits.top :
        y > limits.bottom - height ?
        limits.bottom - height :
        y;
    document
        .querySelectorAll(".field")[index].querySelectorAll("input")
        .forEach(el => {
            if (el.className === "x") el.value = x;
            if (el.className === "y") el.value = y;
        });
    updatePosition();
};

document.querySelectorAll(".box").forEach((box, i, arr) => {
    box.addEventListener("mousedown", e => {
        const offsetX = e.clientX - box.getBoundingClientRect().left;
        const offsetY = e.clientY - box.getBoundingClientRect().top;
        const limits = document.querySelector("#main-box").getBoundingClientRect();
        arr.forEach(el => {
            el === box ? el.classList.add("zIndex") : el.classList.remove("zIndex");
        });
        document.body.onmousemove = e => {
            move(e, box, i, offsetX, offsetY, limits);
            checkCross(arr);
        };
    });
    document.body.addEventListener("mouseup", _ => {
        document.body.onmousemove = null;
    });
});

updatePosition();
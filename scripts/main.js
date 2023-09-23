const rootEl = document.querySelector('.container');
const switchActiveBtn = document.querySelector('.swich-active');
const changeBgBtn = document.querySelector('.change-bg');

// HELPERS
const arrToRgb = (data) => {
    return `rgb(${data.r},${data.g},${data.b})`;
}

// UI
switchActiveBtn.addEventListener('click', () => {
    switchActiveBox();
});

changeBgBtn.addEventListener('click', () => {
    changeBgActiveBox();
});


// CONFIG
let blockCount = 4;
let baseBgColor = {r: 12, g: 212, b: 56};

// MODEL
let activeBoxNo = 0;
let bgsColor = [];

// VIEW
const renderInitBox = () => {
    let html = '';

    for(let i = 0; i < blockCount; i++) {
        const bgColor = arrToRgb(bgsColor[i]);
        if(activeBoxNo === i) {
            html = `${html}<div style="background-color:${bgColor}" class="box active">${i}</div>`;
        } else {
            html = `${html}<div style="background-color:${bgColor}" class="box">${i}</div>`;
        }
    }

    rootEl.innerHTML = html;
}

const renderSwitchActiveBox = (no) => {
    // const curActiveEl = rootEl.querySelector('.active');
    // curActiveEl.classList.remove('active');
    rootEl
        .querySelector('.active')
        .classList.remove('active');

    rootEl
        .querySelector(`.box:nth-child(${no+1})`)
        .classList.add('active');
}

const changeBoxBg = (no) => {
    const bgObj = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };

    rootEl
        .querySelector(`.box:nth-child(${no+1})`)
        .style.backgroundColor = arrToRgb(bgObj);
}

// CONTROLLER
const switchActiveBox = () => {
    activeBoxNo = activeBoxNo + 1;
    if(activeBoxNo >= blockCount) {
        activeBoxNo = 0;
    }

    renderSwitchActiveBox(activeBoxNo);
}

const changeBgActiveBox = () => {
    changeBoxBg(activeBoxNo);
}

// RUNNERS
for(let i = 0; i < blockCount; i++) {
    bgsColor.push({...baseBgColor});
}

renderInitBox();


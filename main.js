function range2percent(value, min, max) {
    let percent = (value - min) / (max - min) * 100;

    if (percent < 0) return 0;
    if (percent > 100) return 100;

    return percent
}

function round(num, decimal) {
    multiplier = Math.pow(10, decimal);

    return Math.round(num * multiplier) / multiplier;
}

function labelPosition(el) {
    let position = round((range2percent(el.value, el.min, el.max) - 50), 2);

    return position;
}

function updatePosition() {
    label.style.transform = 'translateX(' + labelPosition(range) + '%)'
}

function updateValue() {
    output.textContent = range.value;
}

function updateSlider() {
    updatePosition();
    updateValue();
}

let label = document.querySelector('#label')
let output = document.querySelector('#output')
let range = document.querySelector('#range')
let ticks = document.querySelector('#ticks').children

for (var i = 0; i < ticks.length; i++) {
    let position = ticks[i].value / range.max * 100

    ticks[i].style.left = position + '%'
}

updateSlider()

range.addEventListener('input', updateSlider, false)

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var num = randomIntFromInterval(0, 1)
switch (num) {
    case 1:
        window.location = "https://goo.gl/forms/h8eAZFmzSIQJQF7l1"
        break;
    case 0:
        window.location = "https://goo.gl/forms/znLeFgGRykpV0XAW2"
        break;
    default:
        break;
}
console.log(num)
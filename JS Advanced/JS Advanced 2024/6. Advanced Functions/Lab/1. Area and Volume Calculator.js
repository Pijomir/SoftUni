function solve(area, vol, input) {
    let data = JSON.parse(input);
    let result = data.map(a => {
        a = {'area': area.call(a), 'volume': vol.call(a)};
        return a;
    });
    return result
}

(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]`));

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

function area() {
    return Math.abs(this.x * this.y);
}

  
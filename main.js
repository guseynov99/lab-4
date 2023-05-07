let a = prompt("1-ci qiymeti daxil edin: ");
let b = prompt("2-ci qiymeti daxil edin: ");
let c = prompt("3-ci qiymeti daxil edin: ");
let d = prompt("4-ci qiymeti daxil edin: ");
let ortalama;

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

ortalama = (a + b + c + d) / 4;

if (a >= 0 && a <= 10 && b >= 0 && b <= 10 && c >= 0 && c <= 10 && d >= 0 && d <= 10) {
    alert(`Imathan qiymetinin ortalamasi: ${ortalama}`)
} else {
    alert(`0-10 araliginda eded daxil edin!`)
}
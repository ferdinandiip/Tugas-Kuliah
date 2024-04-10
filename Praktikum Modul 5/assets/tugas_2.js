let nilai2 = ["Angga", "joko", "Perdi", "Syarif"]
nilai2.forEach(i => {
    console.log(i);
});

let nilai1 = ["Aku", "Kamu"]

console.log("Sesudah Digabungkan");
let nilai3 = ["Angga", "joko", "Perdi", "Syarif", ...nilai1];
nilai3.forEach(i => {
    console.log(i);
});
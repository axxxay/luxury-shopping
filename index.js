let rings = document.getElementById("rings");
let Bracelets = document.getElementById("Bracelets");
let earrings = document.getElementById("earrings");
let necklaces = document.getElementById("necklaces");
let nosePins = document.getElementById("nosePins");

let ringsClicked = document.getElementById("ringsClicked");
let braceletsClicked = document.getElementById("braceletsClicked");
let earringsClicked = document.getElementById("earringsClicked");
let necklaceClicked = document.getElementById("necklaceClicked");
let nosepinsClicked = document.getElementById("nosepinsClicked");

let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let line5 = document.getElementById("line5");


ringsClicked.addEventListener('click', function() {
    rings.classList.remove("d-none");
    Bracelets.classList.add("d-none");
    earrings.classList.add("d-none");
    necklaces.classList.add("d-none");
    nosePins.classList.add("d-none");
    line1.classList.remove("d-none");
    line2.classList.add("d-none");
    line3.classList.add("d-none");
    line4.classList.add("d-none");
    line5.classList.add("d-none");
});
braceletsClicked.addEventListener('click', function() {
    rings.classList.add("d-none");
    Bracelets.classList.remove("d-none");
    earrings.classList.add("d-none");
    necklaces.classList.add("d-none");
    nosePins.classList.add("d-none");
    line1.classList.add("d-none");
    line2.classList.remove("d-none");
    line3.classList.add("d-none");
    line4.classList.add("d-none");
    line5.classList.add("d-none");
});
earringsClicked.addEventListener('click', function() {
    rings.classList.add("d-none");
    Bracelets.classList.add("d-none");
    earrings.classList.remove("d-none");
    necklaces.classList.add("d-none");
    nosePins.classList.add("d-none");
    line1.classList.add("d-none");
    line2.classList.add("d-none");
    line3.classList.remove("d-none");
    line4.classList.add("d-none");
    line5.classList.add("d-none");
});
necklaceClicked.addEventListener('click', function() {
    rings.classList.add("d-none");
    Bracelets.classList.add("d-none");
    earrings.classList.add("d-none");
    necklaces.classList.remove("d-none");
    nosePins.classList.add("d-none");
    line1.classList.add("d-none");
    line2.classList.add("d-none");
    line3.classList.add("d-none");
    line4.classList.remove("d-none");
    line5.classList.add("d-none");
});
nosepinsClicked.addEventListener('click', function() {
    rings.classList.add("d-none");
    Bracelets.classList.add("d-none");
    earrings.classList.add("d-none");
    necklaces.classList.add("d-none");
    nosePins.classList.remove("d-none");
    line1.classList.add("d-none");
    line2.classList.add("d-none");
    line3.classList.add("d-none");
    line4.classList.add("d-none");
    line5.classList.remove("d-none");
});
let career = ["doctor", "McDonald's employee", "programmer", "actor", "street vendor", "facotry worker"];
let home = ["Mansion", "Apartment", "Shack", "House", "old cabin", "Sewer"];
let car = ["Lambo", "Bugati", "Prius", "bus", "cardboard box with wheels", "bike"];

const whichHome = getHome();
const whichCar = getCar();
const numOfYears = getYears();

function getCareer() {
    return career[Math.floor(Math.random() * 6)];
}

function plusMinus() {
    if (Math.random() < 0.2) {
        return "-";
    }
    else {
        return "";
    }
}

function getSalary() {
    return (Math.floor(Math.random() * 100));
}

function getHome() {
    return home[Math.floor(Math.random() * 6)];
}

function getChildrenCount() {
    return (Math.floor(Math.random() * 100));
}

function getCar() {
    return car[Math.floor(Math.random() * 6)];
}

function getYears() {
    return (Math.floor(Math.random() * 70));
}

function optionalStatement1() {
    if (whichHome == "Mansion" && (whichCar == "Lambo" || whichCar == "Bugatti")) {
        return "Wow, you are quite privileged!";
    }
    else {
        return "";
    }
}

function optionalStatement2() {
    if (numOfYears <= 10) {
        return "Yikes! Gotta make your remaining years worth it!"
    }
    else {
        return "";
    }
}

function mash(name) {
    return ( name 
           + ", you will be a "
           + getCareer()
           + " and make "
           + plusMinus()
           + "$"
           + getSalary()
           + ",000 a year. You will live in a "
           + whichHome
           + ", have "
           + getChildrenCount()
           + " kids, and drive a "
           + whichCar
           + ". You have "
           + numOfYears
           + " more years to live.");
}
if (process.argv[2] == undefined) {
    throw "Please enter your name after 'node mash.js'";
}
else {
    console.log();
    console.log(mash(process.argv[2]));
    console.log(". . . . . . . . . . . . . . . . . . . .");
    console.log(optionalStatement1());
    console.log(optionalStatement2());
}
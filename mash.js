let career = ["doctor", "McDonald's employee", "programmer", "actor", "street vendor", "facotry worker"];
let home = ["Mansion", "Apartment", "Shack", "House", "old cabin", "Sewer"];
let car = ["Lambo", "Bugati", "Prius", "bus", "cardboard box with wheels", "bike"]

function mash(name) {
    return ( name 
           + ", you will be a "
           + getCareer()
           + " and make "
           + plusMinus()
           + "$"
           + getSalary()
           + ",000 a year. You will live in a "
           + getHome()
           + ", have "
           + getChildrenCount()
           + " kids, and drive a "
           + getCar()
           + ". You have "
           + getYears()
           + " more years to live.");
}
if (process.argv[2] == undefined) {
    throw "Please enter your name after 'node mash.js'";
}
else {
    console.log(mash(process.argv[2]));
}

function getCareer() {
    return career[Math.floor(Math.random() * 6)];
}

function plusMinus() {
    if (Math.random() < 0.5) {
        return "";
    }
    else {
        return "-";
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
    return (Math.floor(Math.random() * 40));
}
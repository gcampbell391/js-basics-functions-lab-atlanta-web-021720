// Code your solution in this file!
let result;

function distanceFromHqInBlocks(value) {
    if (value >= 42)
        result = value - 42
    else
        result = 42 - value;
    return result
}

function distanceFromHqInFeet(value) {
    return result = distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(value1, value2) {
    if (value1 > value2)
        result = (value1 - value2) * 264
    else
        result = (value2 - value1) * 264
    return result
}

function calculatesFarePrice(start, destination) {
    let rideLength = distanceTravelledInFeet(start, destination)
    if (rideLength > 2500)
        result = "cannot travel that far"
    else if (rideLength > 2000)
        result = 25
    else if (rideLength > 400)
        result = (rideLength - 400) * .02
    else if (rideLength < 401)
        result = 0
    return result
}
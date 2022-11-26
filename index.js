const drivers= ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers=function(drivers){
    return drivers.slice(2);
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
        return integer*integer
    }
}
createFareMultiplier(4);

const fareDoubler=function createFareMultiplier(fare){
    return fare*2;
}

const fareTripler= function createFareMultiplier(fare){
    return fare*3
}
function selectDifferentDrivers(drivers,x){

    if (x=returnLastTwoDrivers){
        return drivers.slice(2);
    }else if(x=returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    }
}
selectDifferentDrivers(["Antonia", "Nuru", "Amari", "Mo"],returnFirstTwoDrivers)

// https://github.com/mhalamin978/assignment
// 01.Kilometer to meter
function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Try a valid number"
    } else {
        meter = kilo * 1000;
        return meter;
    }
}
// 02. Budget Calculator
function budgetCalculator([watch, mobile, laptop]) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Please try a valid Number"
    } else {
        watch_cost = 50 * watch;
        mobile_cost = 100 * mobile;
        laptop_cost = 500 * laptop;
        total = watch_cost + mobile_cost + laptop_cost;
        return total;
    }
}
// 03. Hotel Cost
function hotelCost(Day) {
    var Bill = 0;
    if (Day < 0) {
        return "Please try a valid Number";
    } else if (Day <= 10) {
        Bill = Day * 100;
        return Bill;
    } else if (Day <= 20) {
        first_10_day = 10 * 100;
        remaining = Day - 10;
        second_Bill = 80 * remaining;
        Bill = first_10_day + second_Bill;
        return Bill;
    } else {
        first_10_day = 10 * 100;
        second_10_day = 10 * 80;
        remaining_day = Day - 20;
        third_bill = remaining_day * 50;
        Bill = first_10_day + second_10_day + third_bill;
        return Bill;
    }
}
//04. Mega Friend
function megaFriend(array) {
    var lgth = 0;
    var longest;
    for (var i = 0; i < array.length; i++) {
        
        if (array[i].length > lgth) {
            var lgth = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}


// var result = megaFriend(["karim","rahman","kalamuddin"]);
// console.log(result);
// var result = hotelCost(71);
// console.log(result);
// var result = kilometerToMeter(9);
// console.log(result);
// var result2 = budgetCalculator([2, 3, 0]);
// console.log(result2);
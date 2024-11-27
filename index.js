// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(office = 'go to the office') {
    return `This Monday, I will ${office}.`
}
mondayWork();

function wrapAdjective(wrap = "*") {
    const inner = function(word = 'special') {
        return `You are ${wrap}${word}${wrap}!`
    };
    return inner;
}
    wrapAdjective();
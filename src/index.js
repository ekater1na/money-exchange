// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   
    let str = [50, 25, 10, 5, 1];
    let obj = {};

    if (currency > 10000) {
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        };
    }

    if (currency == 0) {
        return {};
    }
    for (let i = 0; i < str.length; i++) {
        let j = Math.floor(currency / str[i]); 
        if (j > 0) {
            obj[i] = j;
            currency = currency - (j * str[i]); 

        } else {
            j = 0;
            obj[i] = 0;

        }
        j = 0;
    }
    if (obj[0] != 0) {
        obj.H = obj[0];
    }
    if (obj[1] != 0) {
        obj.Q = obj[1];
    }
    if (obj[2] != 0) {
        obj.D = obj[2];
    }
    if (obj[3] != 0) {
        obj.N = obj[3];
    }
    if (obj[4] != 0) {
        obj.P = obj[4];
    }

    for (let i = 0; i < str.length; i++) {
        delete obj[i];
    }
    
    return obj;
}
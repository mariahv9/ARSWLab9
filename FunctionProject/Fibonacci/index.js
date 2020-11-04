var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;

    if (nth < 0)
        throw 'must be greater than 0'
    else {
        answer = fibonacciF(nth);
    }

    context.res = {
        body: answer.toString()
    };
}

var memorizacion = {0:bigInt.zero, 1:bigInt.one};
function fibonacciF (nth){
    if (nth in Object.keys(memorizacion)){
        return memorizacion[nth];
    } else {
        memorizacion [nth] = fibonacciF(nth - 1).add(fibonacciF(nth - 2));
        return memorizacion[nth];
    }
}


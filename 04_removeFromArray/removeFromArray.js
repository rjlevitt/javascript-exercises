const removeFromArray = function(...args) {
    const inputList = args[0];
    const outputList = [];

    inputList.forEach((item) => {
        if (!args.includes(item)) {
            outputList.push(item);
        }
    });
    return outputList
};

// Do not edit below this line
module.exports = removeFromArray;

var cacheOp = function (obj, arg1, arg2) {
    var new_key = "".concat(arg1, "_").concat(arg2);
    if (obj[new_key]) {
        return obj[new_key];
    }
    obj[new_key] = arg1 + arg2;
    return;
};
var sampleCache = {};
console.log(sampleCache);
console.log(cacheOp(sampleCache, 4, 2)); // set
console.log(cacheOp(sampleCache, 4, 2)); // get
console.log(sampleCache);
console.log(cacheOp(sampleCache, 20, 33)); // set
console.log(cacheOp(sampleCache, 20, 33)); // get
console.log(sampleCache);

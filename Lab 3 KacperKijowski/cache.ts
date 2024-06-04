type MyCache = {
    [key: string]: number;
}

const cacheOp = (obj: MyCache, arg1: number, arg2: number) => {
    const new_key = `${arg1}_${arg2}`;
    if (obj[new_key]) {
        return obj[new_key];
    }
    obj[new_key] = arg1 + arg2
    return;
}

const sampleCache: MyCache = {};
console.log(sampleCache);
console.log(cacheOp(sampleCache, 4, 2)); // set
console.log(cacheOp(sampleCache, 4, 2)); // get
console.log(sampleCache);
console.log(cacheOp(sampleCache, 20, 33)); // set
console.log(cacheOp(sampleCache, 20, 33)); // get
console.log(sampleCache);
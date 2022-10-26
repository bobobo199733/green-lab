const mergeQueryData = (obj1, obj2) => {
    let mergedObjects = { ...obj2 };

    Object.keys(obj1).map(key => {
        if (!obj2[key]) {
            mergedObjects[key] = obj1[key];
        }
    });
    return mergedObjects;
};

export const mergeAllQueryData = (...objs) => objs.reduce(mergeQueryData, {});

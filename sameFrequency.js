function sameFrequency(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    };

    let counter1 = {};
    let counter2 = {};

    for(let i = 0; i < str1.length; i++){
        if (!counter1[str1[i]]) {
            counter1[str1[i]] = 1;
        } else {
            counter1[str1[i]]++;
        }
    }

    for(let i = 0; i < str2.length; i++){
        if (!counter2[str2[i]]) {
            counter2[str2[i]] = 1;
        } else {
            counter2[str2[i]]++;
        }
    }

    console.log('counter1', counter1);
    console.log('counter2', counter2);

    for (let property in counter1) {
        if (!counter2[property]) {
            return false;
        }

        if (counter2[property] !== counter1[property]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency('add', 'aba'));
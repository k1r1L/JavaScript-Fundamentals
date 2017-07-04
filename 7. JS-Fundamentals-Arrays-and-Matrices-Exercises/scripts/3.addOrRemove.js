function addOrRemove(arr) {
    let resultArr = [];
    let initial = 1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add') {
            resultArr.push(initial);
        }

        if(arr[i] === 'remove') {
            resultArr.pop();
        }

        initial += 1;
    }

    if(resultArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArr.join('\n'));
    }
}
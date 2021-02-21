function manipulateStudentRecord(obj, operation, prop, newValue) {
    if (operation==='delete'){
        let resultObj = {...obj};
        if(obj.hasOwnProperty(prop)){
            delete resultObj[prop];
        }
        return resultObj;
    }else if(operation === 'edit'){
        let resultObj = {...obj};
        if(obj.hasOwnProperty(prop)){
            resultObj[prop] = newValue;
        }
        return resultObj;
    }

}

function countDuplicate(numbers) {
    let numCount = {};
    for (let num of numbers){
        if(numCount[num] !== undefined){
            numCount[num]++;
        }else{
            numCount[num] = 1;
        }
    }
    return Object.keys(numCount).length
}

console.log(countDuplicate([1, 3, 3, 4, 4]));


function inventoryList() {
    let items = [];
    let add = (name) => {
        if(!items.includes(name)){
            items.push(name);
        }
    }

    let remove = (name) => {
        if(items.includes(name)){
            items.splice(items.indexOf(name), 1);
        }
    }

    let getList = () => {
        return items;
    }

    return {add, remove, getList}
}

let ops = inventoryList();
console.log(ops.getList());
ops.add('A');
console.log(ops.getList());

ops.add('B');
ops.add('C');
console.log(ops.getList());
ops.remove('B');
ops.remove('V');
console.log(ops.getList());


function makeInputVerifier(minimum, maximum) {
    let verify = (inputValue) => {
        if(inputValue < minimum){
            return 'Input is less than minimum'
        }else if (inputValue > maximum){
            return 'Input is more than maximum'
        }else{
            return 'Input in range'
        }
    }
    return verify;
}


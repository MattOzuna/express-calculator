const ExpressError = require("./expressError")

//====================================Helpers====================================//

const mean = (nums) =>{

    let sum = nums.reduce((acc,num)=>acc+num,0)
    return {response: {
        operation: 'mean',
        value: sum/(nums.length)
    }};
}

const median = (nums) =>{
    let answer = 0;
    
    if (nums.length % 2 === 1){
        let i = nums.length/2;
        answer = nums[i];
    } 
    else {
        let i = nums.length/2;
        answer = (nums[i] + nums[i-1])/2;
    }

    return {response: {
        operation: 'median',
        value: answer
    }};
}

const mode = (nums) =>{
    let counts = new Object()

    nums.map((num) => {
        if(!counts[num]){counts[num] = 1
    }
        else {
            counts[num] ++
        }
    })

    max = 0
    
    for (let key in counts){
        if (counts[key] > max){
            max = parseInt(key)
        }
    }

    if (max === 1){
        return {response: {
            operation: 'mode',
            value: 'No mode'
        }};
    }
    return {response: {
            operation: 'mode',
            value: max
        }};
}

const makeNums = (nums) => {
    const result = new Array()
    
    for (let num of nums){
        if (!parseInt(num)){
            throw new ExpressError (`${num} is not a number`, 400)
        }
        else{
            result.push(parseInt(num))
        }
    }
    return result
}

module.exports = {mean, median, mode, makeNums}
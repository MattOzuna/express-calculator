const express = require('express');

const app = express();

app.use(express.json());

//====================================ROUTES====================================//

app.get('/mean', (request, response) =>{
    //takes the query param and passes to the mean helper funtion
    //returns json
    return response.json(mean(request.query.nums.split(',')))
})


app.get('/median', (request, response) =>{
    //takes the query param and passes to the median helper funtion
    //returns json
    return response.json(median(request.query.nums.split(',')))
})


app.get('/mode', (request, response) =>{
    let nums = request.query.nums.split(',')
    return response.json(mode(request.query.nums.split(',')))

})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})

//====================================Helpers====================================//

const mean = (nums) =>{

    let sum = nums.reduce((acc,num)=>acc+parseInt(num),0)
    return {response: {
        operation: 'mean',
        value: sum/(nums.length)
    }};
}

const median = (nums) =>{
    let answer = 0;
    
    if (nums.length%2 === 1){
        let i = nums.length/2;
        answer = parseInt(nums[i]);
    } 
    else {
        let i = nums.length/2;
        answer = (parseInt(nums[i]) + parseInt(nums[i-1]))/2;
    }

    return {response: {
        operation: 'median',
        value: answer
    }};
}

const mode = (nums) =>{
    let counts = new Object()

    nums.map((num) => {
        if(!counts[num]){
            counts[num] = 1
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
const express = require('express');
const ExpressError = require("./expressError")
const {mean,median,mode,makeNums} = require("./helpers")

const app = express();

app.use(express.json());

//====================================ROUTES====================================//

app.get('/mean', (request, response, next) =>{
    //takes the query param and passes to the mean helper funtion
    //returns json
    try{
        if (!request.query.nums){
            throw new ExpressError ('nums are required', 400)
        }
        const nums = makeNums(request.query.nums.split(','))
        return response.json(mean(nums))
    }
    catch(err){
        return next(err)
    }
})


app.get('/median', (request, response, next) =>{
    //takes the query param and passes to the median helper funtion
    //returns json
    try{
        if (!request.query.nums){
            throw new ExpressError ('nums are required', 400)
        }
        const nums = makeNums(request.query.nums.split(','))
        return response.json(median(nums))
    }
    catch (err){
        return next(err)
    }
})


app.get('/mode', (request, response,next) =>{
    try{
        if (!request.query.nums){
            throw new ExpressError ('nums are required', 400)
        }
        const nums = makeNums(request.query.nums.split(','))
        return response.json(mode(nums))
    }
    catch (err){
        return next(err)
    }

})

//generic error handling
app.use((request,response,next) => {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
})

app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
      return res.status(status).json({
      error: {message, status}
    });
  });

app.listen(3000, () => {
    console.log('Server started on port 3000')
})


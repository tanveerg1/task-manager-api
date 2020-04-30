const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false    
});


// const me = new User({
//     name: '   Mike   ',
//     email: 'MIKE@EMAIL.COM ',
//     password: '123456'
// });

// me.save().then(() => {
//     console.log(me);
// }).catch(error => {
//     console.log('Error!', error);
// });


// const newTask = new Task({
//     description: 'Eat Lunch'
// });

// newTask.save().then(() => {
//     console.log(newTask);
// }).catch(error => {
//     console.log(error);
// });


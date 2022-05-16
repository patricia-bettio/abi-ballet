const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// TODO: find a way to protect password
const MONGODB_CLUSTER = 'mongodb+srv://pfbettio:admin123@abi-ballet.ap7fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// connect to the MONGODB_CLUSTER, if it doesnt workerData, connect to the local db
async function connectDB() {
    try {
        await mongoose.connect(MONGODB_CLUSTER);
        console.log('MongoDB connected!!');
        
        const Schema = mongoose.Schema;

        const studentsSchema =  new Schema ({
            name: String,
            age: String,
            email: String,
            date: {
                type: Date,
                default: Date.now
            }
        });


        // //MODELS
        const AddStudents = mongoose.model('AddStudents', studentsSchema);
        // feedApi(AddStudents);

        // //save to db
        const data = {
            name: 'Christiane2',
            age: '15',
            email: 'chris@gmail.com'
        }

        const newStudent = new AddStudents(data);
        newStudent.save((error) => {
                if(error){
                    console.log(error)
                    console.log("Something went wrong!")
                } else {
                    console.log("New student saved to database");
                }
            })




            app.use(morgan('tiny')); //rename it
            app.get('/api', (req, res) => {
                // get all data from my db and display on this api
                AddStudents.find({})
                    .then((data) => {
                        console.log("Data: ", data);
                        res.json(data);
                    })
                    .catch((error) => {
                        console.log("error: ", error)
                    })
            })




    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

// || 'mongodb://localhost/abi-website', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// now double check the connection worked
// mongoose.connection.on('connected', () => {
//     console.log("Mongoose connected!");
// })


// const AddStudents = new mongoose.Schema({ name: String }, { bufferCommands: false });
// const student = mongoose.model('AddStudents', AddStudents);

// // // Will throw an error because mongoose is not connected yet
// student.create({ name: 'Val' }).then(doc => console.log(doc));
// console.log(student)

// SCHEMAS
// const Schema = mongoose.Schema;
// const studentsSchema = new Schema({
//     name: String,
//     age: String,
//     email: String,
//     date: {
//         type: String,
//         default: Date.now()
//     }
// });
// //MODELS
// const AddStudents = mongoose.model('AddStudents', studentsSchema);

// //save to db
// const data = {
//     name: 'Christiane',
//     age: '15',
//     email: 'chris@gmail.com'
// }

// const newStudent = new AddStudents(data); //add new instance/student

// newStudent.save((error) => {
//     if(error){
//         console.log(error)
//         console.log("Something went wrong!")
//     } else {
//         console.log("New student saved to database");
//     }
// })



// for http request logger || middleware!
app.use(morgan('tiny')); //rename it

// ROUTES
// app.get('/api', (req, res) => {
//     // get all data from my db and display on this api
//     const Schema = mongoose.Schema;
//     Schema.find({})
//         .then((data) => {
//             console.log("Data: ", data);
//             res.json(data);
//         })
//         .catch((error) => {
//             console.Consolelog("error: ", error)
//         })
//     // const data = {
//     //     username: 'kostas',
//     //     age: 25
//     // };
//     res.json(data);
// })

app.get('/api/name', (req, res) => {
    const data = {
        username: 'patricia',
        age: 21
    };
    res.json(data);
})

app.listen(PORT, console.log(`Yey, server starting at port: ${PORT}`));
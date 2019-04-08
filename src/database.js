import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbpruba', {
            useNewUrlParser: true
        })
        console.log('Bb is connected');
    } catch (e) {
        console.log('Something goes wron!' + e);
    }
}



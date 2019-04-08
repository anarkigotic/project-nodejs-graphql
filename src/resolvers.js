
import { tasks } from './sample';
import User from './models/User'
import { from } from 'apollo-link';


export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world'
        },
        greet(root, args, ctx) {
            // console.log(args);
            // console.log(ctx);
            return `Hello ${args.name}`;
        },
        tasks() {
            return tasks
        },
        async Users() {
            const users = await User.find();
            return users;
        }


    },
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length + 1;
            tasks.push(input)
            return input;

        },
        async  createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser

        },
        async deleteUser(_, { _id }) {
            const userdelete = await User.findByIdAndDelete(_id);
            return userdelete;
        },
        async updateUser(_, { _id, input }) {
            const UserUpdate = User.findByIdAndUpdate(_id,input,{new:true});
            return UserUpdate
        }
    }
}


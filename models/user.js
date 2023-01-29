const { Schema, model } = require('mongoose');

//const regex = new RegExp(`^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g`)


const userSchema = new Schema(
    {
        username: {
            type: String, required: true,
            unique: true, trim: true
        },
        email: {
            type: String, required: true,
            unique: true, 
            // validate:
            // {
            //     validator: function(value) {
            //         return regex.test(value);
            //     }
            // }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            },
        ],
        friends: [
            {type: Schema.Types.ObjectId,
            ref: 'user'},
        ],
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function () {
    return `${this.friends.length}`;
});

const User = model('user',userSchema);

module.exports = User;
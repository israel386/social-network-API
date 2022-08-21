const { Schema, model } = required('mongoose')
const User = model('User', UserSchema);

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

UserSchema.virtual('friendCount').get(function () {
    return this.friend.length;
});


module.exports = User;
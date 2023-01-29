const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280, 
        },
        createdAt:
        {
            type: Date,
            default: new Date(),
            get: formatDate,
        },
        username: [
            {
                type: String,
                required: true,
                ref: 'user',
            },
        ],
        reactions: [
            {
                type: String,
                ref: 'reactions'},
        ],
    },
    {
        toJSON:{
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return `${this.reactions.length}`;
});

function formatDate(date) {
    return date.toLocalString();
}

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
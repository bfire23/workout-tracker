const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "enter exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "enter name of exercise"
                },

                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }

            }

        ]

    });
    
    const workout = mongoose.model("workout", workoutSchema);

    module.export = workout;

        






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
                duration: {
                    type: Number,
                    required: "enter exercise duration"
                },

                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }

            }

        ]

    });

    
    
    const workout = mongoose.model("workout", workoutSchema);

    module.export = workout;

        






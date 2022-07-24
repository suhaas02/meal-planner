const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//incomplete-> complete meal plan and check integer
//meal schema and mealplan schema 
//creating schema for food items, meals, user
const FoodSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    calories:{
        type: Number,
        required: true
    },
    protein:{
        type: Number,
        required: true
    },
    carb:{
        type: Number,
        required: true
    },
    fat:{
        type: Number,
        required: true
    },
    acceptedUnits:{
        type: String,
        enum: ['ml', 'liter', 'kg', 'gm', 'item'],
        required: true
    }

})

const Food = mongoose.model('food',FoodSchema);
//module.exports = Food;

const MealSchema = new Schema({
    category:{
        type: String,
        enum: ['Breakfast', 'Lunch', 'Evening Snack', 'Dinner'],
        required: true
    },
    name:{
        type: String,
        required: true
    },
    FoodItems:
    [{ 
        type: Schema.Types.ObjectId, 
        ref: 'food' 
    }],
    
    
})

const Meal = mongoose.model('meal',MealSchema);
//module.exports = Meal;

const UserSchema = new Schema({
    user:{
        type: String,
        required: true
    },
    CalorieRequirement: {
        type: Number,
        required: true
    },
    MealPlan: [{
        date:{
            type: Date
        },
        meals: [{
            type: Schema.Types.ObjectId, 
            ref: 'meal' 
        }]
    }]
})

const User = mongoose.model('user',UserSchema);
//module.exports = User;
module.exports = {Food, Meal, User};
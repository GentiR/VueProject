import foodblogs from '../mongo/models/foodblogs'

export default {

    list: (req, res) => {
        const list = foodblogs.find();
        return res.json(list);


    },
    get: (req, res ) => {
        const {id} = req.query;
        const foundItem = foodblogs.find ({ _id: id });

        return res.json(foundItem);
    },
    post: (req, res) =>{
        const foodblogs = req.body;

        const newFoodblogs = foodblogs.create(foodblogs)

        return res.json(newFoodblogs);
    },
}
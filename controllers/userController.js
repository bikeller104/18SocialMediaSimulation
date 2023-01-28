const User = require('../models/user');

module.exports = {
    getUsers(req,res) {
        // console.log("get route hit")
        // User.find()
        // .then(users => res.json(users))
        // .catch(err => res.status(500).json(err));
        console.log("get route hit");
        User.find((err,users) =>{
            if (users){
                res.status(200).json(users)
            }
            else{
                res.status(500).json(err);
            }
        });
    },
    getUser(req,res) {
        User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
    },
    createUser(req,res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(500).json(err));
    },
    updateUser(req,res){
        User.findOneAndUpdate(req.body)
        .then(userData => res.json(userData))
    },
    deleteUser(req,res) {
        User.findOneAndDelete({_id: req.params.id})
        .then(user => {
           if(!user) return res.status(404).json({message: 'No user found with that id'});
           res.json({   message: 'User deleted successfully' });
        })
        .catch(err => res.status(500).json(err));
    }
    
}
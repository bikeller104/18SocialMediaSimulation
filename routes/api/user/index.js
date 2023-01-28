const router = require('express').Router();
//the stupid ./ interspersed though the file path helps my auto complete.
const { getUsers, getUser , createUser, updateUser, deleteUser} = require('./.././.././../controllers/userController');

const p= (content) => console.log(content);

router.route('/')
.get(
    getUsers
    ).post(
        createUser
        );

router.route('/:id')
.get(
    getUser
    ).put(
        updateUser
        ).delete(
            deleteUser
            );

router.route('/:user-id/friends/:friend-id')
.post(

).delete(

    );


    module.exports = router;
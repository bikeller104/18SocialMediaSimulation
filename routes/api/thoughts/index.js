const router = require('express').Router();

const {getThoughts, getThought, createThought, updateThought, deleteThought} = require('./.././.././../controllers/thoughtController');

router.route('/')
.get(
    getThoughts
    ).post(
        createThought
        );

router.route('/:id')
.get(
    getThought
    ).put(
        updateThought
        ).delete(
            deleteThought
            );

router.route('/:id/reactions')
.post(

).delete(

    );


    module.exports = router;
const router = require('express').Router();

const {getThoughts, getThought, createThought, deleteThought} = require('./.././.././../controllers/thoughtController');

router.route('/')
.get(

    ).post(

        );

router.route('/:id')
.get(

    ).put(

        ).delete(

            );

router.route('/:id/reactions')
.post(

).delete(

    );


    module.exports = router;
const router = require('express').Router();

const p= (content) => console.log(content);

router.route('/')
.get(

    ).post(

        );

router.route('/:id')
.get(

    ).put(

        ).delete(

            );

router.route('/:user-id/friends/:friend-id')
.post(

).delete(

    );


    module.exports = router;
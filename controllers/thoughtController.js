const Thought = require('./../models/thought');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then(thoughts => res.json(thoughts))
            .catch(err => res.status(500).json(err));
    },
    getThought(req,res)
    {
        Thought.findById(req.params.id)
            .then(thought => res.json(thought))
            .catch(err => res.status(500).json(err));
    },
    createThought(req, res){
        Thought.create(req.body)
            .then(thought => res.json(thought))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    updateThought(req,res){
        Thought.findOneAndUpdate(req.params.id)
    },
    deleteThought(req,res){
        Thought.findOneAndDelete({_id: req.params.id})
            .then(thought =>{ if(!thought) return res.status(404).json({message: 'No thought with that id found'});
            res.json({message: 'Thought deleted successfully'});
     })
     .catch(err => res.status(500).json(err));
    
    }

}
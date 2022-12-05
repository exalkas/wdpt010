const Post = require('../models/Post');

module.exports.add = async (req, res) => {
    try {
        
        console.log("🚀 ~ add", req.body)

        const newPost = await Post.findByIdAndUpdate(
            {_id: req.body.post}, // the id,
            {
                $push: {
                    comments: {
                        text: req.body.text,
                        owner: req.body.owner
                    }
                }
            }, // the change
            {new: true} // options
        )
        console.log("🚀 ~ newPost", newPost)
       
        if (!newPost) return res.send({success: false, errorId: 1}) // post not found

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in comment add ", error.message)

        res.send({success: false, error: error.message})
    }
}

module.exports.delete = async (req, res) => {
    try {
        
        console.log("🚀 ~ delete", req.query)
        console.log("🚀 ~ delete", req.params)

        const newPost = await Post.findByIdAndUpdate(
            { 
                _id: req.params.post,
                // owner: req.params.user,
                comments: { // name of the property (it's an array)
                    $elemMatch: { // find in that array
                        'comments.$.owner': req.params.user, // the property name of the object inside the array
                        'comments.$._id': req.params.comment
                    }
                }
            }, // find it
            {
                $pull: { // delete from array
                    comments: { // specify the property name - the array
                        _id: req.params.comment // filter which item of the array
                    }
                }
            }, // change it
            {new: true}//options
        )
        console.log("🚀 ~ newPost", newPost)
       
        if (!newPost) return res.send({success: false, errorId: 1}) // comment not found

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in comment delete ", error.message)

        res.send({success: false, error: error.message})
    }
}

module.exports.edit = async (req, res) => {
    try {
        
        console.log("🚀 ~ edit", req.body)

        const newPost = await Post.findByIdAndUpdate(
            { 
                _id: req.body.postId,
                comments: { // name of the property (it's an array)
                    $elemMatch: { // find in that array
                        owner: req.body.user, // the property name of the object inside the array
                        _id: req.body.commentId
                    }
                }
            }, // find it
            {
                $set: { // update item in array
                        'comments.$[elem1].text': req.body.text // specify the property name - the array
                }
            }, // change it
            {
                arrayFilters: [{'elem1._id': req.body.commentId}], // filter which item of the array
                new: true
            }//options
        )
        console.log("🚀 ~ newPost", newPost)
       

        res.send({success: true, post: newPost} )
        
    } catch (error) {
        console.log("🚀 ~ Error in comment edit ", error.message)

        res.send({success: false, error: error.message})
    }
}
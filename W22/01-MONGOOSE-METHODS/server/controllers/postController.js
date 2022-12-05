const Post  = require('../models/Post')

module.exports.add = async (req, res) => {

    try {

        const {owner, text} = req.body

        if (!owner || !text) {
            res.send({success: false, error: 1})
            return
        }

        const newPost = await Post.create(req.body)
            .then(item => item.populate({path: 'owner', select: 'username email image'}))
        
            console.log("🚀 ~ newPost", newPost)

        if (!newPost) {
            res.send({success: false, error: 2})
            return
        }

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in post add ", error.message)

        res.send({success: false, error: error.message})
    }
}
module.exports.list = async (req, res) => {

    try {

        const posts = await Post.find()
        // .limit(5)
        // .skip(5)
        .populate({
            path: 'owner',
            select: 'username email image'
        })
        console.log("🚀 ~ posts", posts)

        res.send({success: true, posts})
        
    } catch (error) {
        console.log("🚀 ~ Error in post list ", error.message)

        res.send({success: false, error: error.message})
    }
}

module.exports.like = async (req, res) => {

    try {

        console.log("🚀 ~ like: body", req.body)

        const post = await Post.findOne({
            _id: req.body._id, 
            likes: {$elemMatch: {$eq: req.body.user}}
        })

        console.log("🚀 ~ post", post)

        let newPost;

        if (!post) { // post with such user in the liked was not found
                newPost = await Post.findByIdAndUpdate({ _id: req.body._id,},
                {
                    $push : {likes: req.body.user}
                },
                {new: true}
                )
                
                // populate({
                //     path: 'owner',
                //     select: 'username email image'
                // })
                
            } else { // there was a user in the likes with this userid so remove him
                newPost = await Post.findByIdAndUpdate({ _id: req.body._id,},
                    {
                        $pull : {likes: req.body.user}
                    },
                    {new: true}
                    )
            }
        
        console.log("🚀 ~ newPost", newPost)

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in like  ", error.message)

        res.send({success: false, error: error.message})
    }
}

module.exports.likeJS = async (req, res) => {

    try {

        console.log("🚀 ~ like: body", req.body)

        const post = await Post.findOne({  // find the post and the user
            _id: req.body._id, 
        })

        console.log("🚀 ~ post", post)

        let newLikes;

        if (post.likes.includes(req.body.user)) { // user is in the likes array of this post

            newLikes = post.likes.filter(item => item !== req.body.user)

        } else {

            newLikes = [...post.likes, req.body.user] // add the user to the current likes array

        }

        // update the post
        const newPost = await Post.findByIdAndUpdate({_id: req.body._id},

                {likes: [...newLikes]},
                {new: true}
            )

        console.log("🚀 ~ newPost", newPost)

        res.send({success: true, post: newPost})
        
    } catch (error) {
        console.log("🚀 ~ Error in like  ", error.message)

        res.send({success: false, error: error.message})
    }
}
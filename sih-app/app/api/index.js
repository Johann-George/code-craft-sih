const post=asyncHandler(async(req,res)=>{
    const {title,content,author,createdAt,tags,imageURLs,contributors,githubURL,comments}=req.body;
    if(!content){
        return res.status(401).json({
            message: 'Post is empty'
        })
    }


const newPost={
    title,
    content,
    author,
    createdAt,
    tags,
    imageURLs,
    contributors,
    githubURL,
    comments,
};

try{
    let post=await Post.create(newPost);
    post=await post.populate('postingUser');
    return res.status(201).json(post);
}
catch(e){
    res,status(400).send(e.message);
    throw new Error(e.message);
}
})
const postComment=asyncHandler(async(req,res)=>{
    const{title,content,author,createdAt,tags,imageURLs,contributors,githubURL,comments}=req.body;
    const newComment={
        title,
        content,
        author,
        createdAt,
        tags,
        imageURLs,
        contributors,
        githubURL,
        comments,

    };
})

try{
    const comment=await(await Comment.create(newComment)).populate('postingUser');
    let parent, parentObject;
    if(!comments){
        parent=await Post.findById(post);
        parentObject=parent.toObject();
        parentObject.responses.push(comment._id);
    }
    else{
        parent=await Comment.findById(comments);
        parentObject=parent.toObject();
        parentObject.responses.push(comment._id);
    }
    parent.overwrite(parentObject);
    parent.populate('responses');
    return res.status(201).json(comment);
}
catch(e){
    res.status(400).send(e.message);
    throw new Error(e.message);
}

const fetchPosts=asyncHandler(async(req,res)=>{
    try{
        const posts=await Post.find().populate('postingUser').populate('responses');
        res.status(200).json(posts);
    }
    catch(e){
        res.status(400).send(e.message);
        throw new Error(e.message);
    }
})
module.exports={newPost,postComment,fetchPosts}
import React from 'react';


const UpvoteSection = ({articleName,setarticleinfo,upvotes}) => {

    const UpvoteArticle =async () => {
       const result = await  fetch(`/api/ArticlePage/${articleName}/upvote`,{
            method: 'post',
        });
        const body =await  result.json();
        setarticleinfo(body);
    }

    return(
        <div className="upvotes-section">
        <button onClick={() => UpvoteArticle()}>Add vote</button>
        <p>This post has been upvoted {upvotes} times </p>
    </div>
    );
}



export default UpvoteSection;
import React,{ useState} from 'react';


const AddCommentForm = ({articleName,setArticleInfo}) => {

    const [username,setUsername] = useState("");
    const [CommentText,setCommentText] = useState("");

    const CommentArticle =async () => {
        const result = await  fetch(`/api/ArticlePage/${articleName}/add-comment`,{
             method: 'post',
             body:JSON.stringify({username,text:CommentText }),
             headers:{
                 'Content-Type':'application/json',  
             }
         });
         const body =await  result.json();
         setArticleInfo(body);
         setUsername("");
         setCommentText("");
        }
    return(
    <div className="add-comment-form">
    <h3>Add a comment</h3>
    <label >
        Name:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
    </label>
    <hr/>
  <label>Comments:
  <textarea rows="4" cols="50" value={CommentText} onChange={(event) => setCommentText(event.target.value)}/>
  </label>
 
  <button  onClick={() => CommentArticle()}>Add Comment</button>
  </div>
   )
    }
export default AddCommentForm;
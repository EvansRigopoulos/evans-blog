import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import articles from './article-content';
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import {Page404} from "./404page";
import CommentList from "../components/commentsList"
import UpvoteSection from "../components/upvoteSection";
import AddCommentForm from "../components/AddCommentForm";
export function Articlepage() {
 const {name} =useParams();//we need this function to bind the URL name and render it!!!!

 const article = articles.find(article =>article.name === name);
 
const [articleInfo,setArticleInfo]  = useState({upvotes:0,comments:[ ] });

useEffect( () => {
  const fetchData = async() => {
      const result = await fetch(`/api/ArticlePage/${name}`);
      const body =await result.json();
      setArticleInfo(body);
  }
  fetchData();
},[name])

   if(!article) return <Page404 />

  

   const otherarticles = articleContent.filter(article => article.name!== name);
    return (
        <div>
        <h1>{article.title}</h1>
        <UpvoteSection  articleName={name} setarticleinfo={setArticleInfo} upvotes={articleInfo.upvotes}/>
      
        {article.content.map((paragraph,key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentList comments={articleInfo.comments} />
        <AddCommentForm  articleName={name}  setArticleInfo={setArticleInfo}/>
        <h3>Other Articles</h3>
      <ArticlesList  articles={otherarticles}/>
        </div>
    )
}
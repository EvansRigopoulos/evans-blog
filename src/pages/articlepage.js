import React from "react";
import { useParams } from "react-router-dom";
import articles from './article-content';
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
export function Articlepage() {
 const {name} =useParams();//we need this function to bind the URL name and render it!!!!

 const article = articles.find(article =>article.name === name);
 
   if(!article) return <h1>Article does not exist</h1>

   const otherarticles = articleContent.filter(article => article.name!== name);
    return (
        <div>
        <h1>{article.title}</h1>
        {article.content.map((paragraph,key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles</h3>
      <ArticlesList  articles={otherarticles}/>
        </div>
    )
}
import React from "react";
import ArticlesList  from "../components/ArticlesList";
import articleContent from './article-content'
export function ArticlesListPage() {
    return (
        <div>
        <ArticlesList articles={articleContent} />
      
        </div>
    )
}
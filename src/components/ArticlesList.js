import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <div>
    {articles.map((article,key) => (
    <Link
      className="article-list-item"
      key={key}
      to={`/ArticlePage/${article.name}`}
    >
      <h3>{article.title}</h3>
      <p>{article.content[0].substring(0, 100)}</p>
    </Link>
    ) )}
  </div>
);

export default ArticlesList;

import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    let articleData = posts.map((obj) => {
        return <Article key={obj.id} title={obj.title} date={obj.date} preview={obj.preview} />
    })
    return (
        <main>
            {articleData}
        </main>
    )
}

export default ArticleList
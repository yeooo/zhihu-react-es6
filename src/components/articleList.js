require('../styles/components/article.scss')
import React from 'react'

class SingleArticle extends React.Component{
    render(){
        return(
            <li className="single-article">
                <div className="article-detail-fl">
                    <div className="fl">
                       
                    </div>
                    <div className="fr">
                        <img src="" alt=""/>
                    </div>
                </div>
            </li>
        )
    }
}
class ArticleList extends React.Component{
    render(){
        return(
            <div>
                <ul className="article-container">
                    <SingleArticle data={this.data}/>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        $.ajax({
            url: "https://news-at.zhihu.com/api/4/news/latest",
            type: "GET",
            dataType: "json",
            success: function(data){
               console.log(data);
            }
         });
        
    }
}

export default ArticleList;
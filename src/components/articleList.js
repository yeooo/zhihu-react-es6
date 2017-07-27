require('../styles/components/article.scss')
import React from 'react'
import { Link } from 'react-router';

class SingleArticle extends React.Component{
    render(){
        return(
            <li className="single-article">
                 <Link to={{ pathname: '/articleDetail/'+ this.props.data.id}}> 
                    <div className="article-detail-fl">
                        <div className="fl">
                        {this.props.data.title}
                        </div>
                        <div className="fr">
                               {/* <img src={this.props.data.images[0]} alt=""/>    */}
                        </div>
                    </div>
                 </Link> 
            </li>
        )
    }
}

class ArticleList extends React.Component{
    render(){
        let hotNewList = [];
        this.props.ArticleList.forEach((value,index)=>{
            hotNewList.push(<SingleArticle data = {value} key = {index}/>);
        });
        return(
            <div id="articleList">
                <ul className="article-container">
                     {hotNewList} 
                </ul>
            </div>
        )
    }
    
}

export default ArticleList;
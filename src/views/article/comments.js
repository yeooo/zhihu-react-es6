require('../../styles/comment.scss')
import React from 'react'

/**
 * 评论
 */
class CommentDetail extends React.Component{
    constructor(props){
        super(props);
    }
    /**
     * 判断是否显示查看更多按钮
     */
    showViewMore(){
        let comments = document.getElementsByClassName('comment-detail');
        for(let i = 0,j = comments.length;i<j; i++){
            if(comments[i].clientHeight > 75){
                comments[i].style.height = 60 +'px';
                comments[i].nextElementSibling.style.display = 'block';
            }
        }
           
    }
    /**
     * 查看更多
     */
    viewMore(e){
        if(e.currentTarget.innerText == '展开'){
            e.currentTarget.previousSibling.style.height = 'auto';
            e.currentTarget.innerText = '收起';

        }else{
            e.currentTarget.previousSibling.style.height = '1.1rem';
            e.currentTarget.innerText = '展开';
        }
    }
    render(){
        return(
            <li>
                <div className="pic-con">
                    <img src={this.props.data.avatar} alt=""/>
                </div>
                <div className="total-data">
                    <div className="user-data clearfix">
                        <span className="name">{this.props.data.author}</span>
                        <span className="like">{this.props.data.likes}</span>
                    </div>
                    <p className="comment-p clearfix">
                        <p className="comment-detail">
                           {this.props.data.content}
                        </p>
                        <span className="viewmore" onClick={this.viewMore}>展开</span>
                    </p>
                    <p className="time">{this.props.data.time}</p>
                </div>
            </li>
        )
    }
    componentDidMount(){
        this.showViewMore();
    }
}
/**
 * 评论面板
 */
class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state={
            long_comments:[],
            short_comments:[]
        }
    }
    showShort(e){
        if(e.currentTarget.className == 'arrow arrow-down'){
            e.currentTarget.className = 'arrow arrow-up';
            document.getElementById('short-ul').style.display = 'block';
            document.getElementsByClassName('short-comment').scrollTop = 0;
        }else{
            e.currentTarget.className = 'arrow arrow-down';
            document.getElementById('short-ul').style.display = 'none';
        }
    }
    componentWillMount(){
        var _this = this;
		$.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/contents/"+_this.props.params.id+"/long-comments" ,
			type: "GET",
			dataType: "json",
			success: function(result){
                _this.setState({
                    long_comments:result.COMMENTS.comments
                });             
			}
        });
        $.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/contents/"+_this.props.params.id+"/short-comments" ,
			type: "GET",
			dataType: "json",
			success: function(result){
               _this.setState({
                    short_comments:result.COMMENTS.comments
                });  
			}
		});
	}
    render(){
        let long_commentsAtr = [],
            short_commentsAtr =[];
        
        this.state.long_comments.forEach((value,key)=>{
            long_commentsAtr.push(<CommentDetail data = {value} key ={key} />)
        });
        this.state.short_comments.forEach((value,key)=>{
            short_commentsAtr.push(<CommentDetail data = {value} key ={key} />)
        });

        return(
            <div className="comment">
                <div className="topBar">{this.props.location.query.comments} 条点评</div>
                <div className="long-comment">
                    <p className="title">{this.props.location.query.long_comments} 条长评</p>
                    <ul>
                        { 
                            this.props.location.query.long_comments ? long_commentsAtr : '暂无长评' 
                        }
                        
                    </ul>
                </div>
                <div className="short-comment">
                    <div className="title clearfix">
                        <span>{this.props.location.query.short_comments} 条短评</span>
                        <span className='arrow arrow-down' onClick={this.showShort}></span>
                    </div>
                    <ul id="short-ul">
                        { 
                            this.props.location.query.short_comments ? short_commentsAtr : '暂无短评' 
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Comments
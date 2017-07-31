require('../../styles/articleDetail.scss');
import React from 'react';
import BottomMenu from '../../components/bottomMenu';

class ArticleDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            articleImg:'',
            popularity:'',
            comments:'',
            commentsData:''
        }
    }
    render(){
        return(
            <div>
                <div className="headline">
                    <div className="img-wrap">
                        <h1 className="headline-title">{this.state.title}</h1>
                        <img src={this.state.articleImg} alt="" />
                        <div className="img-mask"></div>
                    </div>
                </div>
                <div id="article-con"></div>
                <BottomMenu commentsData={this.state.commentsData} cid={this.props.params.id}/>
            </div>
        )
    }
    componentWillMount(){
        var _this = this;
		$.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/contents/" + _this.props.params.id,
			type: "GET",
			dataType: "json",
			success: function(result){
                $('#article-con').html(result.CONTENTS.body);
                _this.setState({
                    title:result.CONTENTS.title,
                    articleImg:result.CONTENTS.image
                })
			}
        });
        $.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/contents/extra/" + _this.props.params.id,
			type: "GET",
			dataType: "json",
			success: function(result){
                _this.setState({
                    popularity: result.DES.popularity,
                    comments: result.DES.comments,
                    commentsData:result.DES
                });
			}
		});
	}
}
export default ArticleDetail
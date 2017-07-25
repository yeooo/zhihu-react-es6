require('../../styles/home.scss')
import React from 'react';

import SliderNav from '../../components/sliderNav'
import Slider from '../../components/slider'
import ArticleList from '../../components/articleList'

class Home extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            hotnews:[]
        }
    }
	componentWillMount(){
		var _this = this;
		$.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/last-stories",
			type: "GET",
			dataType: "json",
			success: function(result){
				_this.setState({
					hotnews : result.STORIES.stories
				})
			}
		});
	}
	render() {
		return (
			<div className="home-page">
				<SliderNav />
				<Slider />
				<ArticleList ArticleList={this.state.hotnews}/>
			</div>
		);
	}
}

Home.defaultProps = {
};

export default Home;

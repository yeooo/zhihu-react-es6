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
	changeTopBarColor(){
		if(window.pageYOffset < 10){
			document.getElementById('topbarbg').style.opacity = 0;
		}
		if(window.pageYOffset >=30){
			document.getElementById('topbarbg').style.opacity = 0.2;
		}
		if(window.pageYOffset >=50){
			document.getElementById('topbarbg').style.opacity = 0.4;
		}
		if(window.pageYOffset >=100){
			document.getElementById('topbarbg').style.opacity = 0.6;
		}
		if(window.pageYOffset >=150){
			document.getElementById('topbarbg').style.opacity = 0.8;
		}
		if(window.pageYOffset >= 190){
			document.getElementById('topbarbg').style.opacity = 1;
		}
	}
	updateTopBarColor(){
		if(window.pageYOffset < 10){
			document.getElementById('topbarbg').style.opacity = 0;
		}
		if(window.pageYOffset >= 190){
			document.getElementById('topbarbg').style.opacity = 1;
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
			<div className="home-page" onTouchMove={this.changeTopBarColor} onTouchEnd={this.updateTopBarColor}>
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

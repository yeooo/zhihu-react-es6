require('../styles/components/sliderNav.scss');

import React from 'react';
import { Link } from 'react-router';

class Topic extends React.Component{
		render(){
			return(
				<li>
					<Link to={{ pathname: '/themes/'+ this.props.data.id}}>{this.props.data.name} 
						<span className="topic-icon"></span>
					</Link>
				</li>
			)
		}
	}

class SliderNav extends React.Component {
	constructor(props){
        super(props);
        this.state={
            themes:[]
        }
    }
	showPannel(){
		document.getElementById('menu-pannel').style.display = 'block';
		document.getElementById('pannel-container').className  += ' active';
		document.getElementById('home-page').style.marginLeft = '50%';
	}
	hideShow(e){
		e.stopPropagation();
		if(document.getElementById('menu-pannel').style.display == 'none'){
			document.getElementById('menu-pannel').style.display = 'block';
			
		}else{
			document.getElementById('pannel-container').className='pannel-container';
			document.getElementById('menu-pannel').style.display = 'none';
			document.getElementById('home-page').style.marginLeft = '0';
		}
	}
	stopP(e){
		e.stopPropagation();
	}
	componentWillMount(){
		let _this = this;
		$.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/themes" ,
			type: "GET",
			dataType: "json",
			success: function(result){
               _this.setState({
                    themes:result.THEMES.others
                });  
			}
		});
	}
	render() {
		let themesList = [];
		this.state.themes.forEach((value,key)=>{
			themesList.push(<Topic data={value} key={key}/>);
		});
		return (
			<div>
				<div className="slider-nav" id="slider-nav" style={{backgroundColor: this.props.color}}>
					<div className="menu" onClick={this.showPannel}></div>
					{this.props.title}
				</div>
				<div className="menu-pannel" id="menu-pannel" onClick = {this.hideShow}>
					<div className="left-bar" onClick={this.stopP}>
						<div>
							<div className="user-part">
								<span><img src="../images/user_pic_n.png" alt=""/></span>
								<span>请登录</span>
							</div>
							<div className="menu-icon">
								<dt>
									<dl className="nav-icon shoucang"></dl>
									<dl>收藏</dl>
								</dt>
								<dt className="mid-icon">
									<dl className="nav-icon message"></dl>
									<dl>消息</dl>
								</dt>
								<dt>
									<dl className="nav-icon setting"></dl>
									<dl>设置</dl>
								</dt>
							</div>
						</div>
						<ul className="pannel-container" id="pannel-container">
							<li className="hot-topic"><a href="/">首页</a></li>
							{themesList}
						</ul>
						<div className="bottom-menu-icon">
							<span className="off-line">57%</span>
							<span className="night-mode">夜间</span>
						</div>
					</div>
					
				</div>
				<div id="topbarbg"></div>
			</div>
			
		);
	}
}

SliderNav.defaultProps = {
	title:'今日热闻',
	backgroundColor:''
};

export default SliderNav;

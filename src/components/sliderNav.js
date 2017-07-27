require('../styles/components/sliderNav.scss');

import React from 'react';
import { Link } from 'react-router';

class Topic extends React.Component{
		render(){
			return(
				<li>日常心理学 <span className="topic-icon"></span></li>
			)
		}
	}

class SliderNav extends React.Component {
	showPannel(){
		document.getElementById('menu-pannel').style.display = 'block';
		document.getElementById('pannel-container').className  += ' active';
	}
	hideShow(e){
		e.stopPropagation();
		if(document.getElementById('menu-pannel').style.display == 'none'){
			document.getElementById('menu-pannel').style.display = 'block';
			
		}else{
			document.getElementById('pannel-container').className='pannel-container';
			document.getElementById('menu-pannel').style.display = 'none';
		}
	}
	stopD(e){
		e.stopPropagation()
	}

	render() {
		return (
			<div>
				<div className="slider-nav">
					<div className="menu" onClick={this.showPannel}></div>
					今日热闻
				</div>
				<div className="menu-pannel" id="menu-pannel" onClick = {this.hideShow}>
					<div>
						<div className="user-part">
							
						</div>
						<div className="menu-icon">
							<dt>
								<dl>11</dl>
								<dl>22</dl>
							</dt>
							<dt>
								<dl>11</dl>
								<dl>22</dl>
							</dt>
							<dt>
								<dl>11</dl>
								<dl>22</dl>
							</dt>
						</div>
					</div>
					<ul onClick={this.stopD} className="pannel-container" id="pannel-container">
						<li className="hot-topic">首页</li>
						<li>日常心理学</li>
						<Topic />
					</ul>
				</div>
				<div id="topbarbg"></div>
			</div>
			
		);
	}
}

SliderNav.defaultProps = {
};

export default SliderNav;

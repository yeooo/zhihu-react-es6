require('../styles/components/sliderNav.scss');

import React from 'react';
import { Link } from 'react-router';
class SliderNav extends React.Component {
  render() {
    return (
        <div className="slider-nav">
            <Link to='/home'>首页</Link>
            <Link to='/article'>文章详情</Link>     
        </div>
    );
  }
}

SliderNav.defaultProps = {
};

export default SliderNav;

require('../../styles/home.scss')
import React from 'react';

import SliderNav from '../../components/sliderNav'
import Slider from '../../components/slider'
import ArticleList from '../../components/articleList'

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <SliderNav />
        <Slider />
        <ArticleList />
      </div>
    );
  }
}

Home.defaultProps = {
};

export default Home;

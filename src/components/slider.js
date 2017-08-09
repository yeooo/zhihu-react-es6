require('../styles/components/slider.scss')

import React from 'react'

class Slider extends React.Component{
    render(){
        return(
            <div className="slider">
                <ul>
                    <li><img src="../images/yeoman.png" alt=""/></li>
                    <li><img src="../images/yeoman.png" alt=""/></li>
                    <li><img src="../images/yeoman.png" alt=""/></li>
                </ul>
            </div>
        )
    }
}

export default Slider;
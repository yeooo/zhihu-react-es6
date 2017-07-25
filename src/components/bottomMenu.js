require('../styles/components/bottomMenu.scss')
import React from 'react'

class BottomMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bottom-menue">
                <div><span className="popularity"></span><em>{this.props.popularity}</em></div>
                <div><span className="comments"></span><em>{this.props.comments}</em></div>
            </div>
        )
    }
}
export default BottomMenu
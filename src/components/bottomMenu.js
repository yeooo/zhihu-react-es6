require('../styles/components/bottomMenu.scss');
import React from 'react';
import { Link } from 'react-router';

class BottomMenu extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="bottom-menue">
                <div><span className="popularity"></span><em>{this.props.commentsData.popularity}</em></div>
                <div>
                    <Link to={{ pathname: '/comments/' + this.props.cid , query:{long_comments:this.props.commentsData.long_comments,short_comments:this.props.commentsData.short_comments,comments:this.props.commentsData.comments} }}>   
                        <span className="comments"></span><em>{this.props.commentsData.comments}</em>
                    </Link>  
                </div>
            </div>
        )
    }
}
export default BottomMenu
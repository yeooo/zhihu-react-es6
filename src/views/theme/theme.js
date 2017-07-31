import React from 'react';
import ArticleList from '../../components/articleList';
import SliderNav from '../../components/sliderNav'

class ThemePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            themesData:[],
            title:''
        }
    }
    componentWillMount(){
        let _this = this;
        $.ajax({
			url: "https://zhihu-daily.leanapp.cn/api/v1/themes/" + _this.props.params.id,
			type: "GET",
			dataType: "json",
			success: function(result){
                _this.setState({
                    themesData:result.THEMEDES.stories,
                    title:result.THEMEDES.name
                })
			}
        });
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     return this.props.params.id !== nextProps.params.id;
    // }
    render(){
        return(
            <div>
                <SliderNav title={this.state.title} color={'#3F8CD0'}/>
                <div className="theme-container" style={{marginTop:'50px'}}>
                    <ArticleList ArticleList={this.state.themesData} /> 
                </div>
            </div>
        )
    }
}
export default ThemePage;
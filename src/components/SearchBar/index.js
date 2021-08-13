import React,{Component} from 'react'
import propTypes from 'prop-types'
// styles
import { Wrapper,Content } from './SearchBar.styles'
// image 
import searchIcon from '../../images/search-icon.svg';

class SearcBar extends Component {
    
 state = {value:''};
 timeout=null;

componentDidUpdate(_prevProps, prevState){

    if(this.state.value !==prevState.value){
   const {setSearchTerm} =this.props;

     clearTimeout(this.timeout)

   this.timeout= setTimeout(()=>{
       const {value} =this.state
    setSearchTerm(value);
   },500)

    
}
}


render(){
    const {value} = this.state;
    
    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='seach-icon'/>
                <input 
                type='text' 
                placeholder='Search Movie'
                onChange={event =>this.setState({value:event.currentTarget.value})}
                value={value}
                />
            </Content>
        </Wrapper>
    )
    
}


}

SearcBar.propTypes = {
    callback:propTypes.func
}

export default SearcBar
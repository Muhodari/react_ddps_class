import React,{useState,useEffect,useRef} from 'react'
import propTypes from 'prop-types'
// styles
import { Wrapper,Content } from './SearchBar.styles'
// image 
import searchIcon from '../../images/search-icon.svg';

const SearcBar = ({setSearchTerm,})=>{
    const [state,setState]=useState('')
    const initial = useRef(true)



useEffect(()=>{

    if(initial.current){
        initial.current=false;
        return;
    }
    
 const timer = setTimeout(()=>{
    setSearchTerm(state);
   },500)
  
   return ()=>clearTimeout(timer)

},[setSearchTerm,state])

return(
    <Wrapper>
        <Content>
            <img src={searchIcon} alt='seach-icon'/>
            <input 
            type='text' 
            placeholder='Search Movie'
            onChange={event =>setState(event.currentTarget.value)}
            value={state}
            />
        </Content>
    </Wrapper>
)

}

SearcBar.propTypes = {
    callback:propTypes.func
}

export default SearcBar
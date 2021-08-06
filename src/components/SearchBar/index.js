import React,{useState,useEffect,useRef} from 'react'
// styles
import { Wrapper,Content } from './SearchBar.styles'
// image 
import searchIcon from '../../images/search-icon.svg';

const SearcBar = ({setSearchTerm,})=>{
    const [state,setState]=useState('')


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
export default SearcBar
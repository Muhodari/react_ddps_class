import React,{useState,useEffect,useRef} from 'react'
// styles
import { Wrapper,Content } from './SearchBar.styles'
// image 
import searchIcon from '../../images/search-icon.svg';

const SearcBar = ({setSearchTerm,})=>{

return(
    <Wrapper>
        <Content>
            <img src={searchIcon} alt='seach-icon'/>
            <input type='text' placeholder='Search Movie'
            />
        </Content>
    </Wrapper>
)

}
export default SearcBar
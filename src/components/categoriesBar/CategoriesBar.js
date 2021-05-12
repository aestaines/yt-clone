import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.actions';
import './_categoriesBar.scss';

const CategoriesBar = () => {

    const keywords = [
       "All",
       "React js",
       "Angular js",
       "React Native",
       "use of API",
       "Redux",
       "Music",
       "Algorith Art",
       "Guitar",
       "Piano",
       "MTV",
       "Coding",
       "Firebase",
       "Poor Coder",
       "MongoDB",
       "Bootstrap",
       "Node js",
       "C#.Net",
       "Javascript",
       "ES7",
       "React DOM"
    ];


    const dispatch = useDispatch();

    const [activeElement,setActiveElement] = useState("All");

    const handleClick = value => { 
        
        setActiveElement(value)

        if(value === "All"){
            dispatch(getPopularVideos())
        }else{
            dispatch(getVideosByCategory(value)) 
        }
        
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value,i) => 
                    <span 
                        key={i}
                        onClick={ () => handleClick(value) }
                        className={activeElement === value ? "active" : ""}
                    >{value}
                    </span>)
            }
        </div>
    )
}

export default CategoriesBar

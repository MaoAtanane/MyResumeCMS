import React from 'react';
import { styles , hoverStyle} from './MainButton-styles'

const About = (props) => {
    
    const [myStyle, setMyStyle] = React.useState(false)
    const overButton = () => {
        setMyStyle(true)
    }
    const leftButton = () => {
        setMyStyle(false)
    }
    const useStyle = myStyle ? {...hoverStyle,...props.style} : {...styles,...props.style} ;
    return (
        <>
        <button
            onMouseEnter={overButton}
            onMouseLeave={leftButton}
            style={useStyle}>

            {props.children}
    </button>
    
    </>
    );
}

export default About;

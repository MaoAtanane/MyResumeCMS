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

    return (
        <>
        <button
            onMouseEnter={overButton}
            onMouseLeave={leftButton}
            style={myStyle?hoverStyle : styles}>

            {props.children}
    </button>
    
    </>
    );
}

export default About;

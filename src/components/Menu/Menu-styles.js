import theme from '../../assets/theme/mainTheme.json'


export const styles = {
    body:{
        backgroundColor:theme.menuBackground
    },
    img: {
        display: 'inline-block',
        width: '60px',
        height: '60px',
    },
    logoBlock: {
        display: 'inline-block',
    },
    menuNumber: {
        display: 'inline-block',
        ...theme.thirdFont,
    },
    menuText: {
        ...theme.firstFont,
        display: 'inline-block',
    },
    menuItem: {

        cursor: 'pointer',
        marginRight: '20px',
        marginLeft: '20px',
        display: 'inline-block',
    },
    menuBlock: {
        marginRight: '20px',
        marginLeft: '20px',
        float: 'right',
        display: 'inline-block',
    },
    resumeButton: {
        width: "100px",
        height: "40px",
    },



}

import theme from '../../assets/theme/mainTheme.json'


export const styles = {
    body:{
        minHeight:'80vh',
        paddingTop:'50px',
    },
    hello: {
        marginBottom:'10px',
        fontFamily: ' "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace',
        color: theme.thirdFontColor
    },

    name: {
        ...theme.firstFont,
        marginTop:'0px',
        marginBottom:'0px',
        fontSize: ' 60px',
    },

    profession: {
        marginTop:'0px',
        fontFamily: 'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
        fontSize: ' 60px',
        color: theme.secondaryFontColor
    },

    description: {
        marginBottom:'60px',
        width:'45%',
        fontFamily: 'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
        fontSize: '20px',
        color: theme.secondaryFontColor
    },

}

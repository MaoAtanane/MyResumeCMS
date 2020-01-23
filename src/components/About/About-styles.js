import theme from '../../assets/theme/mainTheme.json'


export const styles = {
    hello: {
        
        marginBottom:'10px',
        fontFamily: ' "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace',
        color: theme.thirdFontColor
    },

    name: {
        marginTop:'0px',
        marginBottom:'0px',
        fontFamily: 'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
        fontSize: ' 50px',
        color: theme.primaryFontColor
    },

    profession: {
        marginTop:'0px',
        fontFamily: 'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
        fontSize: ' 50px',
        color: theme.secondaryFontColor
    },

    description: {
        width:'50%',
        fontFamily: 'Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif',
        fontSize: '20px',
        color: theme.secondaryFontColor
    },

}

import myTheme from '../../assets/theme/mainTheme.json'

const theme = myTheme;
const myStyle = {
    width: "200px",
    height: "50px",
    color: theme.thirdFontColor,
    borderRadius: "10px",
    border: "solid",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "15px",
    cursor: 'pointer',
    borderWidth: 'thin',

}
export const styles = {
    ...myStyle,
    backgroundColor: theme.buttonBackground,
}
export const hoverStyle = {
    ...myStyle,
    backgroundColor: theme.buttonBackgroundHover,
}

import ReactGA from 'react-ga';

const ga = () =>{
    
    ReactGA.initialize('UA-156679604-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  export default ga;
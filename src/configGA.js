//  Google Analytics
import ReactGA from "react-ga4";

// const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

export const handleSocialLinkClick = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export default ReactGA;

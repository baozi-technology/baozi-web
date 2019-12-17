import Typography from "typography";
import irving from 'typography-theme-irving'
irving.bodyGray = '33';
irving.overrideThemeStyles = ({ rhythm }, options) => ({
    'html': {
        overflowY: 'initial',
    }
  })
  const typography = new Typography(irving);
export default typography
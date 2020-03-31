import Typography from "typography";
import irving from "typography-theme-irving";
irving.overrideThemeStyles = () => ({
  html: {
    overflowY: "initial",
  },
  body: {
    color: "#555",
  },
});
const typography = new Typography(irving);
export default typography;

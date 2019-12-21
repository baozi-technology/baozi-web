import React from "react";
import styles from "./Asciidoctor.module.scss"

class Asciidoctor extends React.Component {
  render() {
    var template = { __html: this.props.asciidocHtml };    
    return (
        <div className={styles.asciidoctorContainer}>
          <div className={styles.asciidoctorInnerContainer}>
            <div className={styles.asciidoctor}
                dangerouslySetInnerHTML={template}
            />
          </div>
        </div>
    );
  }
}

export default Asciidoctor;
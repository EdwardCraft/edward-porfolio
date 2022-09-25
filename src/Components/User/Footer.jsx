import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "Components/User/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.user_footer}>
      <Row>
        <Col>
          <span className="text-muted">
            &copy; All rights reserved. Copyright {new Date().getFullYear()}.
            Powered by Edward Flores.
          </span>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

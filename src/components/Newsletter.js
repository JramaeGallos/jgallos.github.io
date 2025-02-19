import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Gallos_CV.pdf`; // Ensure the file is in the public folder
    link.download = "Gallos_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show alert notification
    setShowAlert(true);

    // Hide alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        {/* Notification Alert */}
        {showAlert && (
          <Alert variant="success" className="download-alert">
            CV Downloaded Successfully!
          </Alert>
        )}

        <Row className="newsletter-content">
          <Col lg={12} className="newsletter-text">
            <h3>Know more about me by looking at my CV</h3>
          </Col>
          <Col lg={12} className="newsletter-button">
            <button onClick={handleDownload} className="download-btn">
              Download CV
            </button>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

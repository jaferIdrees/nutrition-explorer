import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GridRow(props) {
  const cuisine = [{ ...props }.props];
  const { meatType } = { ...props };
  return (
    <>
      <Row>
        <Col>
          <Card id={meatType} className="bg-warning ps-1 pe-3 text-secondary" style={{ '--bs-bg-opacity': '.5' }}>
            <Card.Title className="text-center">
              { cuisine }
            </Card.Title>
            <Link to="/recipes" state={{ meatType, cuisine }} className="link">====&gt;</Link>
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default GridRow;

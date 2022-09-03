import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { v4 as uuidv4 } from 'uuid';

function RecipeRow(props) {
  const {
    label, image, dietLabels, cautions, recipe,
  } = { ...props };
  return (
    <>
      <Row>
        <Col>
          <Card className="bg-warning ps-1 pe-3 text-secondary" style={{ '--bs-bg-opacity': '.5' }}>
            <ListGroup horizontal>
              <Card.Img
                src={image.url}
                style={{ width: '100px', height: '100px' }}
              />
              <Card.Text className="ms-auto cairoFont shadow-sm me-auto text-center">
                { label.trim() }
              </Card.Text>
              <ListGroup className="ms-auto" horizontal>
                {(dietLabels.length !== 0) && (
                <ListGroup.Item key={uuidv4()} className="ms-auto bg-danger" style={{ '--bs-bg-opacity': '.8' }}>
                  Diet Labels:
                  <br />
                  {dietLabels.map((label) => (
                    <>
                      <Badge key={label} bg="info">{label}</Badge>
                      <br />
                    </>
                  ))}
                </ListGroup.Item>
                )}
                {(cautions.length !== 0) && (
                <ListGroup.Item key={uuidv4()} className="ms-auto bg-secondary">
                  Cautions:
                  <br />
                  {cautions.map((label) => (
                    <>
                      <Badge key={label} bg="info">{label}</Badge>
                      <br />
                    </>
                  ))}
                </ListGroup.Item>
                )}
              </ListGroup>
            </ListGroup>
            <Link to="/recipes/details" state={{ recipe }} className="link">====&gt;</Link>
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default RecipeRow;

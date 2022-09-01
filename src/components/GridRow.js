import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GridRow(items) {
  console.log(items);
  return (
    <>
      <Row>
        <Col>
          <Card className="bg-warning ps-1 pe-3 text-secondary" style={{ '--bs-bg-opacity': '.8' }}>
            <Card.Title className="text-center">
              {{ ...items }.items.col1.fields.item_name}
            </Card.Title>
            <Card.Text className="fst-italic mb-0">
              Calories:
              {{ ...items }.items.col1.fields.nf_calories}
            </Card.Text>
            <Card.Text className="fst-italic mb-0">
              Total Fat:
              {{ ...items }.items.col1.fields.nf_total_fat}
            </Card.Text>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bg-danger ps-1 text-white">
            <Card.Title className="text-center">
              {{ ...items }.items.col2 && { ...items }.items.col2.fields.item_name}
            </Card.Title>
            {{ ...items }.items.col2
            && (
            <>
              <Card.Text className="fst-italic mb-0">
                Calories:
                {{ ...items }.items.col2.fields.nf_calories}
              </Card.Text>
              <Card.Text className="fst-italic mb-0">
                Total Fat:
                {{ ...items }.items.col2 && { ...items }.items.col2.fields.nf_total_fat}
              </Card.Text>

            </>
            )}
          </Card>
        </Col>
      </Row>

    </>
  );
}

export default GridRow;

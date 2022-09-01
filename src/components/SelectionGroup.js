import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';

function CheckExample(props) {
  const choices = [...{ ...props }.choices];
  const { type } = { ...props };
  const { title } = { ...props };
  return (
    <div className="mb-3">
      <h4>{title}</h4>
      <Form>
        {choices.map((choice) => (
          <Form.Check
            key={uuidv4()}
            name={`${title}`}
            type={type}
            id={`${choice}`}
            label={`${choice}`}
            value={`${choice}`}
          />
        ))}
      </Form>
    </div>

  );
}

export default CheckExample;

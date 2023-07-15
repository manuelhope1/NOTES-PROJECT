
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import AddNotes from './components/AddNotes';
import InputNotes from './components/InputNotes';


function App() {
  return (
    <Container className='bodyy'>
      <Row>
        <Col md="1" className='addline'><InputNotes /></Col>
        <Col md="11" className='disnotes'>
          <h1 className='ntext'>Notes</h1>
          <AddNotes />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

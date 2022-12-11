import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { fetchOffsetDevices } from '../http/deviceAPI'
import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductsList = () => {

  const [goods, setGoods] = useState();

  useEffect(() => {
    fetchOffsetDevices().then(data => setGoods(data)).catch(e => console.log(e.message));
  //  if(goods) console.log(goods);
  }, [])
  const { category, page, limit } = useParams();

const deleteItem = (id) => {
  fetchOffsetDevices(category, page, limit=8).then(() => { alert('success')})
}


if(!goods) return <Spinner animation="border" className='mt-5 ml-5' />

            return (
              <>
              <div id="content" className="col-sm-9">
                  <Container fluid>
                              <Row>
                                  {goods.map((prop, index) => {
                                  return  <Col key={index} md={3}>
                                              <Card style={{ width: '100%' }}>
                                              <Card.Img variant="top" src={`http://localhost:5000/${prop.img}`} />
                                              <Card.Body>
                                                  <Card.Title>{prop.name}</Card.Title>
                                                  <Card.Text>
                                                  {prop.sale}
                                                  </Card.Text>
                                                  <Button variant="primary" onClick={(e) => deleteItem(prop.id)}>Go somewhere</Button>
                                              </Card.Body>
                                              </Card>
                                          </Col>
                                  })}
                              </Row>
                          </Container>
              
                          </div>
              </>
          );
};

export default ProductsList;
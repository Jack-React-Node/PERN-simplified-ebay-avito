import {useState, useEffect} from 'react';
import axios from '../http/Axios';
// import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function  Home(){
        const [goods, setGoods] = useState();


 
    const m1 = async () => {
        const {data}= await axios.get('/device/');
        return data;
    }



    useEffect(() => {
        m1().then(data => setGoods(data)).catch(e => console.log(e.message));
     if(goods) console.log(goods);
    }, [])

if(!goods) return <p>g</p>;


    return ( <>
         <div id="content" className="col-sm-9">
         <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Новые">
                    <Container fluid>
                        <Row>
                            {goods.created.map((prop, index) => {
                            return  <Col key={index}>
                                        <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>{prop.name}</Card.Title>
                                            <Card.Text>
                                            {prop.sale + prop.img}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                            })}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="profile" title="Дешевле">
                {goods.price.map((prop, index) => {
                    return  <Card style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{prop.name}</Card.Title>
                                <Card.Text>
                                {prop.sale + prop.img}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        })}
                </Tab>
                <Tab eventKey="contact" title="Скидка" >
                    {goods.sale.map((prop, index) => {
                    return  <Card style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{prop.name}</Card.Title>
                                <Card.Text>
                                {prop.sale + prop.img}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                            </Card>
                        })}
                </Tab>
        </Tabs>

        </div>
    </>); 
}
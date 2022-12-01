import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';

export default function  Header(){

    const {device} = useContext(Context)
    const showModal = () => {
        device.setModal(true);
    }

    return (
        <Container>
                <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                <Nav.Link onClick={showModal} >Вход</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Регистрация</Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
    );
}
    

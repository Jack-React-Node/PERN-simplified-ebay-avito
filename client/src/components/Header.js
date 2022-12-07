import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/esm/Container';

import Nav from 'react-bootstrap/Nav';

export default function  Header(){

    const {helpers} = useContext(Context)

    const showModalLogin = () => {
        helpers.setModalLogin(true);
    }
    const showModalRegistration = () => {
        helpers.setModalRegistration(true);
    }

    return (
        <Container>
                <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                <Nav.Link onClick={showModalLogin} >Вход</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={showModalRegistration} >Регистрация</Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
    );
}
    

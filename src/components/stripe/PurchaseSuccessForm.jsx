import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

export default function PurchaseSuccessForm() {
    // we need useLocation because I passed props to useHistory when FormShipping  component need to pass data from itself to the success page
    const location = useLocation();
    const cartItems = location.state.cartItems;
    const total = location.state.total;

    return (
        <>
            <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                className='mb-3'
            >
                <Tab eventKey='User-Info' title='User Info'></Tab>
                <Tab eventKey='Billing' title='Billing'>
                    asssss
                </Tab>
                <Tab eventKey='Shipping ' title='Shipping'>
                    ffff
                </Tab>
                <Tab eventKey='itemsInfo ' title='Items'>
                    <>
                        {cartItems.map((item) => {
                            return (
                                <Card className='p-2 ' border='secondary'>
                                    <Card.Header>Item Name: {item.name}</Card.Header>
                                    <Card.Body>
                                        <Image
                                            src={item.imageUrl}
                                            fluid
                                            thumbnail
                                            style={{
                                                minWidth: '350px',
                                                maxHeight: '400px',
                                            }}
                                        />
                                        <p className='text-decoration-none'>
                                            Price: {item.price}$
                                        </p>
                                        <p className='text-decoration-none'>
                                            Quantity: {item.quantity}
                                        </p>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                        <p className='d-flex h4 text-primary mt-1 justify-content-end '>
                            Total: {total}$
                        </p>
                    </>
                </Tab>
            </Tabs>
        </>
    );
}

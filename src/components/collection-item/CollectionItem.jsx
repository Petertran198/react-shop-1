import React, { useState } from 'react';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import './collectionItem.scss';
const CollectionItem = (props) => {
    //state for hovered shopping item
    const [isHovered, setIsHovered] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                className={`collection-item my-2 ${
                    isHovered && 'selectedItem img-thumbnail p-2'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleShow}
            >
                <div className='h-100 w-100 img-container'>
                    <div
                        className='image background-image'
                        style={{ backgroundImage: `url(${props.imageUrl})` }}
                    />
                </div>

                <div className='collection-footer'>
                    <span className='name'>{props.name}</span>
                    <span className='price'>{props.price}</span>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className=' modal-wide'>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <img src={`${props.imageUrl}`} className='img-thumbnail' />
                    {/* <h3 className='lead p-1'>Price: {props.price}$</h3> */}
                    <div className='d-flex flex-column '>
                        <h3 className='lead p-1 mb-auto'>
                            <Dropdown>
                                <Dropdown.Toggle id='dropdown-basic'>
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href='#/action-1'>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href='#/action-2'>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href='#/action-3'>
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </h3>{' '}
                        <h3 className='lead p-1'>
                            <div className='dropdown'>
                                <button
                                    className='btn dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton2'
                                    data-toggle='dropdown'
                                >
                                    Quantity
                                </button>
                                <div
                                    class='dropdown-menu'
                                    aria-labelledby='dropdownMenuButton2'
                                >
                                    <a className='dropdown-item' href='#'>
                                        1
                                    </a>
                                    <a className='dropdown-item' href='#'>
                                        2
                                    </a>
                                    <a className='dropdown-item' href='#'>
                                        3
                                    </a>
                                    <a className='dropdown-item' href='#'>
                                        4
                                    </a>
                                </div>
                            </div>
                        </h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CollectionItem;

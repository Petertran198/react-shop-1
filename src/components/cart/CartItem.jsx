import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './CartItem.scss';
export default function CartItem({ item }) {
    const { increase } = useCartContext();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [size, setSize] = useState(item.size);
    const [quantity, setQuantity] = useState(item.quantity);
    const [cost, setCost] = useState(null);

    const { addProduct, decrease } = useCartContext();
    const handleAddCart = (e) => {
        e.preventDefault();
        handleClose();
        const shopItem = {
            id: item.id,
            price: item.price,
            name: item.name,
            quantity: quantity,
            size: size,
        };
        console.log(shopItem);
        if (item && item.size) {
            addProduct(shopItem);
        }
    };

    useEffect(() => {
        setCost(quantity * item.price);
    }, [quantity]);

    return (
        <>
            <li class='list-group-item d-flex justify-content-between  align-items-center clickable'>
                <span className='h6' style={{ flex: '1' }} onClick={handleShow}>
                    {item.name}
                </span>
                <span className='h6 ' style={{ flex: '1' }}>
                    {item.price}$
                </span>
                {item.size && (
                    <span className='h6  ' style={{ flex: '1' }}>
                        {item.size}
                    </span>
                )}
                <div>
                    <span className='h6 py-1 px-3 ' style={{ flex: '1' }}>
                        {item.quantity}
                    </span>
                </div>
                <span
                    className='h6 d-flex justify-content-end '
                    style={{ flex: '1' }}
                >
                    {item.price * item.quantity}$
                </span>{' '}
            </li>

            <Modal show={show} onHide={handleClose} className=' modal-wide'>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <img src={`${item.imageUrl}`} className='img-thumbnail' />
                    {/* <h3 className='lead p-1'>Price: {props.price}$</h3> */}
                    <div className='d-flex flex-column'>
                        <h3 className='lead p-1 mb-auto '>
                            <div className='dropdown'>
                                <button
                                    className='btn dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton'
                                    data-toggle='dropdown'
                                >
                                    {size ? size : 'Size'}
                                </button>
                                <div
                                    class='dropdown-menu'
                                    aria-labelledby='dropdownMenuButton'
                                >
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) => setSize(e.target.text)}
                                    >
                                        Small
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) => setSize(e.target.text)}
                                    >
                                        Medium
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) => setSize(e.target.text)}
                                    >
                                        Large
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) => setSize(e.target.text)}
                                    >
                                        Extra Large
                                    </a>
                                </div>
                            </div>
                        </h3>{' '}
                        <h3 className='lead p-1 mb-auto'>
                            <div className='dropdown'>
                                <button
                                    className='btn dropdown-toggle'
                                    type='button'
                                    id='dropdownMenuButton2'
                                    data-toggle='dropdown'
                                >
                                    {quantity ? quantity : 'Quantity'}
                                </button>
                                <div
                                    class='dropdown-menu'
                                    aria-labelledby='dropdownMenuButton2'
                                >
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) =>
                                            setQuantity(parseInt(e.target.text))
                                        }
                                    >
                                        1
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) =>
                                            setQuantity(parseInt(e.target.text))
                                        }
                                    >
                                        2
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) =>
                                            setQuantity(parseInt(e.target.text))
                                        }
                                    >
                                        3
                                    </a>
                                    <a
                                        className='dropdown-item'
                                        onClick={(e) =>
                                            setQuantity(parseInt(e.target.text))
                                        }
                                    >
                                        4
                                    </a>
                                </div>
                            </div>
                        </h3>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <h3 className='w-25 lead text-secondary'>
                        {cost != 0 ? cost + '$' : item.price + '$'}
                    </h3>
                    <Button variant='danger' onClick={handleAddCart}>
                        <FontAwesomeIcon icon={faTrash} /> Delete Item
                    </Button>
                    <Button variant='primary' onClick={handleAddCart}>
                        Edit Cart Item <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

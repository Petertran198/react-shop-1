import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './collectionItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../contexts/CartContext';

const CollectionItem = ({ price, imageUrl, name, id }) => {
    //state for hovered shopping item
    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(false);
    // Drop down list
    const [size, setSize] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cost, setCost] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    };

    useEffect(() => {
        setCost(quantity * price);
    }, [quantity]);

    // Cart Context
    const { addProduct, ...cart } = useCartContext();

    const handleAddCart = (e) => {
        e.preventDefault();
        handleClose();
        const item = { id: id, price: price, name: name, quantity, size };
        if (item && item.size) {
            addProduct(item);
        }
    };
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
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                </div>

                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} className=' modal-wide'>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <img src={`${imageUrl}`} className='img-thumbnail' />
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
                        {cost != 0 ? cost + '$' : price + '$'}
                    </h3>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant='primary' onClick={handleAddCart}>
                        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CollectionItem;

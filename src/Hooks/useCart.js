import { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../FakeDB/fakeDB';
import useFirebase from './useFirebase';


const useCart = () => {
    const [cart, setCart] = useState([]);
    const { services } = useFirebase();
    useEffect(() => {
        const savedCart = getStoredCart();
        // const keys = Object.keys(savedCart);
        // fetch('http://localhost:5000/services/byKeys', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(keys)
        // })
        //     .then(res => res.json())
        //     .then(services => {
        if (services.length) {
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = services.find(service => service.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
        // })


    }, [services]);




    const handleCart = (service) => {
        const newCart = [...cart, service];
        setCart(newCart);
        // local storage
        addToDb(service.key);
    }



    return [cart, setCart, handleCart];
}

export default useCart;
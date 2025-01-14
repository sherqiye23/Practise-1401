import Container from "react-bootstrap/esm/Container";
import { Helmet } from "react-helmet";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { basketContext } from "../../context/BasketContext";

export default function Basket() {
    let { basket, setBasket } = useContext(basketContext)
    console.log(basket);

    const handleDelete = (item) => {
        let finded = basket.filter((element) => item._id != element._id) 
        setBasket(finded)
    }

    return (
        <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <Container className="my-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Decrement</td>
                            <td>Count</td>
                            <td>Increment</td>
                            <td>Total Price</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket.length != 0 ? (
                                basket.map((item) => (
                                    <tr key={item._id}>
                                        <td><img className="w-[100px] h-[100px]" src={item.image} /></td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td><button className="py-1 px-2 bg-red-300 rounded-2">Decrement</button></td>
                                        <td>{item.count}</td>
                                        <td><button className="py-1 px-2 bg-lime-400 rounded-2">Increment</button></td>
                                        <td>${item.price * item.count}</td>
                                        <td><button className="py-1 px-2 bg-red-400 rounded-2" onClick={() => handleDelete(item)}>Delete</button></td>
                                    </tr>
                                ))
                            ) : (
                                <h1>Sizin basket səhifəniz boşdur!</h1>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}
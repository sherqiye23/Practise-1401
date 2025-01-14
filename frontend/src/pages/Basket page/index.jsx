import Container from "react-bootstrap/esm/Container";
import { Helmet } from "react-helmet";

export default function Basket() {
    return (
        <>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Increment</td>
                            <td>Count</td>
                            <td>Decrement</td>
                        </tr>
                    </thead>
                </table>
            </Container>
        </>
    )
}
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
//import products from '../products'
import { getProducts } from '../DAO/ProductsDAO'
import { useEffect } from 'react'
import { useState } from 'react'


const HomeScreen = () => {

  const [products, setProducts] = useState([{}]);
    
    const fetchProducts = async () => {
    const result = await getProducts();
    console.log("Home result " + result)
    setProducts(result.data);


  }

  useEffect(() => {
    fetchProducts()
  }
, []);

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />

                </Col>

            ))}

        </Row>

    </>
  )
}

export default HomeScreen
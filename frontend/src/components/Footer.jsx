import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer> 
        <Container>

            <Row>   
                <Col className="text-center py-3">
                    WishCart &copy; {currentYear} Dilshad Mustafa | All rights reserved. | <a href="https://github.com/dilshadmustafa/wishcartlive" target="_blank" rel="noreferrer">WishCart</a>
                </Col>
            </Row>

        </Container>
    </footer>    
          )
}

export default Footer
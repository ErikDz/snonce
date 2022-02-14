import { Container, Row, Col } from "react-bootstrap";

function Footer(){
    return(
        <section style={{backgroundColor:"#202324 !important", height:"200px", display:"flex", alignItems:"center"}}>
            <Container>
                <Row>
                    <Col>
                    © 2022 SNONCE. All Rights Reserved.
                    </Col>
                    <Col>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <a>About Us</a>
                    <a>Get into contact</a>
                    <a>FAQ</a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer
import React from "react"
import Header from "../misc/navbar"
import Footer from "../misc/footer"
import { Container,Row,Col } from "react-bootstrap"
import {AiOutlineCheck, AiOutlineArrowRight} from "react-icons/ai"

import TicketImage from "../../Images/eth.png"

import Particles from "react-tsparticles"
import Particulas from "./particulas"
class Main extends React.Component{

    constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
    }

    handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    } 


    render(){
        const { windowWidth } = this.state; 

    return(
        <div>
            <Header></Header>

            <section style={{paddingTop:"100px", backgroundColor:"#283032", paddingBottom:"100px"}}>
            <Container>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{width:"1000px",display:"flex", flexDirection:"row", justifyContent:"center",justifyItems:"center",alignContent:"center"}}>

                        <div style={{width:"50%"}} className="display-small-main">
                            <h2>We Create Unique Discounts as NFTs<br></br>Join the Ecommerce Revolution.</h2>
                            <p className="subTitle"><AiOutlineCheck/> Stop ticket fraud<br></br><AiOutlineCheck/> Create a new source of income<br/><AiOutlineCheck/> Keep track of all your coupons<br/><AiOutlineCheck/> Step into the Metaverse</p>
                            <div className="normal" >

                                <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                                <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                                    <input  placeholder="Your email address"/>
                                    <span className="email-button" style={{marginLeft:"10px"}}>Get notified <AiOutlineArrowRight/> </span>
                                </div>
                                { (windowWidth < 821) ?  <Particulas style={{top:"-100px"}} className="disappear2"/> : null}

                            </div>
                        </div>
                        <div className="second-div-main" style={{height:"400px",width:"50%",paddingLeft:"30px", position:"relative" }}>
                           <Particulas/> 
                           <img  src={TicketImage} className="object" style={{width:"300px", left:"100px"}}/>
                        </div>

                    </div>
                </div>
                
            </Container>
            </section>

            <section style={{paddingTop:"50px"}} >
                <Container style={{width:"100%"}}>
                    <div style={{maxWidth:"600px"}}>
                        <h2>Say hello to the future of Ecommerce</h2>
                    </div>

            {/* Hero 1 */}
            <Row style={{padding:"60px 0 60px 0"}}>
                <Col xs={{order:1}}>
                    <img style={{backgroundColor:"white", width:"500px", marginBottom:"50px"}} src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"></img>

                </Col>
                <Col xs={{order:2}}>
                <h3>We Create Unique Discounts as NFTsJoin the Ecommerce Revolution.</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Stop ticket fraud<br></br><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Create a new source of income<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Keep track of all your coupons<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Step into the Metaverse</p>
                    <div className="normal" >
                        <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                    </div>
                </Col>
            </Row>


            {/*Hero 2*/}
            <Row style={{padding:"60px 0 60px 0"}}>
                <Col xs={{order:2}} md={{order:2}}>
                <h3>We Create Unique Discounts as NFTsJoin the Ecommerce Revolution.</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Stop ticket fraud<br></br><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Create a new source of income<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Keep track of all your coupons<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Step into the Metaverse</p>
                    <div className="normal" >
                        <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                    </div>
                </Col>
                <Col xs={{order:1}} md={{order:2}}>
                    <img style={{backgroundColor:"white", width:"500px",marginBottom:"50px"}} src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"></img>
                </Col>
            </Row>

            {/* Input email */}
            <div className="align-and-center" className="caja-email">
                <h3 style={{textAlign:"center"}}>Get notified when we launch!</h3>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                    <input placeholder="Your email"></input>
                    <span className="button2">Remember me <AiOutlineArrowRight/> </span>
                </div>


            </div>

            {/* Hero 3 */}
            <Row style={{padding:"60px 0 60px 0"}}>
                <Col xs={{order:1}}>
                    <img style={{backgroundColor:"white", width:"500px", marginBottom:"50px"}} src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"></img>

                </Col>
                <Col xs={{order:2}}>
                <h3>We Create Unique Discounts as NFTsJoin the Ecommerce Revolution.</h3>
                    <p className="subTitle" style={{color:"#aba499", fontWeight:"400"}}><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Stop ticket fraud<br></br><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Create a new source of income<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Keep track of all your coupons<br/><AiOutlineCheck style={{color:"rgb(0, 14, 160)"}}/> Step into the Metaverse</p>
                    <div className="normal" >
                        <h4 style={{marginTop:"80px"}}>Get notified when we launch</h4>
                        <div style={{display:"flex", flexDirection:"row", alignItems:"center" }}>
                        </div>
                    </div>
                </Col>
            </Row>



                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
    }
}

export default Main



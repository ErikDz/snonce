import { Container } from "react-bootstrap"
import Footer from "../misc/footer"
import Header from "../misc/navbar"

import PersonCard from "./personcard"

import Levente from "../../Images/levente.jpg"
import ErikDz from "../../Images/erikdz.jpg"
import Fryderyk from "../../Images/fryderyk.jpg"


function AboutUs(){
    return(
        <div>
            <Header/>
            <section style={{backgroundColor:"#283032"}}>
                <Container className="align-and-center" style={{justifyContent:"space-around", padding:"100px 0 200px 0", flexWrap:"wrap"}}>
                    <PersonCard image={Levente}
                    name={"Levente Ludányi"}
                    title={"Co-Founder - CTO"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique de Paris. "}
                    personalsite={""}
                     />
                    <PersonCard image={ErikDz}
                    name={"Erik Dziekonski Bautista"}
                    title={"Co-Founder - CTO"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique de Paris. Previous founder of EasySend.es (mass whatsapp distribution) and creator of papersbytopic.com."}
                    personalsite={"erikdziekonski.com"}
                     />
                    <PersonCard image={Fryderyk}
                    name={"Fryderyk Sitnik"}
                    title={"Co-Founder - CMO"}
                    description={"Student of Mathematics and Computer Science at École Polytechnique de Paris. "}
                    personalsite={""}
                     />
                </Container>
            </section>
            <Footer/>
        </div>
    )
}

export default AboutUs
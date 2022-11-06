import { Container, Row } from "react-bootstrap";
// import {useNavigate} from 'react-router-dom';

function About(){
    // let Navigate=useNavigate();
    // function navigation(){
    //     Navigate(
    //       '/order'
    //     )
    // }
    return(
        <>
        <Container>
            <Row>
            <div className="about">
               <img src="pics/about-img.svg" alt="about pics" style={{    height: '675px'}}/>
               <div className="about-heading">
               <h2>Our Coffee Makes Your Adventure Even Better</h2>
               <p>Our coffee is made up of world best ingredient. Anyone who try become our customer because our coffee make everyone dreams's possible to achieved</p>
               {/* <button type="button" className="btn" onClick={navigation}>ORDER NOW</button> */}
               </div>
            </div>
            </Row>
        </Container>
        </>
    )
}
export default About;
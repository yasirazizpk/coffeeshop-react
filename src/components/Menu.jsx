import { Container, Row } from "react-bootstrap";


function Menu () {
    return (
        <Container fluid className="cont">
            <Row>
            <div className="menu-card">
                <div>
                    <img src='pics/icon-1.png' alt="coffee"/>
                    <h2>variety of coffee</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src='pics/icon-2.png' alt="coffee"/>
                    <h2>Coffee Beans</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <img src='pics/icon-3.png' alt="coffee"/>
                    <h2>Breakfast And Sweet</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div> 
                    <img src='pics/icon-4.png' alt="coffee"/>
                    <h2>Ready To Go Coffee</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="coffee-card">
                <div>
                    <img src="pics/menu-1.png" alt="menu"/>
                    <h3>Love you Coffee</h3>
                </div>
                <div>
                <img src="pics/menu-2.png" alt="menu"/>
                    <h3>Cappuccino</h3>
                </div>
                <div>
                    <img src="pics/menu-3.png" alt="menu"/>
                    <h3>Mocha Coffee</h3></div>
                <div>
                    <img src="pics/menu-4.png" alt="menu"/>
                    <h3>Frapoccino</h3></div>
                <div>
                    <img src="pics/menu-1.png" alt="menu"/>
                    <h3>Love Heart Coffee</h3></div>
                <div>
                <img src="pics/menu-6.png" alt="menu"/>
                    <h3>Black Coffee</h3>
                </div>
            </div>
            </Row>
        </Container>     
    );
}
export default Menu;
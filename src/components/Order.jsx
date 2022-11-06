import { Container, Row } from "react-bootstrap";


function Order(){
  
  

     return(
        <>
        <Container className="container">
         <Row>
         <div>
           <div>
            <h2>Book Your Order</h2>
           </div>
           <div>
            <form>
               <label>
                  <span>Name:</span>
                  <input type="text" name="name"/>
               </label>
               <label>
                  <span>adress:</span>
                  <input type="address" name="address"/>
               </label>
               <label>
                  <span>phone:</span>
                  <input type="tel" name="tel"/>
               </label>
            </form>
           </div>
         </div>
         </Row>
         </Container>
        </>
     );
}
export default Order;
import { Container } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

       function Home () {
//     let Navigate= useNavigate();
//     function navigation(){
//       Navigate(
//         '/order'
//       )
//     }
    return(
      <div>
        <Container fluid  className="home" style={{backgroundImage:`url("pics/home-bg.jpg")`}}>
       
          <div className="home-slogan">
            <h1>COFFEE HEAVEN</h1>
            <p> A CUP OF COFFEE WILL MAKE YOUR DAY.</p>
            {/* <button type='button' className="home-btn" onClick={navigation}>ORDER NOW</button> */}
          </div>
        </Container>
      </div>
    );
}
export default Home;
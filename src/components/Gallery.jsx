


function Gallery () {
    return (
           <>
             
              <div className="gallery" style={{backgroundImage:`url("pics/coffee.jpg")`}}>
                  <h3 className="g-heading">coffee from the best sunny plantation</h3>
                
                </div>
                <div className="g-div2" style={{backgroundColor:'blanchedalmond'}}>
                  <div>
                  <h3 className="heading-1">best seller product this week!</h3>
                  <p>You can't have a decent day without a decent coffee</p>
                  </div>
                  <div className="g-pics">
                    <div className="descrip">
                      <img src="pics/gp-3.jpeg" alt="galerry" />
                      <h3>mocha coffee</h3>
                      <h4>$10</h4>
                    </div>
                    <div className="descrip">
                    <img src="pics/gp-2.webp" alt="galerry" />   
                    <h3>love heart coffee</h3> 
                    <h4>$13</h4>               
                      </div>
                      <div className="descrip">
                      <img src="pics/gp-4.jpeg" alt="galerry" /> 
                      <h3>cake slice coffee</h3> 
                      <h4>$20</h4>              
                      </div>
                      <div className="descrip">
                      <img src="pics/gp-1.jpg" alt="galerry" />    
                      <h3>black coffee</h3>   
                      <h4>$8</h4>      
                      </div>
                  </div>
                </div>
              </>
    );
}
export default Gallery;
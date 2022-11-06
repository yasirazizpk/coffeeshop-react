
function Contact() {
    return(
       <>
        <div className="contact">
        <div className="image">
                    <img src="pics/contact-img.svg" alt="" />
                </div>
               <div className="contact-form">
                <form >
                    <h3>book a table </h3>
                <input type="text" name="name" required className="box" maxlength="20"
                placeholder="enter name" />

                <input type="number" name="guest" required className="box" min="0" max="99" 
                placeholder="enter persons" maxlength="20" />
                 <input type="tel" name="tel" required className="box" min="0" max="99" 
                placeholder="enter your phone number" maxlength="12" />

                <input type="submit" name="send" value="send message" className="btn"/>



                </form>
                </div>

        </div>
       </>
    );
}
export default Contact;
  import './contact.css'
import Form from './form'

 const Contact = () => {
    return (
        <>
        <div className='contact-div'>
            <div  className='contact-text'>
            <h1 className='con-text'>Contact</h1>
            </div>
            <div className='contact-indivs'>
                <div>
                    <div className='to-div'>
                    <h1>Let's work</h1>
                    <h1>together</h1>
                    </div>
                    <div className='mail-grid'>
                    <div className='mail-div'>
                        <h3>Mail</h3>
                        <p>igwedaniel128@gmail.com</p>
                    </div>
                    <div className='mail-div'>
                        <h3>Address</h3>
                        <p>GRA phase 1</p>
                    </div>
                    <div className='mail-div'>
                        <h3>Phone</h3>
                        <p>+2349130999766</p>
                    </div>
                    </div>
                    
                </div>
                <div>
                 <Form/>
                </div>
            </div>
        </div>
        </>
    )
 }

 export default Contact
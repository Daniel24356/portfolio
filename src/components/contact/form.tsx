 import './form.css'

 const Form = () => {
    return (
        <>
        <div>
            <form  className='form-div' >
                <input className='name-f' type="text" placeholder=' Name'/>
                <input className='name-f'type="email" placeholder='Email' />
                <div className='message-div'>
                <input className='message-f' name='message' type="text" placeholder='Message' />
                </div>
                <button className='btn-message'>Send Message</button>
            </form>
        </div>
        </>
    )
 }

 export default Form
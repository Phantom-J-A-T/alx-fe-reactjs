import { useState } from "react";

function Contact (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!, It has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');

    };
    return (
        <div style={{
            backgroundColor: '#f0f0f0', 
            padding: '20px', 
            borderRadius: '10px', 
            textAlign: 'center', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
        }}>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
        <form  onSubmit={handleSubmit} style={{
        backgroundColor: 'skyblue', 
        padding: '20px', 
        borderRadius: '10px', 
        textAlign: 'center', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '50%',
        alignItems: 'center',
        margin: 'auto'
    }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  value={name} placeholder="Full Name" onChange={(e) => setName(e.target.value)} required  style={{width: '70%', borderRadius:'15px', height: '20px', padding: '10px'}}/>
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} placeholder="Valid Email" onChange={(e) => setEmail(e.target.value)} required style={{width: '70%', borderRadius:'15px', height: '20px', padding: '10px'}}/>
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={message} placeholder="Type Message here" onChange={(e) => setMessage(e.target.value)} required style={{width: '70%', borderRadius:'15px', height: '50px', padding: '10px'}}></textarea>
            
            <button type="submit" style={{borderRadius:'15px', padding: '10px', backgroundColor: 'blue', width: '30%'}}>Send</button>
        </form>
        </div>
    );
}

export default Contact;
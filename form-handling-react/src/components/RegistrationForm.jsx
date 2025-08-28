import {useState} from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required'; //if (!username)
        if (!formData.email) {   //if (!email)
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {  //if (!password)
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
        } else {
            setErrors({});
            setSuccessMessage('Registration successful!');
            // Here you would typically handle the form submission, e.g., send data to a server
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    //value={username}
                    onChange={handleChange}
                />
                {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    //value={email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    //value={password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Register</button>
            {successMessage && <p className="success">{successMessage}</p>}
        </form>
    );
}

export default RegistrationForm;
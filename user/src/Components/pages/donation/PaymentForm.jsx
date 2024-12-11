import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleNumberInput = (e) => {
        const { name, value } = e.target;
        if (!/^\d*$/.test(value)) {
            setFormData({
                ...formData,
                [name]: value.replace(/[^0-9]/g, '')
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send
        const donorData = {
            name: formData.fullName,
            email: formData.email
        };

        try {
            const response = await fetch('http://localhost:3000/donors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donorData),
            });

            if (response.ok) {
                console.log("Data successfully saved!");
                alert("Thank you for your generosity! 😊 Your contribution makes a positive impact on the community.");
                setFormData({
                    fullName: '',
                    email: '',
                    address: '',
                    city: '',
                    state: '',
                    zip: '',
                    cardName: '',
                    cardNumber: '',
                    expMonth: '',
                    expYear: '',
                    cvv: ''
                });
            } else {
                console.error("Failed to save data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    return (
        <div className="main">
            <div className="con-layer">
                <section className="con-section">
                    <h2>Together, We Make a Difference</h2>
                    <p>Every donation helps us take meaningful steps toward creating cleaner and more connected communities. For every <span>50 PHP</span> contributed, we are able to remove <span>1 kilogram</span> of trash from our environment. The funds collected will go directly to local charities, allowing us to extend kindness to those who need it most while keeping our surroundings beautiful and sustainable. Join us in fostering a spirit of <span>generosity</span> and making a <span>positive impact</span> together.</p>
                </section>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="column">
                            <h3 className="title">Billing Address</h3>
                            <div className="input-box">
                                <span>Full Name :</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span>Email :</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span>Address :</span>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Room - Street - Locality"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span>City :</span>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="San Pablo City"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex">
                                <div className="input-box">
                                    <span>State :</span>
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="Philippines"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <span>Zip Code :</span>
                                    <input
                                        type="text"
                                        name="zip"
                                        placeholder="123 456"
                                        value={formData.zip}
                                        onInput={handleNumberInput}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <h3 className="title">Payment</h3>
                            <div className="input-box">
                                <span>Name On Card :</span>
                                <input
                                    type="text"
                                    name="cardName"
                                    placeholder="Card Name"
                                    value={formData.cardName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-box">
                                <span>Credit Card Number :</span>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="1111 2222 3333 4444"
                                    value={formData.cardNumber}
                                    onInput={handleNumberInput}
                                    maxLength="16"
                                />
                            </div>
                            <div className="input-box">
                                <span>Exp. Month :</span>
                                <input
                                    type="text"
                                    name="expMonth"
                                    placeholder="November"
                                    value={formData.expMonth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex">
                                <div className="input-box">
                                    <span>Exp. Year :</span>
                                    <input
                                        type="text"
                                        name="expYear"
                                        placeholder="2025"
                                        value={formData.expYear}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <span>CVV :</span>
                                    <input
                                        type="password"
                                        name="cvv"
                                        placeholder="123"
                                        value={formData.cvv}
                                        onInput={handleNumberInput}
                                        maxLength="3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="btn" 
                        disabled={!isFormValid}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;

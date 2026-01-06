import React, { useState } from 'react';
import './PageStyles.css';

const API_BASE_URL = 'https://chainofcommand.api.txdynamics.io';

export const Contactpage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear status message when user starts typing
        if (submitStatus.type) {
            setSubmitStatus({ type: null, message: '' });
        }
    };

    const validateForm = () => {
        if (!formData.firstName.trim()) {
            setSubmitStatus({ type: 'error', message: 'First name is required' });
            return false;
        }
        if (!formData.lastName.trim()) {
            setSubmitStatus({ type: 'error', message: 'Last name is required' });
            return false;
        }
        if (!formData.email.trim()) {
            setSubmitStatus({ type: 'error', message: 'Email is required' });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
            return false;
        }
        if (!formData.message.trim()) {
            setSubmitStatus({ type: 'error', message: 'Message is required' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName.trim(),
                    lastName: formData.lastName.trim(),
                    email: formData.email.trim(),
                    subject: formData.subject,
                    message: formData.message.trim()
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ 
                    type: 'success', 
                    message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.' 
                });
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
            } else {
                setSubmitStatus({ 
                    type: 'error', 
                    message: data.message || 'Failed to send message. Please try again later.' 
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrapper" style={{ maxWidth: '64rem' }}>
                {/* Header Section */}
                <div className="page-header">
                    <h1 className="page-title">Get in Touch</h1>
                    <p className="page-subtitle">We'd love to hear from you</p>
                    <div className="effective-date">
                        Chain of KO-mmand™ Support
                    </div>
                </div>

                <div className="contact-grid">
                    {/* Contact Info Card */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="card" style={{ marginBottom: 0, padding: '2rem' }}>
                            <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#fdf2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', margin: '0 auto 1rem auto' }}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 style={{ fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>Email Us</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>For general inquiries and support</p>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chainofko-mmand.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#db2777', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}
                            >
                                support@chainofko-mmand.com
                            </a>
                        </div>

                        <div className="card gradient-card" style={{ marginBottom: 0, padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: 'white' }}>Need Help?</h3>
                            <p style={{ color: '#f3e8ff', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Check out our detailed documentation and FAQs for quick answers.</p>
                            <a href="https://www.chainofko-mmand.com" className="link" target="_blank" rel="noopener noreferrer">Visit Help Center</a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <div className="card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                            <div className="card-top-border"></div>

                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Send us a Message</h2>

                            {submitStatus.type && (
                                <div 
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '0.5rem',
                                        marginBottom: '1.5rem',
                                        backgroundColor: submitStatus.type === 'success' ? '#d1fae5' : '#fee2e2',
                                        color: submitStatus.type === 'success' ? '#065f46' : '#991b1b',
                                        border: `1px solid ${submitStatus.type === 'success' ? '#10b981' : '#ef4444'}`,
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input 
                                            type="text" 
                                            id="firstName" 
                                            className="form-input" 
                                            placeholder="John"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input 
                                            type="text" 
                                            id="lastName" 
                                            className="form-input" 
                                            placeholder="Doe"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="form-input" 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select 
                                        id="subject" 
                                        className="form-select"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    >
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Support Request">Support Request</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea 
                                        id="message" 
                                        rows="4" 
                                        className="form-textarea" 
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                    style={{
                                        opacity: isSubmitting ? 0.6 : 1,
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};







import React from 'react';
import './PageStyles.css';

export const Contactpage = () => {
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
                            <a href="mailto:privacy@chainofko-mmand.com" style={{ color: '#db2777', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>privacy@chainofko-mmand.com</a>
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

                            <form>
                                <div className="grid-2" style={{ marginBottom: '1.5rem' }}>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" id="firstName" className="form-input" placeholder="John" />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: 0 }}>
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" id="lastName" className="form-input" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" id="email" className="form-input" placeholder="john@example.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select id="subject" className="form-select">
                                        <option>General Inquiry</option>
                                        <option>Support Request</option>
                                        <option>Feedback</option>
                                        <option>Partnership</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" rows="4" className="form-textarea" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

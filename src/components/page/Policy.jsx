import React from 'react';
import './PageStyles.css';
export const Policy = () => {
    return (
        <div className="page-container">
            <div className="content-wrapper">
                {/* Header Section */}
                <div className="page-header">
                    <h1 className="page-title">Privacy Policy</h1>
                    <p className="page-subtitle">Chain of KO-mmand™</p>
                    <div className="effective-date">
                        Effective Date: November 28, 2025
                    </div>
                </div>
                {/* Introduction Card */}
                <div className="card">
                    <div className="card-top-border"></div>
                    <p className="section-text max-w-2xl">
                        <span style={{ fontWeight: 'bold', color: '#111827' }}>Chain of KO-mmand™</span> (“we”, “our”, or “the App”) respects your privacy and is committed to protecting the personal data you share while using our app. This Privacy Policy explains how we collect, use, and safeguard your information.
                    </p>
                </div>
                {/* Main Content Stack */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <div className="card">
                        <div className="section-number">1</div>
                        <h2 className="section-title">Information We Collect</h2>
                        <p className="section-text max-w-2xl">We collect personal and non-personal information to provide and improve our services:</p>
                        <div className="grid-2">
                            <div className="info-box">
                                <h3 className="info-box-title">Personal Information</h3>
                                <div className="w-full">
                                    {['Name, email address, phone number, and login credentials', 'Profile details such as achievements, ranking, and subscription preferences'].map((item, idx) => (
                                        <div key={idx} className="list-item">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="info-box">
                                <h3 className="info-box-title">Automated Information</h3>
                                <div className="w-full">
                                    {['Device information (type, OS, unique identifiers)', 'Usage data including app activity, events participation, and rankings', 'IP address and location data to customize experience'].map((item, idx) => (
                                        <div key={idx} className="list-item">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section 2 */}
                    <div className="card">
                        <div className="section-number purple-theme">2</div>
                        <h2 className="section-title">How We Use Your Information</h2>
                        <div className="grid-3">
                            {[
                                'Enable account creation and secure access',
                                'Track user progress and rank within various disciplines',
                                'Manage events, rewards, and Hall of Fame inductions',
                                'Provide subscription services and premium features',
                                'Send notifications, updates, and communications regarding app activity',
                                'Ensure app security and prevent fraud'
                            ].map((item, idx) => (
                                <div key={idx} className="info-box">
                                    <div style={{ marginBottom: '0.75rem', color: '#8B5CF6' }}>
                                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="card">
                        <div className="section-number blue-theme">3</div>
                        <h2 className="section-title">Data Sharing</h2>
                        <p className="section-text">We may share information with:</p>
                        <div className="grid-2 mb-8">
                            <div className="info-box" style={{ backgroundColor: '#EFF6FF', borderColor: '#DBEAFE' }}>
                                <span style={{ fontWeight: 500, color: '#374151' }}>Service providers</span>
                                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>(payment processors, cloud services)</p>
                            </div>
                            <div className="info-box" style={{ backgroundColor: '#EFF6FF', borderColor: '#DBEAFE' }}>
                                <span style={{ fontWeight: 500, color: '#374151' }}>Authorities</span>
                                <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>(Law enforcement if required by law)</p>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', backgroundColor: '#EFF6FF', padding: '1rem 2rem', borderRadius: '1rem', border: '1px solid #DBEAFE' }}>
                            <p style={{ color: '#1E40AF', fontWeight: 500 }}>
                                We <span style={{ fontWeight: 'bold' }}>do not sell your personal information</span> to third parties.
                            </p>
                        </div>
                    </div>
                    {/* Section 4 */}
                    <div className="card">
                        <div className="section-number yellow-theme">4</div>
                        <h2 className="section-title">Your Rights</h2>
                        <div className="grid-2 max-w-2xl">
                            {[
                                'Access your personal information stored in the app',
                                'Request correction or deletion of your data',
                                'Withdraw consent for marketing communications',
                                'Opt out of non-essential app tracking features'
                            ].map((item, idx) => (
                                <div key={idx} className="info-box" style={{ backgroundColor: '#FFF7ED', borderColor: '#FFEDD5' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Section 5 & 6 Group */}
                    <div className="grid-2">
                        <div className="card dark-card">
                            <div className="section-number gray-theme">5</div>
                            <h2 className="section-title" style={{ color: 'white' }}>Data Security</h2>
                            <p style={{ color: '#D1D5DB', lineHeight: 1.625 }}>
                                We implement reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse. Your security is our priority.
                            </p>
                        </div>
                        <div className="card gradient-card">
                            <div className="section-number white-theme">6</div>
                            <h2 className="section-title" style={{ color: 'white' }}>Contact Us</h2>
                            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chainofko-mmand.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link"
                                >
                                    <svg width="20" height="20" className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span style={{ fontWeight: 500 }}>support@chainofko-mmand.com</span>
                                </a>
                                <a href="http://www.chainofko-mmand.com/data-request" className="link">
                                    <svg width="20" height="20" className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    <span style={{ fontWeight: 500 }}>Data Request Form</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import './PageStyles.css';

export const Terms = () => {
    return (
        <div className="page-container">
            <div className="content-wrapper">
                {/* Header Section */}
                <div className="page-header">
                    <h1 className="page-title">Terms & Conditions</h1>
                    <p className="page-subtitle">Chain of KO-mmand™</p>
                    <div className="effective-date">
                        Effective Date: November 28, 2025
                    </div>
                </div>

                {/* Introduction Card */}
                <div className="card">
                    <div className="card-top-border"></div>
                    <p className="section-text max-w-2xl">
                        By using the <span style={{ fontWeight: 'bold', color: '#111827' }}>Chain of KO-mmand™</span> app (“the App”), you agree to these Terms & Conditions. Please read them carefully before using our services.
                    </p>
                </div>

                {/* Main Content Stack */}
                <div className="space-y-12">

                    {/* Section 1 */}
                    <div className="card">
                        <div className="section-number">1</div>
                        <h2 className="section-title">Eligibility</h2>
                        <p className="section-text max-w-2xl">
                            The app is intended for individuals participating in solo sports/disciplines, including but not limited to:
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', maxWidth: '48rem', margin: '0 auto' }}>
                            {['CrossFit Challenge', 'Boxing', 'Golf', 'Gymnastics', 'Martial Arts', 'MMA', 'Tennis', 'Bicycling', '...Many More!'].map((sport, idx) => (
                                <span key={idx} style={{ padding: '0.5rem 1rem', backgroundColor: '#fdf2f8', color: '#db2777', borderRadius: '0.75rem', fontSize: '0.875rem', fontWeight: 500, border: '1px solid #fce7f3' }}>
                                    {sport}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="card">
                        <div className="section-number purple-theme">2</div>
                        <h2 className="section-title">Account Registration</h2>
                        <div className="grid-2">
                            <div className="info-box">
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', marginBottom: '1rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <span style={{ color: '#4b5563', fontSize: '0.875rem', fontWeight: 500 }}>Users must provide accurate information during registration.</span>
                            </div>
                            <div className="info-box">
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', marginBottom: '1rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                </div>
                                <span style={{ color: '#4b5563', fontSize: '0.875rem', fontWeight: 500 }}>You are responsible for maintaining the confidentiality of your account credentials.</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="card">
                        <div className="section-number green-theme">3</div>
                        <h2 className="section-title">Subscriptions & Payments</h2>
                        <div className="w-full max-w-2xl" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                'Multiple subscription packages with different features',
                                'Payments are non-refundable unless required by law',
                                'Benefits: Access to events, autograph sections, ranking updates, Hall of Fame eligibility'
                            ].map((item, idx) => (
                                <div key={idx} className="info-box" style={{ backgroundColor: '#f0fdf4', borderColor: '#dcfce7', flexDirection: 'row', justifyContent: 'center' }}>
                                    <span style={{ color: '#4b5563', fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="card">
                        <div className="section-number red-theme">4</div>
                        <h2 className="section-title">User Conduct</h2>
                        <div className="grid-3">
                            {[
                                'Users must comply with local laws and rules of each discipline.',
                                'Cheating, fraudulent behavior, or misuse may result in suspension.',
                                'Respect other users and avoid harassment.'
                            ].map((item, idx) => (
                                <div key={idx} className="info-box" style={{ backgroundColor: '#fef2f2', borderColor: '#fee2e2' }}>
                                    <span style={{ color: '#374151', fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="card">
                        <div className="section-number yellow-theme">5</div>
                        <h2 className="section-title">Hall of Fame & Rewards</h2>
                        <div className="grid-2">
                            <div className="info-box" style={{ backgroundColor: '#fefce8', borderColor: '#fef9c3' }}>
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ca8a04', marginBottom: '1rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </div>
                                <h3 style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Recognition</h3>
                                <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>Organized by app admin to recognize top performers.</p>
                            </div>
                            <div className="info-box" style={{ backgroundColor: '#fefce8', borderColor: '#fef9c3' }}>
                                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ca8a04', marginBottom: '1rem', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 style={{ fontWeight: 700, color: '#1f2937', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Awards</h3>
                                <p style={{ color: '#4b5563', fontSize: '0.875rem' }}>Awards based on performance and subscription level.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="card">
                        <div className="section-number purple-theme">6</div>
                        <h2 className="section-title">Intellectual Property</h2>
                        <p className="section-text max-w-2xl">
                            All content, trademarks, logos, and features are property of Chain of KO-mmand™.
                        </p>
                        <div style={{ backgroundColor: '#f3e8ff', padding: '1rem 2rem', borderRadius: '1rem', border: '1px solid #e9d5ff', display: 'inline-block' }}>
                            <p style={{ color: '#6b21a8', fontSize: '0.875rem', fontWeight: 500 }}>
                                Users may not copy, modify, or distribute app content without written permission.
                            </p>
                        </div>
                    </div>

                    {/* Section 7 & 8 Group */}
                    <div className="grid-2">
                        <div className="card">
                            <div className="section-number gray-theme">7</div>
                            <h2 className="section-title">Limitation of Liability</h2>
                            <p className="section-text" style={{ fontSize: '0.875rem' }}>
                                The app is provided “as-is” and we are not liable for indirect, incidental, or consequential damages.
                            </p>
                            <p style={{ color: '#1f2937', fontWeight: 500, fontSize: '0.875rem' }}>
                                Users participate in events at their own risk.
                            </p>
                        </div>

                        <div className="card gradient-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div className="section-number white-theme">8</div>
                            <h2 className="section-title" style={{ color: 'white' }}>Amendments</h2>
                            <p style={{ color: '#f3e8ff', lineHeight: 1.625, fontSize: '0.875rem' }}>
                                Chain of KO-mmand™ may update these terms at any time. Continued use of the app constitutes acceptance of the revised terms.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
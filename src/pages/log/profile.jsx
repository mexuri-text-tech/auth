import React, { useState } from 'react';
import './profile.css';

const ProfilePage = () => {
    const [user, setUser] = useState({
        name: 'Mathias',
        email: 'mathias@test.com',
        phone: '09038412092',
        bio: 'Frontend developer passionate about creating beautiful user interfaces.'
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Handle profile update logic
        console.log('Profile updated:', user);
    };

    return (
        <div className="profile-page">
            <main className="profile-container">
                <div className="profile-header">
                    <h1>My Profile</h1>
                    {!isEditing && (
                        <button
                            className="btn btn-outline"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="profile-card">
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={user.bio}
                                    onChange={handleChange}
                                    rows="4"
                                />
                            </div>
                            <div className="form-actions">
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="profile-info">
                            <div className="profile-avatar">
                                <div className="avatar-placeholder">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>
                            <div className="profile-details">
                                <h2>{user.name}</h2>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Bio:</strong> {user.bio}</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
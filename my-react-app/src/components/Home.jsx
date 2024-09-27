import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <img src="https://www.perseverenow.org/wp-content/uploads/2022/05/Persevere-Logo.png" alt="Peer Coder Logo" />
                <h1>Welcome to Peer Coder</h1>
                <p>Enhancing collaboration and learning among student developers at Persevere.</p>
            </header>
            <section className="Home-features">
                <h2>Features</h2>
                <ul>
                    <li>Real-time messaging</li>
                    <li>Group and one-on-one chats</li>
                    <li>Code sharing and collaboration</li>
                    <li>User authentication</li>
                    <li>Responsive design</li>
                    <li>Notifications for new messages</li>
                    <li>Typing indicators</li>
                    <li>Message reactions</li>
                </ul>
            </section>
            <section className="Home-testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>"Peer Coder has transformed the way I collaborate with my peers!" - Student Developer</blockquote>
                <blockquote>"The real-time code sharing feature is a game-changer." - Coding Enthusiast</blockquote>
            </section>
            <div className="Home-actions">
                <Link to="/login" className="Home-button">Login</Link>
                <Link to="/signup" className="Home-button">Sign Up</Link>
            </div>
            <footer className="Home-footer">
                <p>Contact us at <a href="mailto:kbridges.prsvr@gmail.com">kbridges.prsvr@gmail.com</a></p>
                <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link></p>
            </footer>
        </div>
    );
}

export default Home;


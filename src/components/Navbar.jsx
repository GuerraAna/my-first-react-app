import React, { useState } from 'react';
import './Navbar.css';

const NavLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Sobre' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#projects', label: 'Projetos' },
    { href: '#contact', label: 'Contato' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">Ana Guerra</div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} id="primary-navigation">
                    {NavLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} className="nav-link" onClick={closeMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className="nav-toggle"
                    aria-controls="primary-navigation"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                    onClick={toggleMenu}
                >
                    <span className="bar" aria-hidden="true"></span>
                    <span className="bar" aria-hidden="true"></span>
                    <span className="bar" aria-hidden="true"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

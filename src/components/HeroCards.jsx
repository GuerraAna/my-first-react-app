import React from 'react';
import './HeroCards.css';

const cards = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ana-clara-guerra/',
    imgAlt: 'LinkedIn',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/GuerraAna',
    imgAlt: 'GitHub',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    id: 'youtube',
    title: 'YouTube',
    href: 'https://www.youtube.com/@AnaGuerra-is6nr',
    imgAlt: 'YouTube',
    imgSrc: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
  }
];

export default function HeroCards() {
  return (
    <section className="hero-cards" aria-label="Hero cards">
      <div className="hero-cards-inner">
        {cards.map(card => (
          <a
            key={card.id}
            className="hero-card"
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            title={card.title}
          >
            <img src={card.imgSrc} alt={card.imgAlt} className="hero-card-icon" />
            <div className="hero-card-title">{card.title}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

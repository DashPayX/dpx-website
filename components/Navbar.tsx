import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>DashPayX</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li><a href="#staking">Staking</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
}

import React from "react"
import { Helmet } from 'react-helmet'

function Home() {
    return (
      <main className="Home">
        <Helmet>
          <html lang='en' />
          <title>Homepage</title>          
          <link rel="stylesheet" href="./../lib/styles/home.css" />
          <script src="./../lib/scripts/p5.js" />
          <script src="./../lib/scripts/particles.js" />
        </Helmet>

        <input className="d-none" type="range" min="1" max="6" step="1" id="step" defaultValue="5" />

        <section>
          <h1>
            <section className="text">
              <span>iurianu </span>
              <span>rocks</span>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="squiggly-0">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
                  <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-1">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>              
                <filter id="squiggly-2">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
                <filter id="squiggly-3">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
                </filter>              
                <filter id="squiggly-4">
                  <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
                </filter>
              </defs> 
            </svg>            
          </h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </section>
        <figure id="cog">
            <img src="./../lib/img/cog.gif" alt="cog" />
        </figure>

      </main>
    )
  }
  
  export default Home
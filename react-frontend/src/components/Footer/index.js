import React from "react"

const socialItems = [
  {
    name: 'Github',
    title: "Follow me on GitHub!",
    link: "https://github.com/iurianu",
    icon: "fab fa-github"
   },   
   {
    name: 'LinkedIn',
    title: "Connect with me on LinkedIn!",
    link: "https://www.linkedin.com/in/iurianu/",
    icon: "fab fa-linkedin"
   },  
   {
    name: 'Discord',
    title: "Join me on Discord!",
    link: "https://discord.gg/6nvcnCNNpF",
    icon: "fab fa-discord"
   },  
   {
    name: 'Facebook',
    title: "Follow me on Facebook!",
    link: "https://www.facebook.com/iurianu",
    icon: "fab fa-facebook-f"
   },  
   {
    name: 'Twitter',
    title: "Follow me on Twitter!",
    link: "https://twitter.com/iurianu",
    icon: "fab fa-twitter"
   }           
]

export default function Footer() {
    return (
      <>
        <footer id='site-footer' 
                className="container-fluid" 
                itemScope="itemscope"
                itemProp="publisher" 
                itemType="http://schema.org/Person"
              >

            <meta itemProp="url" content="https://iurianu.rocks" />
            <nav id="footer-nav" className="row p-3">
              <p className="col-sm-6 col-md-9 col-lg-10 mb-0 pb-2 pb-sm-0">
                Copyright<sup>&copy;</sup> 2022, <span itemProp="name">Iulian Andriescu</span>
              </p>

              <ul className="col-sm-6 col-md-3 col-lg-2 d-flex justify-content-between mb-0">
                {socialItems.map((social) =>
                  <li className="d-inline-block" key={social.name}>
                    <a  title={social.title} href={social.link} 
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        rel="nofollow noopener noreferrer" 
                        target="_blank" itemProp="sameAs"
                        >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  </li>   
                )}
              </ul>

            </nav>

            <figure id="modal-cog">
                <a id="modal-cog-link" data-href="GDPR-Modal" href="#" title="Cookie Settings">
                    <img src="./../lib/img/cog.gif" alt="cog" />
                </a>
            </figure>
            
        </footer>
      </>
    )
  }
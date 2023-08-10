import './footer.css'
function Footer (){
    return (
        <footer className="footer-display">
            <div>
                <h1 className='main-header'>Blogr</h1>
            </div>
            <div>
                <h1 className='footer-header'>Product</h1>
                <p className='footer-p'>Overview</p>
                <p className='footer-p'>Pricing</p>
                <p className='footer-p'>Marketplace</p>
                <p className='footer-p'>Features</p>
                <p className='footer-p'>Integrations</p>
            </div>
            <div>
                <h1 className='footer-header'>Company</h1>
                <p className='footer-p'>About</p>
                <p className='footer-p'>Team</p>
                <p className='footer-p'>Blog</p>
                <p className='footer-p'>Careers</p>
            </div>
            <div>
                <h1 className='footer-header'>Connect</h1>
                <p className='footer-p'>Contact</p>
                <p className='footer-p'>Newsletter</p>
                <p className='footer-p'>Linkedin</p>
            </div>
        </footer>

    )

}


export default Footer;
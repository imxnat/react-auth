import logo from '../images/logo.svg'
import notImg from '../images/not-allowed.svg'
import './NotAllowed.css'
import linkedinIcon from '../icons/linkedin_icon.svg'
import twitterIcon from '../icons/twitter_icon.svg'
import youtubeIcon from '../icons/youtube_icon.svg'



export default function NotAllowed() {
    return (
        <section className="not-allowed-page">
            <div className="company-logo"> 
            <img className='logo' src={logo} alt="" />
            </div>
            
            <div className="warning-container">
                <img className="not-img" src={notImg} alt="not allowed reference image" />
                <span className="main-title" >Need Permission!</span>
                <p className="warning-message" >It looks like you are <b>not authorized</b> to enter yet, wait for your company to approve you.</p>
            
                
                <div className="social-media">
                    <a href="https://twitter.com/t_Continuum" target="_blank" > <img className="social-icons" src={linkedinIcon} alt="company-linkedin" /> </a>
                    <a href="https://www.linkedin.com/company/transformation-continuum" target="_blank" > <img className="social-icons" src={twitterIcon} alt="company-twitter" /> </a>
                    <a href="https://www.youtube.com/channel/UCNbiHCSpN0oOzOqY4ODIzKw" target="_blank" > <img className="social-icons" src={youtubeIcon} alt="company-youtube" /> </a>
                </div>
            
            </div>

            
        </section>
    )
}

import Homes from '../assets/home.png';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
function Home() {
    const config  = {
        subtitle: 'Im a aspiring developer',
        social: {
            instagram: 'https://instagram.com/vetrivel.2006',
            linkedin: 'https://www.linkedin.com/in/vetrivel-s-79460028a/',
            github: 'https://www.github.com/vetrivel-27'
        }
    }

    return(
    <section className='homeSection' style={{marginTop:'30px'}}>
            <div className='homeTitle'>
            <h1 className='homeTitle'>Hi, <br/> Im <span className='text-black'>VETRIVEL S</span> 
                <p className='homeSubtitle'>{config.subtitle}</p>
            </h1>
            <div className='socialIcons'>
                <a href={config.social.instagram} className='socialIcon'><AiOutlineInstagram size={40} /></a>
                <a href={config.social.linkedin} className='socialIcon'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='socialIcon'><AiOutlineGithub size={40}/></a>
            </div>
       </div>
       <img className='homeImage' src={Homes} />
    </section>
    );
}
export default Home;

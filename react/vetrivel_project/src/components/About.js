import AboutImg from '../assets/about.jpg';
function About() {
    const config  = {
        line1: 'Hi, My name is Vetrivel S. I am on a journey of discovery in the tech world, exploring various domains to find my passion. This exploration allows me to gain insights into different technologies and methodologies, shaping my path as a developer.',
        line2: 'I am currently pursuing my B.Tech in Computer Science and Engineering at Vellore Institute of Technology, Vellore.',
        line3: 'I am a passionate developer with a keen interest in web development and design. I enjoy creating user-friendly interfaces and seamless experiences. My goal is to continuously learn and grow in this ever-evolving field.',
        line4: 'I have certain knowledge in languages such as asm, c, c++, java, react, html and css.'
    }
    return (
        <section className='about-section' id='about'>
            <div className='about-image'>
                <img className="about-img" src={AboutImg} alt="About" />
            </div>
            <div className='about-content'>
                <h1 className='about-title'>About Me</h1>
                <p className='about-text'>{config.line1}</p>
                <p className='about-text'>{config.line2}</p>
                <p className='about-text'>{config.line3}</p>
                <p className='about-text'>{config.line4}</p>
            </div>
        </section>
    );
}
export default About;

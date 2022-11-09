import GitHubSection from './GitHubSection'
import Accordian from './Accordian/Accordian'

function AboutMePage() {
  return (
    <>
      <div className='abm-cont'>
        <div className='abm-bio'>
          <h1>Who Am I?</h1>
          <p>
            I am a follower of Christ and I am a self-taught programmer with
            skills in HTML, CSS, JavaScript, React, and WordPress. I began
            learning to code in July of 2021 after deciding that I wanted to
            pursue web development as my vocational trade. <br />
            <br />
            Since beginning to code, I have used a variety of avenues to
            self-teach, ranging from CodeCademy.com courses to Udemy lectures to
            YouTube videos. <br /> <br />
            While currently, I am doing most of my work on the front-end with
            JavaScript, React, and CSS, I am an aspiring full-stack developer
            with intentions to learn Node.js and Database langauges like SQL.
            <br />
            <br />
          </p>
        </div>
        <div className='abm-picture'>he</div>
      </div>
      <div className='seperator-2'></div>
      <div className='section'>
        <div className='acc-flex'>
          <div className='acc-section-head'>
            <h1>My Developement Skills</h1>
            <h4>
              <a href='../../images/placeholder.png' target='_blank'>
                PDF Link to Technical Skills (url will be in FTP. copy link
                later)
              </a>
            </h4>
          </div>
          <Accordian first={true} />
          <Accordian first={false} />
        </div>
        <div className='seperator-2'></div>
      </div>
      <GitHubSection />
    </>
  )
}

export default AboutMePage

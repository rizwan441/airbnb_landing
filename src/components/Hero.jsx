import HeroImag from '../assets/Group 77.png'
const Hero = () => {
  return (
      <div>
          <section className='mainHero'>
              <img src={HeroImag} alt="heroImag" />
              <h1 className='heroHadding'>Online Experiences</h1>
                <p className='heroText'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
              
          </section>
    </div>
  )
}

export default Hero
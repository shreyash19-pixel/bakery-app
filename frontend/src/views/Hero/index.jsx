import React from 'react'
import { BackgroundFilter, HeroInfo,
  InfoButton,} from '../../styles/Hero'

const Hero = ({banner}) => {
  

  return (
    <HeroInfo id="home">
      <BackgroundFilter></BackgroundFilter>
      <div>
        <p>{banner.pretitle}</p>
        <h1>
          Sweet Treats,
          <br />
          Perfect Eats
        </h1>
        <InfoButton>SHOP NOW</InfoButton>
      </div>
    </HeroInfo>
  );
}

export default Hero
import React from 'react'
import { BackgroundFilter, HeroInfo,
  InfoButton,} from '../../styles/Hero'

const Hero = () => {
  return (
    <HeroInfo>
      <BackgroundFilter></BackgroundFilter>
      <p>Delicious Cafe</p>
      <h1>
        Sweet Treats,
        <br />
        Perfect Eats
      </h1>
      <InfoButton>SHOP NOW</InfoButton>
    </HeroInfo>
  );
}

export default Hero
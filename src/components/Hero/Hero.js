import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding  style={{marginBottom:"-70px"}}>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Hicham Hajla's Portfolio
        </SectionTitle>
        <SectionText>
        Driven by a deep passion for web development and cutting-edge technology, I thrive in collaborative environments where team synergy fuels innovative problem-solving and goal achievement. As an avid enthusiast of AI, I'm excited about the intersection of artificial intelligence and tech advancements. I'm confident that my unique blend of skills, experience, and enthusiasm for all things tech and AI will be a valuable asset to your dynamic team.
        </SectionText>
        <Button onClick={() => window.open('https://www.linkedin.com/in/hicham-hajla/', '_blank')}>Learn More</Button>
        {/* <Button onClick={()=> window.location = 'https://www.linkedin.com/in/hicham-hajla/'}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
); 

export default Hero;
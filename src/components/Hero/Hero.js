import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Hicham Hajla's Portfolio
        </SectionTitle>
        <SectionText>
        I am passionate about web development and Tech in general, and I like working as a team to solve problems and achieve goals. I am convinced that my combination of skills and experience can add value to your company.
        </SectionText>
        <Button onClick={()=> window.location = 'https://www.linkedin.com/in/hicham-hajla/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
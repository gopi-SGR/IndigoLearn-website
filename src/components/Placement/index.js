import Header from '../Header'

import {
  PlacementContainer,
  ResponsiveContainer,
  PlacementHeading,
  PlacementDetailsContainer,
  Heading,
  Description,
} from './styledComponents'

const Placement = () => (
  <>
    <Header />
    <PlacementContainer>
      <ResponsiveContainer>
        <PlacementHeading>100% Placement Assistance</PlacementHeading>
        <PlacementDetailsContainer>
          <Heading>Resume Buliding</Heading>
          <Description>
            Craft compelling resumes that effectively showcase skills,
            experience, and achievements to attract potential employers and
            secure job interviews
          </Description>
          <Heading>Career counselling</Heading>
          <Description>
            Provide personalized guidance and support to individuals in
            identifying and achieving their career goals through strategic
            planning and development.
          </Description>
          <Heading>Jobs</Heading>
          <Description>
            A job is a role where an individual performs tasks for an employer
            in exchange for compensation, contributing to their career and the
            economy
          </Description>
        </PlacementDetailsContainer>
      </ResponsiveContainer>
    </PlacementContainer>
  </>
)

export default Placement

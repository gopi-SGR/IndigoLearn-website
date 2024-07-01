import {GrUserExpert} from 'react-icons/gr'
import {FaUsersGear, FaRegClock, FaRegFile} from 'react-icons/fa6'
import {FaChalkboard} from 'react-icons/fa'
import {SiLevelsdotfyi} from 'react-icons/si'
import {PiExamBold} from 'react-icons/pi'
import Header from '../Header'

import {
  WhyChooseUsContainer,
  ResponsiveContainer,
  WhyChooseUsHeading,
  WhyChooseUsListContainer,
  Heading,
  Description,
  WhyChooseUsListItem,
  CourseDetailsListContainer,
  CourseItemContainer,
  CourseTextContainer,
  CourseItemDescription,
} from './styledComponents'

const ChooseUs = () => (
  <>
    <Header />
    <WhyChooseUsContainer>
      <ResponsiveContainer>
        <WhyChooseUsHeading>Why Choose Us?</WhyChooseUsHeading>
        <WhyChooseUsListContainer>
          <WhyChooseUsListItem>
            <GrUserExpert size={40} color="#4f46e5" />
            <Heading>Expert Faculty</Heading>
            <Description>
              They are dedicated individuals who combine academic theory with
              real-life industry knowledge, providing quality learning
              experience and sharing their knowledge with the students.
            </Description>
          </WhyChooseUsListItem>
          <WhyChooseUsListItem>
            <FaUsersGear size={40} color="#4f46e5" />
            <Heading>Complete Success Package</Heading>
            <Description>
              The Complete Success Package is a comprehensive program designed
              to equip you with the tools, strategies, and support needed to
              achieve your personal and professional goals. It includes
              personalized coaching, actionable resources, and ongoing guidance
              to ensure sustained progress and success. Transform your
              aspirations into reality with our expert-led, results-driven
              approach.
            </Description>
          </WhyChooseUsListItem>
          <WhyChooseUsListItem>
            <FaChalkboard size={40} color="#4f46e5" />
            <Heading>Placement</Heading>
            <Description>
              Our Placement Services connect you with top employers, offering
              personalized support to secure the ideal job for your skills and
              career goals. Maximize your opportunities and achieve professional
              success with our expert guidance.
            </Description>
          </WhyChooseUsListItem>
        </WhyChooseUsListContainer>
        <CourseDetailsListContainer>
          <CourseItemContainer>
            <Heading>Levels</Heading>
            <CourseTextContainer>
              <SiLevelsdotfyi color="#4f46e5" size={40} />
              <CourseItemDescription>Three (13 Papers)</CourseItemDescription>
            </CourseTextContainer>
          </CourseItemContainer>
          <CourseItemContainer>
            <Heading>Duration</Heading>
            <CourseTextContainer>
              <FaRegClock color="#4f46e5" size={40} />
              <CourseItemDescription>6-18 months</CourseItemDescription>
            </CourseTextContainer>
          </CourseItemContainer>
          <CourseItemContainer>
            <Heading>Exams</Heading>
            <CourseTextContainer>
              <PiExamBold color="#4f46e5" size={40} />
              <CourseItemDescription>Qualifie</CourseItemDescription>
            </CourseTextContainer>
          </CourseItemContainer>
          <CourseItemContainer>
            <Heading>Exemptions</Heading>
            <CourseTextContainer>
              <FaRegFile color="#4f46e5" size={40} />
              <CourseItemDescription>Upto 9 Papers</CourseItemDescription>
            </CourseTextContainer>
          </CourseItemContainer>
        </CourseDetailsListContainer>
      </ResponsiveContainer>
    </WhyChooseUsContainer>
  </>
)

export default ChooseUs

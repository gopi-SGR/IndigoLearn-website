import Popup from 'reactjs-popup'
import {FaCashRegister} from 'react-icons/fa'
import {SiCoursera} from 'react-icons/si'
import {AiOutlineYoutube} from 'react-icons/ai'
import Header from '../Header'

import {
  IndigoLearnContainer,
  ResponsiveContainer,
  BecomeACCAContainer,
  BecomeACCADescription,
  BecomeACCAOverViewContainer,
  ACCAOverItem,
  DescriptionContainer,
  DescriptionCount,
  DescriptionHeading,
  BecomeACCAHeading,
  CustomButton,
  SliverLearningButton,
  ButtonText,
  ButtonInsideACCAText,
  SliverLearningContainer,
  ButtonWrapContainer,
  RequestCallBackContainer,
  RequestCallBackHeading,
  UserFormContainer,
  CustomInput,
  CustomRequestCallButtom,
  SeparationContainer,
  PopupContainer,
  CloseIcon,
  CloseButton,
  ModalContainer,
} from './styledComponents'

const IndigoLearn = () => (
  <>
    <Header />
    <IndigoLearnContainer>
      <ResponsiveContainer>
        <SeparationContainer>
          <BecomeACCAContainer>
            <BecomeACCAHeading>Become ACCA in 18 months</BecomeACCAHeading>
            <BecomeACCADescription>
              Join a thriving community of successful students who have
              transformed their careers with our expert Guidance & Comprehensive
              Classes. Take control of your future!
            </BecomeACCADescription>
            <BecomeACCAOverViewContainer>
              <ACCAOverItem>
                <FaCashRegister color="#6366f1" size={40} />
                <DescriptionContainer>
                  <DescriptionCount>3,24,793</DescriptionCount>
                  <DescriptionHeading>Registered Users</DescriptionHeading>
                </DescriptionContainer>
              </ACCAOverItem>
              <ACCAOverItem>
                <SiCoursera color="#6366f1" size={40} />
                <DescriptionContainer>
                  <DescriptionCount>1,00,184</DescriptionCount>
                  <DescriptionHeading>Courses Enrolled</DescriptionHeading>
                </DescriptionContainer>
              </ACCAOverItem>
              <ACCAOverItem>
                <AiOutlineYoutube color="#6366f1" size={40} />
                <DescriptionContainer>
                  <DescriptionCount>2,53,78,818</DescriptionCount>
                  <DescriptionHeading>Minutes Watched</DescriptionHeading>
                </DescriptionContainer>
              </ACCAOverItem>
            </BecomeACCAOverViewContainer>
            <ButtonWrapContainer>
              <CustomButton>DOWNLOAD LEARNING</CustomButton>
              <SliverLearningButton>
                <SliverLearningContainer>
                  <ButtonText>SLIVER LEARNING PARTNER</ButtonText>
                  <ButtonInsideACCAText>ACCA</ButtonInsideACCAText>
                </SliverLearningContainer>
              </SliverLearningButton>
            </ButtonWrapContainer>
          </BecomeACCAContainer>
          <RequestCallBackContainer>
            <RequestCallBackHeading>
              Aspiring to be ACCA? Get in touch with us!
            </RequestCallBackHeading>
            <UserFormContainer>
              <CustomInput placeholder="Phone Number" type="text" />
              <CustomInput placeholder="Email ID" type="text" />
              <CustomInput placeholder="Current Qualification" type="text" />
              <CustomInput placeholder="Interested in" type="text" />
              <Popup
                trigger={
                  <CustomRequestCallButtom type="button">
                    Request Call Back
                  </CustomRequestCallButtom>
                }
                modal
                poistion="center center"
                nested
              >
                {close => (
                  <ModalContainer>
                    <CloseIcon className="close" onClick={close}>
                      &times;
                    </CloseIcon>
                    <PopupContainer>
                      <RequestCallBackHeading>
                        User Request Successfully Stored!
                      </RequestCallBackHeading>
                      <CloseButton
                        className="button"
                        onClick={() => {
                          console.log('modal closed ')
                          close()
                        }}
                      >
                        Close modal
                      </CloseButton>
                    </PopupContainer>
                  </ModalContainer>
                )}
              </Popup>
            </UserFormContainer>
          </RequestCallBackContainer>
        </SeparationContainer>
      </ResponsiveContainer>
    </IndigoLearnContainer>
  </>
)

export default IndigoLearn

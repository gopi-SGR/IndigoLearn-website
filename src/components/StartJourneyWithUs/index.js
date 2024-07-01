import Header from '../Header'
import Popup from 'reactjs-popup'

import {
  StartJourneyWithUsContainer,
  ResponsiveContainerWithUs,
  SeparationContainer,
  StartJourneyWithIndigoLearnContainer,
  StartJourneyWithHeading,
  SliverLearningButton,
  SliverLearningContainer,
  ButtonInsideACCAText,
  ButtonText,
  RequestCallBackContainer,
  RequestCallBackHeading,
  CustomRequestCallButtom,
  StartJourneyDescription,
  CustomInput,
  UserFormContainer,
  PopupContainer,
  CloseIcon,
  CloseButton,
  ModalContainer,
} from './styledComponents'
const StartJourneyWithUs = () => (
  <>
    <Header />
    <StartJourneyWithUsContainer>
      <ResponsiveContainerWithUs>
        <SeparationContainer>
          <StartJourneyWithIndigoLearnContainer>
            <StartJourneyWithHeading>
              Kick off Your ACCA Prep journey with IndigoLearn
            </StartJourneyWithHeading>
            <StartJourneyDescription>
              Sign-in and get instant accesses to our FREE Courses
            </StartJourneyDescription>
            <SliverLearningButton>
              <SliverLearningContainer>
                <ButtonText>SILVER LEARNING PARTNER</ButtonText>
                <ButtonInsideACCAText>ACCA</ButtonInsideACCAText>
              </SliverLearningContainer>
            </SliverLearningButton>
          </StartJourneyWithIndigoLearnContainer>
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
      </ResponsiveContainerWithUs>
    </StartJourneyWithUsContainer>
  </>
)

export default StartJourneyWithUs

import styled from 'styled-components'

export const StartJourneyWithUsContainer = styled.div`
background-color:#f1f5f9;
height:100vh;
@media (max-width:767px){
  overflow-y:auto;
}
`

export const ResponsiveContainerWithUs = styled.div`
width:90%;
margin:auto;
padding-top:40px;


`
export const SeparationContainer = styled.div`
@media (min-width:768px){
display:flex;
align-items:center;
justify-content:space-between;
}


`
export const StartJourneyWithIndigoLearnContainer = styled.div`
    display:flex
    flex-direction:column;
    @media (min-width:768px){
    }

`
export const StartJourneyWithHeading = styled.h1`
color:#272727;
font-size:34px;
font-family:"Roboto";

`
export const StartJourneyDescription = styled.p`
color: #2c364c;
font-size:24px;
font-family:"Roboto";
`

export const CustomButton = styled.button`
background-color:#4f46e5;
border:none;
outline:none;
cursor:pointer;
color:white;
font-size:18px;
font-family:"Roboto";
padding:20px;
border-radius:20px;
height:70px;

`
export const SliverLearningButton = styled(CustomButton)`
background-color: #ff0b37;
border-radius:20px;
height:70px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
export const SliverLearningContainer = styled.div`
display:flex;
align-items:center;
padding:5px;

`
export const ButtonInsideACCAText = styled.p`
border:1px solid white;
color:white;
font-size:18px;
font-family:"Roboto";
padding:4px;
margin-left:6px;
border-radius:12px;

`
export const ButtonText = styled.p`
color:white;
font-size:18px;
font-family:"Roboto";
`

export const RequestCallBackContainer = styled.div`
background-color:white;
border-top: #4f46e5 3px solid;
box-shadow:4px 4px 16px 4px #ffffff;
padding:20px;
margin-top:20px;
margin-bottom:20px;
@media (min-width:768px){
  width:50%;
   margin-left:20px;
}
`
export const RequestCallBackHeading = styled(StartJourneyWithHeading)`
font-size:28px;
text-align:center;
`
export const UserFormContainer = styled.form`
background-color:transparent;
display:flex;
flex-direction:column;

`
export const CustomInput = styled.input`
background-color:transparent;
height:38px;
border:1px solid #4f46e5;
border-radius:6px;
margin-bottom:10px;
outline:none;
font-size:20px;
padding:6px;

`
export const CustomRequestCallButtom = styled(CustomButton)`
height:45px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ModalContainer = styled.div`
background-color:white;

`
export const PopupContainer = styled.div`
border-radius:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:20px;
`
export const CloseButton = styled.button`
border:none;
cursor:pointer;
outline:none;
background-color:#4f46e5;
color:white;
font-size:20px;
font-family:"Roboto";
border-radius:12px;
padding:10px;
margin-top:10px;
`
export const CloseIcon = styled(CloseButton)`
display:flex;
flex-direction:column;
align-self:flex-end;
padding:6px;
border-radius:50%;

`

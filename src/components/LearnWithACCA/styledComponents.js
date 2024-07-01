import styled from 'styled-components'

export const LearnWithACCAContainer = styled.div`
background-color:#FFFFF7;
height:100vh;
`
export const ResponsiveContainer = styled.div`
width:90%;
margin:auto;
padding-top:20px;
padding-bottom:20px;

`
export const LearnWithACCAHeading = styled.h1`
color:#4f46e5;
font-size:34px;
font-family:"Roboto";
text-align:center;
`
export const LearnWithACCAListContainer = styled.ul`
list-style-type:none;
padding-left:0px;
display:flex;
flex-wrap:wrap;
margin-top:40px;
justify-content:center;


@media (max-width:767px){
   display:flex;
   justify-content:center;

}
`
export const LearnWithACCAListItem = styled.li`
background-color: #f8fafc;
margin-right:20px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:8px;
width:400px;
justify-content:space-between;
height:350px;
`
export const Heading = styled(LearnWithACCAHeading)`
font-size:24px;
`
export const Description = styled.p`
color:#4f46e5;
font-size:20px;
font-family:"Roboto";
text-align:center;
`
export const ItemInsideHeader = styled.p`
height:60px;
width:400px;
background-color:#4f46e5;
color:white;
font-size:22px;
margin:0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
export const ItemInsideFooter = styled.p`
height:40px;
width:400px;
background-color:#4f46e5;
color:white;
font-size:22px;
margin:0px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
export const ItemInsideAnotherListItems = styled(LearnWithACCAListContainer)`
background-color:transparent;
padding:20px;
display:flex;
flex-direction:column;

`
export const ItemInsideAnotherListItem = styled.li`
color:#4f46e5;
font-size:20px;
font-family:"Roboto";
list-style-type:disc;
margin:0px;


`
export const LearnWithACCAWrapListContainer = styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
`

import styled from 'styled-components'

export const WhyChooseUsContainer = styled.div`
background-color:#FFFFF7;
height:100vh;
`
export const ResponsiveContainer = styled.div`
width:90%;
margin:auto;
padding-top:20px;
padding-bottom:20px;

`
export const WhyChooseUsHeading = styled.h1`
color:#4f46e5;
font-size:34px;
font-family:"Roboto";
text-align:center;
`
export const WhyChooseUsListContainer = styled.ul`
list-style-type:none;
padding-left:0px;
display:flex;
flex-wrap:wrap;
@media (max-width:767px){
   display:flex;
   justify-content:center;
}
`
export const WhyChooseUsListItem = styled.li`
background-color: #f8fafc;
padding:20px;
margin-right:20px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:8px;
width:400px;
`
export const Heading = styled(WhyChooseUsHeading)`
font-size:24px;
`
export const Description = styled.p`
color:#4f46e5;
font-size:20px;
font-family:"Roboto";
text-align:center;
`

export const CourseDetailsListContainer = styled(WhyChooseUsListContainer)``
export const CourseItemContainer = styled.div`
background-color:white;
box-shadow:4px 4px 4px 4px #4f46e5;
border-top: #4f46e5 4px solid;
border-bottom:#4f46e5 1px solid;
border-left:#4f46e5 1px solid;
border-right:#4f46e5 1px solid;
padding:20px;
margin-top:20px;
margin-bottom:20px;
width:250px;
display:flex;
flex-direction:column;
align-items:center;
@media (min-width:768px){
   margin-left:30px;
   
}
@media (max-width:767px){
    margin-left:20px;
   justify-content:center;
}
`
export const CourseTextContainer = styled.div`
display:flex;
align-items:center;
`
export const CourseItemDescription = styled(Description)`
margin-left:10px;
`

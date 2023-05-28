import styled from '@emotion/styled';


export const HeaderBgr = styled.header`
background: #1F1F27;
box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.25);
max-width: 100%;
`

export const Conteiner = styled.div`
@media (min-width: 320px) {
height: 56px;
max-width:480px;
display: flex;
justify-content: space-between;
padding-right: 20px;
margin:auto;
}

@media (min-width: 768px) {
    min-width: 768px;
    padding-right: 20px;
         
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
    margin:auto;
    padding-right: 80px;
  }

`
export const Logo = styled.span`
@media (min-width: 320px) {
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 23.3169px;
line-height: 1.372;
 background: linear-gradient(180deg, #60C470 50%, rgba(96, 196, 112, 0) 107.5%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
padding-top: 10px;
padding-left: 20px;
position:relative;
}
@media (min-width: 768px) {
font-size: 29.1461px;
line-height: 1.372;
padding-left: 20px;

}
img{
    @media (min-width: 768px)
 {
   
}
display: inline;
     @media (min-width: 1280px) {
   }

}
`
export const Span = styled.span`
@media (min-width: 320px) {
display:none;
}
 @media (min-width: 768px)
 {
  display:inline-block;  
}`
export const Navigate = styled.div`
@media (min-width: 320px) {
display: flex;
gap: 28px;
padding-right: 40px;

}
 @media (min-width: 768px) {
    padding-right: 20px ;
    gap: 20px;
 }
`

export const Title = styled.p`
display:none;

@media (min-width: 768px) {
display:block;
color:#C7CCDC;
font-weight: 400;
font-size: 12px;
line-height: 1.667;
letter-spacing: 0.04em;
margin-top: 19px;
margin-bottom: 21px;
position:relative;
margin-left:30px;
}
`;

export const Btn = styled.button`
@media (min-width: 320px)
 {
    display:none;
}
@media (min-width: 768px)
 {
    display:block;
    font-weight: 400;
font-size: 12px;
line-height: 1.667;
letter-spacing: 0.04em;
text-decoration-line: underline;
color: #C7CCDC;
background-color:  #1F1F27;
width: 22px;
height: 36px;
margin-top: 11px;
margin-bottom: 21px;
border:none;
position:relative;
padding-left:20px;
border-left: solid 2px;
}
`;

export const Logout = styled.div`
@media (min-width: 320px)
 {
    width: 16px;
    height: 16px;
    display:block;
    position:relative;
    
 }
 @media (min-width: 768px)
 {
    display:none;
  
}


`


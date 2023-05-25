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
    display: flex;
    justify-content: space-between;
    padding-right: 80px;
  }
}
img {
width: 136px;
height: 32px;  
margin: 12px 0px 12px 20px;

@media (min-width: 768px) {
width: 170px;
height: 40px;  
margin: 8px 0px 8px 32px;
  }
}
`;

export const Navigate = styled.div`
@media (min-width: 320px) {
display: flex;
gap: 40px;
padding-right: 30px ;
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
export const User = styled.img`
display:block;
    @media (min-width: 320px) {

 width: 32px;
 height:32px; 
 margin-top: 10px;
 margin-bottom: 10px;
 position:absolute;
 right: 60px;
top: 5px;
    }
    @media (min-width: 768px) {
    right: 158px;
    top: 5px;
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

export const Logout = styled.image`
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


export const Psevdo = styled.image`

    @media (min-width: 320px)
 {
    display:none;
 }
@media (min-width: 768px)
 {
    display:block;
 width: 0px;
 height: 36px; 
 margin-top: 10px;
 margin-bottom: 10px;
 position:absolute;
 right: 40px;
top: -21px;
border: 1px solid #E0E5EB;
}
`
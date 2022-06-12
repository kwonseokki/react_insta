import styled from 'styled-components';

let Header = styled.header`
max-width:425px;
width:100%;
height:60px;
margin:0 auto;
position:fixed;
background:white;
z-index:99999;
display: flex;
align-items:center;
display:flex;
justify-content: ${props => props.justify};
`

export {  Header  }
import styled from "styled-components";

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
   
`;

export const Title = styled.h1`
    color: blue;
    font-size: 1.5em;
`;

export const Container = styled.div`
    width: 100%;
   
`;

export const ChoiceGroup = styled.div`
    display: flex;
`;

export const CarPurchase = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 70%;
`;

export const EnvelopTitle = styled.h2`
    background: rgb(245, 245, 245);
    font-size: 1.4vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 2rem;
    margin: 0 ;
    border: solid 1px #d3d3d3;
    border-radius: 5px 5px 0px 0px ; 

`;
export const EnvelopCar = styled.div`
    display: flex;
    width: 220px;
    margin-bottom: 5px ; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: solid 1px #d3d3d3;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #add8e6;
    transition: 0.5s all;

    &:hover{
        box-shadow: none;
        transform: translateY(2px);
        border: solid 1px #add8e6;
    }

    &:hover ${EnvelopTitle}{
        background: blue;
    }

`;


export const BoxCardz = styled.div`

  
`;

export const CarTitle = styled.p`
   
`;

export const Btn = styled.button`
    border-radius: 25px;
    border: none;
    color: #fff;
    background: #000;
    cursor: pointer;
`;


export const CarAssembler = styled.p`
`;


export const Preco = styled.p`

`;


export const Type = styled.p`

`;

export const ChoiceBox = styled.div`
    width: 30%;
    height: 35vw;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid 1px #d3d3d3;
`;

export const BoxDirection = styled.div`
    background-color: red;
`;

export const ParagraphDirection = styled.p`
    color: yellow;
    font-size: 1.5vw;
`;

export const BoxResult = styled.div`
    display: flex;
    width: 30%;
    margin-left: 70%;
`;

export const Total = styled.h3`
    font-size: 1.5vw;
`;

export const Group = styled.div`
    border: 1px solid blue;
    width: 80%; 
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-items: top;
`;

export const Paragraph = styled.p`

`;

export const Span = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

export const Subtraction = styled.button`
    background-color: #fff;
    color: blue;
    border: none;
    border-radius: 10px;
`;

export const BoxNameCar = styled.div`
    background: blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    height: 2vw;
`;

export const BoxAbout = styled.div`
    display: flex;
    justify-content: space-evenly; 
`;
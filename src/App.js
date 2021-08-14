import React, { Component } from "react";
import * as S from './styles'

class Car extends Component {

    state ={
      carAdd:[

      ],
      car: [
        {
          id: 0,
          name: "Jetta",
          assembler: "Volkswagen",
          price: 144000,
          type: "Sedan"
        },
        {
          id: 1,
          name: "Polo",
          assembler: "Volkswagen",
          price: 70000,
          type: "Hatch"
        },
        {
          id: 2,
          name: "T-Cross",
          assembler: "Volkswagen",
          price: 123000,
          type: "SUV"
        },
        {
          id: 3,
          name: "Tiguan R-line",
          assembler: "Volkswagen",
          price: 146000,
          type: "SUV"
        },
        {
          id: 4,
          name: "Civic",
          assembler: "Honda",
          price: 115000,
          type: "Sedan"
        },
        {
          id: 5,
          name: "Corolla",
          assembler: "Toyota",
          price: 110000,
          type: "Sedan"
        },
        {
          id: 6,
          name: "Corolla Cross",
          assembler: "Toyota",
          price: 184000,
          type: "SUV"
        },
        {
          id: 7,
          name: "Compass",
          assembler: "Jeep",
          price: 132000,
          type: "SUV"
        },
        {
          id: 8,
          name: "Golf G TI",
          assembler: "Volkswagen",
          price: 138000,
          type: "Hatch"
        }
      ]
    }

    funcBtnAdd = (event) => {
      const check = this.state.car.filter(item => {
        return item.id == event.target.id
      });
      this.setState({
        carAdd: this.state.carAdd.concat(check)
      })
      console.log(this.state.carAdd)
    }

    funcBtnRemove = (event) => {
      this.setState({
        carAdd : this.state.carAdd.filter(item => {
          return item.id != event.target.id
        })
      })
    }
    render(){
    return(
      <S.Container>
        <S.BoxTitle>
          <S.Title>Loja de carros!</S.Title>
        </S.BoxTitle>
        
        <S.ChoiceGroup>
          <S.CarPurchase>
            {this.state.car.map((item, index) => {
              return(
              <S.EnvelopCar>
                <S.EnvelopTitle>
                  <S.CarTitle>{item.name}</S.CarTitle>
                  <S.Btn id={item.id}onClick={(ev)=>this.funcBtnAdd(ev)}>+</S.Btn>
                </S.EnvelopTitle>
                <S.BoxCardz>
                  <S.CarAssembler>
                    <span>Montadora:</span> {item.assembler}
                  </S.CarAssembler>
                
                    <S.Preco>
                      <span>Preço:</span> {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    </S.Preco>
                  
                    <S.Type>
                      <span>Tipo:</span> {item.type}
                    </S.Type>
                </S.BoxCardz>
              
              </S.EnvelopCar>
  )})}
          </S.CarPurchase>
      
          <S.ChoiceBox>
            <S.BoxDirection>
                <S.ParagraphDirection>Arraste seus carros preferidos aqui...</S.ParagraphDirection>
            </S.BoxDirection>
            {this.state.carAdd.map((item)=>{
              return(
                <S.Group>
                  <S.BoxNameCar>
                    <S.Paragraph>{item.name}</S.Paragraph>
                    <S.Subtraction id={item.id} onClick={(ev) => this.funcBtnRemove(ev)}>-</S.Subtraction>
                  </S.BoxNameCar>
                  <S.BoxAbout>
                    <S.Paragraph><S.Span>Tipo:</S.Span>{item.type}</S.Paragraph>
                    <S.Paragraph><S.Span>Preço:</S.Span>{item.price}</S.Paragraph>
                  </S.BoxAbout>
                </S.Group>
              )
            })}
          </S.ChoiceBox>
         
        </S.ChoiceGroup>

        <S.BoxResult>
            <S.Total>Total</S.Total>
          </S.BoxResult>
      </S.Container>
      
    )
  }
  
}
export default Car;
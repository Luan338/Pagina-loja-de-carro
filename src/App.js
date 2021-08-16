import React, { Component } from "react";
import * as S from './styles'

//Components
import ImgCar from '../src/components/imgs/car.svg';

class Car extends Component {

  state = {
    carAdd: [],
    car: [
      {
        id: 0,
        name: "Jetta",
        assembler: "Volkswagen",
        price: 144000,
        type: "Sedan",
        btnDisabled: false
      },
      {
        id: 1,
        name: "Polo",
        assembler: "Volkswagen",
        price: 70000,
        type: "Hatch",
        btnDisabled: false
      },
      {
        id: 2,
        name: "T-Cross",
        assembler: "Volkswagen",
        price: 123000,
        type: "SUV",
        btnDisabled: false
      },
      {
        id: 3,
        name: "Tiguan R-line",
        assembler: "Volkswagen",
        price: 146000,
        type: "SUV",
        btnDisabled: false
      },
      {
        id: 4,
        name: "Civic",
        assembler: "Honda",
        price: 115000,
        type: "Sedan",
        btnDisabled: false
      },
      {
        id: 5,
        name: "Corolla",
        assembler: "Toyota",
        price: 110000,
        type: "Sedan",
        btnDisabled: false
      },
      {
        id: 6,
        name: "Corolla Cross",
        assembler: "Toyota",
        price: 184000,
        type: "SUV",
        btnDisabled: false
      },
      {
        id: 7,
        name: "Compass",
        assembler: "Jeep",
        price: 132000,
        type: "SUV",
        btnDisabled: false
      },
      {
        id: 8,
        name: "Golf G TI",
        assembler: "Volkswagen",
        price: 138000,
        type: "Hatch",
        btnDisabled: false
      }
    ]
  }

  funcBtnAdd = (event) => {
    const check = this.state.car.filter(item => item.id == event.id);

    this.setState({
      carAdd: this.state.carAdd.concat(check)
    })
  }

  funcBtnRemove = (event) => {
    this.setState({
      carAdd: this.state.carAdd.filter(item => {
        return item.id != event.id
      })
    })
  }

  handleStart = (e) => {
    e.dataTransfer.setData("card_id", e.target.id);
  }

  handleDrop = (e) => {
    const card_id = e.dataTransfer.getData("card_id");

    const filter = this.state.car.find(item => item.id == Number(card_id))
    console.log(filter.id)
    this.funcBtnAdd(filter.id)
  }

  render() {
    return (
      <S.Container>
        <S.BoxTitle>
          <S.Title>Loja de carros!</S.Title>
        </S.BoxTitle>

        <S.ChoiceGroup>
          <S.CarPurchase>
            {this.state.car.map((item, index) => {
              return (
                <S.EnvelopCar
                  id={item.id}
                  display={item.btnDisabled}
                  onDragStart={this.handleStart}
                  draggable={true}
                >
                  <S.EnvelopTitle>
                    <S.CarTitle>{item.name}</S.CarTitle>
                    <S.Btn id={item.id} onClick={this.funcBtnAdd(item.id)}>+</S.Btn>
                  </S.EnvelopTitle>
                  <S.BoxCardz>
                    <S.CarAssembler>
                      <span>Montadora:</span> {item.assembler}
                    </S.CarAssembler>

                    <S.Preco>
                      <span>Preço:</span> {item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </S.Preco>

                    <S.Type>
                      <span>Tipo:</span> {item.type}
                    </S.Type>
                  </S.BoxCardz>

                </S.EnvelopCar>
              )
            })}
          </S.CarPurchase>

          <S.ChoiceBox
            onDrop={this.handleDrop}
            onDragOver={e => e.preventDefault()}
            draggable={true}
          >
            <S.BoxDirection display={this.state.carAdd.length}>
              <S.CarImg src={ImgCar} alt='Carro de fundo' />
              <S.ParagraphDirection>Arraste seus carros preferidos aqui...</S.ParagraphDirection>
            </S.BoxDirection>
            {this.state.carAdd.map((item) => {
              return (
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
          <S.Paragraph>{this.state.carAdd.reduce((a, b) => a + b.price, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Paragraph>
        </S.BoxResult>
      </S.Container>

    )
  }

}
export default Car;
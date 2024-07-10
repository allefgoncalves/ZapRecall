import { useState } from 'react';
import styled from 'styled-components';
import Questions from './Questions';
import logo from './assets/logo.png';
import CARDS from './CARDS';

export default function App() {
  const [count, setcount] = useState(0);

  return (
    <Container>
      <Logo>
        <img src={logo}/>
        <div>ZapRecall</div>
      </Logo>
      <Questions CARDS={CARDS} count={count} setcount={setcount}/>
      <Baseboard>
        {count}/{CARDS.length}
      </Baseboard>
    </Container>
  );
}

const Baseboard =styled.div`
  width: 375px;
  height: 70px;
  background-color: #FFFF;
  border: 1px solid #dbd8d8 ;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -4px 6px 0px #0000000D;

`

const Container = styled.div`
  background-color:#FB6B6B;
  width: 375px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
`
const Logo =styled.div`
  width: 255px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;

  color: #FFFFFF;
  font-family: Righteous;
  font-size: 50px;
  font-weight: 800;
  line-height: 45px;
  letter-spacing: -0.012em;
  text-align: center;
  
  img{
    width: 52px;
    height: 60px;
  }
 `
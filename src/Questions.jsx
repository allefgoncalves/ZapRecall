import seta_play from './assets/seta_play.png';
import seta_virar from './assets/seta_virar.png';
import styled from 'styled-components';
import Buttons from './Buttons.jsx';
import { useState } from 'react';
import erro from './assets/icone_erro.png';
import quase from './assets/icone_quase.png';
import certo from './assets/icone_certo.png';


export default function Questions({CARDS, count, setcount}) {
    let [selected, setselected] = useState([]);
    let [selectedAnswer, setselectedAnswer] = useState([]);
    let [colorRed, setcolorRed] = useState([]);
    let [colorYellow, setcolorYellow] = useState([]);
    let [colorGreen, setcolorGreen] = useState([]);
    
    function play(id){
        if(!selected.includes(id))
            setselected([...selected,id]);
    }

    function turn(question){
        if(!selectedAnswer.includes(question.id))
            setselectedAnswer([...selectedAnswer,question.id]);
    }

    function define(id){
        if(colorRed.includes(id))
            return(erro);

        if(colorYellow.includes(id))
            return(quase);

        if(colorGreen.includes(id))
            return(certo);
    }
    
    return(
        <div>
           {CARDS.map((question)=>(
            <Card key={question.question}>
                <Button1 selected={selected} id={question.id}>   
                    <p>pergunta {question.id}</p>
                    <img src={seta_play} onClick={()=>play(question.id)}/>            
                </Button1>

                <Button2 id={question.id} 
                    selected={selected}
                    selectedAnswer={selectedAnswer}
                >    
                    <p>{question.question}</p>
                    <img src={seta_virar} onClick={()=>turn(question)}/>
                </Button2>   
                   
                <Buttons 
                    count={count} setcount={setcount}
                    selectedAnswer={selectedAnswer}
                    selected={selected}
                    id={question.id} 
                    answer={question.answer}
                    colorRed={colorRed} setcolorRed={setcolorRed}
                    colorYellow={colorYellow} setcolorYellow={setcolorYellow}
                    colorGreen={colorGreen} setcolorGreen={setcolorGreen}
                />

                <Tfinal
                    id = {question.id}
                    colorRed={colorRed} 
                    colorYellow={colorYellow} 
                    colorGreen={colorGreen} 
                >
                    <p>pergunta {question.id}</p>
                    <img src={define(question.id)} alt="status" />
                </Tfinal>                
            </Card> 
           ))}    
        </div>
    );
}

const Tfinal = styled.div`
    display: ${props => props.colorRed.includes(props.id)
    ||props.colorYellow.includes(props.id)
    ||props.colorGreen.includes(props.id)?'flex':'none'};

    align-items: center;
    justify-content:space-around;
    padding: 10px;
    
    img{
        width: 23px;
        height: 23px; 
        margin: auto 0px auto auto;
    }

    p{
        text-decoration: line-through;
        color:${props =>{
            if(props.colorRed.includes(props.id))
                return '#FF3030';
            if(props.colorYellow.includes(props.id))
                return '#FF922E';
            if(props.colorGreen.includes(props.id))
                return '#2FBE34';
            }};
    }
`;

const Button2 = styled.div`
    display: ${props => props.selected.includes(props.id)
    &&!props.selectedAnswer.includes(props.id)? 'flex': 'none'};
    
    align-items: center;
    justify-content:space-around;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFFFD4;
    Height: 131px;

    img{
        margin: auto 0px 0px auto;
        width: 20px;
        height: 14px; 
    }
`;

const Button1 = styled.div`
    display: ${props => props.selected.includes(props.id)? 'none': 'flex'};
    
    align-items: center;
    justify-content:space-around;
    padding: 10px;
    
    img{
        width: 20px;
        height: 23px; 
        margin: auto 0px auto auto;
    }
`;

const Card =styled.li`
    width: 300px;
    min-height: 65px;   
    border-radius: 5px;
    background-color: white;
    list-style-type: none;
    margin:10px;

     p{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

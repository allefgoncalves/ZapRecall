import seta_play from './assets/seta_play.png';
import seta_virar from './assets/seta_virar.png';
import styled from 'styled-components';
import Buttons from './Buttons.jsx';
import { useState } from 'react';
import erro from './assets/icone_erro.png';
import quase from './assets/icone_quase.png';
import certo from './assets/icone_certo.png';


export default function Questions({CARDS, count, setcount}) {
    const [selected, setselected] = useState([]);
    const [selectedAnswer, setselectedAnswer] = useState([]);
    const [ColorRed, setColorRed] = useState([]);
    const [ColorYellow, setColorYellow] = useState([]);
    const [ColorGreen, setColorGreen] = useState([]);
    
    function play(id){
        if(!selected.includes(id))
            selected([...selected,id]);
    }

    function turn(id){
        if(!selectedAnswer.includes(id))
            setselectedAnswer([...selectedAnswer,id]);
    }

    function define(id){
        if(props.ColorRed.includes(id))
            return(erro);

        if(props.ColorRed.includes(id))
            return(quase);

        if(props.ColorRed.includes(id))
            return(certo);
    }
    
    return(
        <lu>
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
                    <img src={seta_virar} onClick={()=>turn(question.id)}/>
                </Button2>   
                   
                <Buttons 
                    count={count} setcount={setcount}
                    selectedAnswer={selectedAnswer}
                    selected={selected}
                    id={question.id} 
                    answer={question.answer}
                    ColorRed={ColorRed} setColorRed={setColorRed}
                    ColorYellow={ColorYellow} setColorYellow={setColorYellow}
                    ColorGreen={ColorGreen} setColorGreen={setColorGreen}
                />

                <Tfinal
                    id = {question.id}
                    ColorRed={ColorRed} setColorRed={setColorRed}
                    ColorYellow={ColorYellow} setColorYellow={setColorYellow}
                    ColorGreen={ColorGreen} setColorGreen={setColorGreen}
                >
                    <p>pergunta {question.id}</p>
                    <img src={()=>define(question.id)} ></img>
                </Tfinal>                
            </Card> 
           ))}    
        </lu>
    );
}

const Tfinal =styled.div`
    display: ${props => props.ColorRed.includes(props.id)
    ||props.ColorYellow.includes(props.id)
    ||props.ColorGreen.includes(props.id)?'flex':'none'};

`;

const Button2 = styled.div`
    display: ${props => props.selected.includes(props.id)
    &&!props.selectedAnswer.includes(props.id)? 'flex': 'none'};
    
    padding: 5px;

    img{
        margin: auto 0px 0px auto;
        width: 20px;
        height: 14px; 
    }
`;

const Button1 =styled.div`
    display: ${props => props.selected.includes(props.id)? 'none': 'flex'};
    
    align-items: center;
    justify-content:space-around;
    padding: 10px;
    
    img{
        width: 20px;
        height: 23px; 
        margin: auto 0px auto auto;
    }

    p{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }
`;

const Card =styled.li`
    width: 300px;
    min-height: 65px;   
    border-radius: 5px;
    background-color: white;
    list-style-type: none;
    margin:10px;
`;

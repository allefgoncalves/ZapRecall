import styled from 'styled-components';

export default function Buttons(props){
    let color="black";

    function finalizadoRed(){
        let x= props.count;
        x++;
        props.setcount(x);

        let y = [...props.colorRed];
        y.push(props.id);
        props.setcolorRed(y);
        color='#FF3030';
    }
  
    function finalizadoYellow(){
        let x= props.count;
        x++;
        props.setcount(x);

        let y = [...props.colorYellow];
        y.push(props.id);
        props.setcolorYellow(y);
        color= '#FF922E';
    }
    
    function finalizadoGreen(){
        let x= props.count;
        x++;
        props.setcount(x);

        let y = [...props.colorGreen];
        y.push(props.id);
        props.setcolorGreen(y);
        color='#2FBE34';
    }

    return(
        <Tela3  
            selected={props.selected}
            selectedAnswer={props.selectedAnswer}
            colorRed={props.colorRed}
            colorYellow={props.colorYellow}
            colorGreen={props.colorGreen}
            id={props.id} 
            color={color}
        >
            <p>{props.answer}</p>
            <div>
                <ButtonRed onClick={()=>finalizadoRed()}>Não lembrei</ButtonRed>
                <ButtonYellow onClick={()=>finalizadoYellow()}>Quase não lembrei</ButtonYellow>
                <ButtonGreen onClick={()=>finalizadoGreen()}>Zap!</ButtonGreen>
            </div>
        </Tela3>
    );
}

const Tela3= styled.div`
    display:${props=>(
        !(  
            props.colorRed.includes(props.id)
            ||props.colorYellow.includes(props.id)
            ||props.colorGreen.includes(props.id)
        )
        &&props.selectedAnswer.includes(props.id)
        &&props.selected.includes(props.id)
    )?'flex':'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;
    padding:15px;
    border-radius: 5px;
    background-color: #FFFFD4;

    text-decoration:${props => props.color};

    div{
        display:flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
    }
`
const ButtonRed = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: #FF3030;
    border-radius: 5px;
    margin: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;

`
const ButtonYellow = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: #FF922E;
    border-radius: 5px;
    margin: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
`
const ButtonGreen = styled.button`
    width: 85px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFFFFF;
    background-color: #2FBE34;
    border-radius: 5px;
    margin: 5px;

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
`
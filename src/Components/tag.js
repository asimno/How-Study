import '../App.css';

export default function Tag(props) {
  return (
    <>
    <div id="Tag" style={{backgroundColor: props.hex}}>
      {props.name}
    </div>
    </>
  );
}

//Here I'll add a couple of default tags cards can use.

export function Advice(){
  return(
    <Tag name="Advice" hex="#FBD685"/>
  )
}

export function General(){ //Brutal advice!
  return(
    <Tag name="General" hex="#BBC863"/>
  )
}

export function Brutal(){ //Brutal advice!
  return(
    <Tag name="Brutal" hex="#E43636"/>
  )
}

export function Motivational(){ //Motivational advice!
  return(
    <Tag name="Motivational" hex="#379777"/>
  )
}

export function Technique(){
  return(
    <Tag name="Technique" hex="#63AEBB"/>
  )
}

export function TimeManagement(){
  return(
    <Tag name="Time Management" hex="#FF714B"/>
  )
}

export function Mental(){
  return(
    <Tag name="Mental" hex="#EE6983"/>
  )
}

export function Resource(){
  return(
    <Tag name="Resource" hex="#7A5D7E"/>
  )
}

export function Educational(){
  return(
    <Tag name="Educational" hex="#A27B5C"/>
  )
}
import '../App.css';
import { useState } from 'react';

export default function Section(props) {
  const [contentVisible,setContentVisible] = useState(true);

  return (
    <>
    <div id="Section">
      <div id="SectionHeader" onClick={() => setContentVisible(!contentVisible)}>
        {props.header + ((contentVisible) ? "  ▲":"  ▼")}
      </div>
      <div id="SectionContent" style={{display:(contentVisible) ? "flex":"none"}}>
        {props.content}
      </div>
    </div>
    </>
  );
}

import '../App.css';

export default function Section(props) {
  return (
    <>
    <div id="Section">
      <div id="SectionHeader">
        {props.header}
      </div>
      <div id="SectionContent">
        {props.content}
      </div>
    </div>
    </>
  );
}

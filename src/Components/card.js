import '../App.css';

export default function Card(props) {
  return (
    <>
    <div id="Card">
      <h2 id="CardHeader">{props.header}</h2>
      <div id="CardTags">{props.tags}</div>
      <p id="CardDescription">{props.description}</p>
      <div id="CardLinks">{props.links}</div>
    </div>
    </>
  );
}
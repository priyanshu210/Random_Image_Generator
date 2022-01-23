import { useState } from "react";
import "./styles.css";

export default function App() {
  let [url, seturl] = useState();
  function changeImage() {
    var inputurl = event.target.value;
    seturl(inputurl);
  }
  function deleteimage() {
    seturl("");
  }
  function change() {
    seturl(
      "https://purepng.com/public/uploads/large/purepng.com-batmanbatmansuperherocomicdc-comicsbob-kanebat-manbruce-wayne-1701528524639kawni.png"
    );
  }
  function random() {
    seturl(" ");
    var randomimage = "https://picsum.photos/200/300?random=" + Math.random();
    seturl(randomimage);
  }
  return (
    <div className="App">
      <input type="text" onChange={changeImage}></input>
      <input type="button" value="delete" onClick={deleteimage}></input>
      <input type="button" value="changeimg" onClick={change}></input>
      <input type="button" value="randomimg" onClick={random}></input>
      <img src={url}></img>
    </div>
  );
}

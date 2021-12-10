import React from "react"
import {
  Pop,
} from './styles';

const Authordata = ({bio, author, previewImages}) => {

  return (
    <Pop>
        <div id="data">
         <img src={previewImages} alt={author}/>
         <h1>{author}</h1>
         </div>
         <p>{bio}</p>
    </Pop>
  )
}
export default Authordata;
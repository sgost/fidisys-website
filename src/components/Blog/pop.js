import React from "react"
import {
  Pop,
} from './styles';

const Authordata = ({bio, author, authImg}) => {

  return (
    <Pop>
        <div id="data">
         <img src={authImg} alt={author}/>
         <h1>{author}</h1>
         </div>
         <p>{bio}</p>
    </Pop>
  )
}
export default Authordata;
import React, { useState } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { v4 as uuidv4 } from 'uuid';
import { IoSearchCircle } from "react-icons/io5";
import {IconContext} from "react-icons";
import {IoArrowDownCircle} from "react-icons/io5";
import {IoGiftSharp} from "react-icons/io5";

const InputCom = ({ addItem,searchItem,drawItem }) => {
    const [wish, setWish] = useState({
        _id: "",
        title: "",
        time: "",
        complete:""
        
    })
    
    const today = new Date()
    let date = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getYear()+1900
    if (month===1 ){
        month= "Jun"
    }else if(month===2){
        month= "Feb"
    }else if(month===3){
        month= "Mar"
    }else if(month===4){
        month= "Apr"
    }else if(month===5){
        month= "May"
    }

  let time= date+"  "+month+"  "+year
    const handleSubmit = () => {
        location.reload();
        addItem(wish);
        setWish({...wish, title:""});
    }
    const handleSearch = (e) => {
        e.preventDefault();
        searchItem(wish.title);
       
    }
    const handleDraw = (e) => {
        e.preventDefault();
       drawItem();
       
    }

    return (
        <InputGroup >
            <Form.Control
                placeholder="input a wish"
                aria-label="input a wish"
                aria-describedby="basic-addon2"
                onChange={e => setWish({ ...wish, _id: uuidv4(), title: e.target.value, time:time, complete: false})}
               value={wish.title}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
            <IconContext.Provider value={{ style: { fontSize:"2rem"} }}>
            <IoSearchCircle />
            </IconContext.Provider>
            </Button>
            <Button variant="outline-secondary" id="button-addon2" onClick={handleDraw}>
            <IconContext.Provider value={{ style: { fontSize:"1.75rem"} }}>
            <IoGiftSharp/>
            </IconContext.Provider>
            </Button>
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
            <IconContext.Provider value={{ style: { fontSize:"2rem"} }}>
            <IoArrowDownCircle />
            </IconContext.Provider>
            </Button>
        </InputGroup>


    )
}


export default InputCom
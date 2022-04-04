import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'

const NewItem = ({ NewItem, handleToggle }) => {

  const handleClick = (e) => {
    e.preventDefault()
    handleToggle(e.currentTarget.id)
  }


  return (
   
      <Row md="4" lg="6"  className={NewItem.complete ? "bg-light text-dark mb-3" : " bg-warning border  mb-3"}
      key={NewItem.id + NewItem.title}  id={NewItem.id} value={NewItem.id} onClick={handleClick}
      > 
        <Col md="9" lg="9" style={{ textAlign: "center" }} > 
        {NewItem.title}
        </Col>
        <Col md="9"  lg="3"style={{ textAlign: "center",color:"grey",fontSize:".75rem" }}
          >
          {NewItem.time}
        </Col>
      </Row>

  );
};

export default NewItem;
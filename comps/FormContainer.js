import React, { useState, useEffect } from "react";
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputCom from "./InputCom";
import ItemList from "./ItemList";
import styles from '../styles/Home.module.css'

const FormContainer = () => {




  const [wishlist, setWishlist] = useState([])



  const addItem = (wish) => {
    var wishes = wishlist.concat([wish])
    setWishlist(wishes)
  }
  const searchItem = (wish) => {
    let filtered =wishlist.filter.includes()
  }

  const handleFilter = () => {
    let filtered = wishlist.filter(NewItem => {
      return !NewItem.complete;
    });
    setWishlist(filtered);
  }

  const handleToggle = (id) => {
    let mapped = wishlist.map(item => {
      return item.id === id ? { ...item, complete: !item.complete } : { ...item};
    });
    setWishlist(mapped);
    console.log(mapped)
  }

  console.log(wishlist)
  return <Container className={styles.card} >
    <Row className="justify-content-md-center mb-5">
      <Col  lg="8" className="justify-content-md-center">
        <InputCom addItem={addItem}  searchItem={searchItem}/>
      </Col>
    </Row>
    <Row className="justify-content-md-center"  >
      <Col  lg="8" className="justify-content-md-center">
      <ItemList wishlist={wishlist} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </Col>
     
    </Row>
    <Row className="justify-content-md-center"  >
      <Col  lg="8" className="justify-content-md-center">
      
    <Button style={{margin: '20px'}} onClick={handleFilter}>Delete</Button>
      </Col>
     
    </Row>


  </Container >
}



export default FormContainer
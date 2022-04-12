import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputCom from "./InputCom";
import ItemList from "./ItemList";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { deleteList,addList,getList} from "../utils/data/listHandler";
const FormContainer = ({

}) => {


  const [wishlist, setWishlist] = useState([])
  const [donelist, setDonelist] = useState([])
  const [click, setClick] = useState([])

  useEffect(() => {

    const loadItems = async () => {
      console.log("async load");
      const res= await getList()
      console.log(res)
      setWishlist(res);
    }
    loadItems()
  }, [])
  Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
  }

  const getRandomItem = () => {
    let drawItem = wishlist.random()
    // console.log(drawItem.id)
    let mapped = wishlist.map(item => {

      return item.id === drawItem.id ? { ...item, complete: !item.complete } : { ...item };
    });
    setWishlist(mapped);

  }

  const addItem = async (wish) => {
    // var wishes = wishlist.concat([wish])
    // setWishlist(wishes)
    //local
    // const res = await axios.post("http://localhost:3750/list/addlist", wish)
    //aws
    const res = await addList(wish)

  }

  const searchItem = async (txt) => {
    console.log(txt);
    console.log("async search");
    const res = await axios.get("/api/search", {
      params: {
        txt: txt
      }
    })
    setWishlist(res.data);
  }





  const handleToggle = (_id) => {
    console.log(_id)
    let mapped = wishlist.map(item => {
      return item._id === _id ? { ...item, complete: !item.complete } : { ...item };
    });
    setWishlist(mapped);

    click.push(_id)
    let newclick = [...new Set(click)];
    setDonelist(newclick);

  }

  

  const handleFilter = async () => {
    location.reload();
    // let filtered = wishlist.filter(NewItem => {
    //   return !NewItem.complete;
    // })
    // setWishlist(filtered);

    console.log(donelist)
      const deletelist = await deleteList(donelist)

  }




  return <Container className={styles.card} >
    <Row className="justify-content-md-center mb-5">
      <Col lg="10" className="justify-content-md-center">
        <InputCom addItem={addItem} searchItem={searchItem} drawItem={getRandomItem} />
      </Col>
    </Row>
    <Row className="justify-content-md-center"  >
      <Col lg="10" className="justify-content-md-center">
        <ItemList wishlist={wishlist} handleToggle={handleToggle} handleFilter={handleFilter} />
      </Col>

    </Row>
    <Row className="justify-content-md-center"  >
      <Col lg="10" className="justify-content-md-center">

        <Button style={{ margin: '20px' }} onClick={handleFilter}>Delete</Button>
     
      </Col>

    </Row>


  </Container >
}



export default FormContainer
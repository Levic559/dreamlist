
import { filtering } from '../../utils/func.js';
import wishlists from '../../utils/data/wishlists.json';
import { Save, Read } from "../../utils/helpers"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { wishlist } = req.body;
    console.log(wishlist)
    const data = JSON.stringify(wishlist, null ,2);
    await Save(data)
    res.status(200).json({ name: 'Levi' })
  }
  else if (req.method === 'GET') {
   
    try{

      const json =await import('../../utils/data/wishlists.json')
      // console.log(json)
      res.status(200).json(json.default)
  }
  catch(e){

      res.status(400).json(false)
  }
  }
}
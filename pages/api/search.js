
import { filtering } from '../../utils/func.js';
import wishlists from '../../utils/data/wishlists.json';

export default async function handler(req, res) {
  
    const { txt } = req.query;
    try {
      var lists = [];
      if (txt) {
        lists = filtering(wishlists, {
          title: txt
        })
      }
      res.status(200).json(lists);
    } catch (e) {
      res.status(200).json(false)

    }
  }

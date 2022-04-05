// const wishlists = require("./data/wishlists.json")
export function filtering(
    arr=[],
    config={title:null }
  ){
  
    const {title} = config;
  
    if(title ){
      const filtered_arr = arr.filter((o)=>{
  
        var cond = true;
    
        if(title){
          cond = cond && o.title.includes(title);
        }
        return cond;
      })
    
      // console.log(filtered_arr);
      return filtered_arr;
    } else {
      return [];
    }
  
  }

//   let f_booklist = filtering(wishlists, {
//     title: 'Apple',

// })
// console.log(f_booklist)

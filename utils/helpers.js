import fs from 'fs';
const afs = fs.promises;

export async function Save(
  data=null
){
 if(data ){ 
  await afs.writeFile('./utils/data/wishlists.json', data);
 }
}

export async function Read(){
  const allfs = await afs.readdir('./saves');
  console.log(allfs);
  return allfs;
}
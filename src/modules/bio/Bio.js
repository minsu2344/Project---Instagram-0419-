import EditBio from "./EditBio.js"
import { getEntryFromDb } from "../../database.js";

//1. database.js에서 사용자가 입력한 정보를 데이터베이스에서 가져오는 getEntryFromDb 함수를 import하세요.


const Bio = async () => {
  //2. getEntryFromDb를 사용해서 bio라는 객체저장소에서 json 데이터를 가져와 userInfo라는 변수에 넣으세요.
  const userInfo = await getEntryFromDb('bio');
  
  //3. p태그로 감싸진 name과 about을 렌더링하세요.
  return `
    <section class="bio">
      <div class="profile-photo">
        <img scr='http://file3.instiz.net/data/cached_img/upload/2020/05/24/4/a32bfb0c9024e611d02093a0587d0b58.jpg'alt='profile-photo'>
      </div>
      <div class='profile-info'>
        <p class='name'>${userInfo[0] ? userInfo[0].name : 'Please update you bio'}</p>
        <p class='about'>${userInfo[0] ? userInfo[0].about : 'Please update you bio'}</p>
        <button class='edit-bio-button'>Edit Bio</button>
      </div>
        ${EditBio()}
    </section>
  `
}

export default Bio;
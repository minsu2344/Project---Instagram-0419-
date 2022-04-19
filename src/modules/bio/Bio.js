import EditBio from "./EditBio.js"

const Bio = () => {
  return `
    <section class="bio">
      <div class="profile-photo">
        <img scr='http://file3.instiz.net/data/cached_img/upload/2020/05/24/4/a32bfb0c9024e611d02093a0587d0b58.jpg'alt='profile-photo'>
      </div>
      <div class='profile-info'>
        <p class='name'></p>
        <p class='about'></p>
        <button class='edit-bio-button'>Edit Bio</button>
      </div>
        ${EditBio()}
    </section>
  `
}

export default Bio;
const Gallery = () => {
  return `
    <i class="add-photo fas fa-plus-square">
      <input type='file' name='photo' id='addPhotoInput' accept='image/*'>
    </i>
    <label for="addPhotoInput">
      <i class="add-photo fas fa-plus-square"></i>
    </label>
    <div class="gallery-nav"></div>
    <section class="gallery">
      <div class="gallery-loader">
          <img src="./loader.svg" alt="">
      </div>
    </section>
  `
}

export default Gallery;
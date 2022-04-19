const EditBio = () => {
  return `
  <form class="edit-bio-form">
    <input type="text" id="name" placeholder="Name" required />
    <input type="text" id="about" placeholder="About" required />
    <button type="button" class="cancel-edit-bio">Cancel</button>
    <button type="submit">Submit</button>
  </form>
  `
}

export default EditBio;
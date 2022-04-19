//3. modules 내 생성된 Nav를 import 해서 내비게이션 바를 반환하세요.
import Nav from './modules/nav/Nav.js'
import Gallery from './modules/gallery/Gallery.js'
import Bio from './modules/bio/Bio.js'

const App = () => {

  //4. 탬플릿 리터럴을 사용해서 내비게이션 바를 렌더링한 후 return 문내에 반환하세요.
    return `
      ${Nav()}
      <div class='container'>
        ${Bio()}
        ${Gallery()}
      </div>
    `
  }
  
  
  document.getElementById('root').innerHTML = App()
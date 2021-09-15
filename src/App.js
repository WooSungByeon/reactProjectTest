import { Component } from 'react';
import 'css/common_ui.css';
import 'css/normalize.css';
import Footer from 'common/Footer.js';
import Header from 'common/Header.js';

class App extends Component {
  render() {
    return (
      <>
        <div className="page_wrap mainpage">
            <Header></Header>
        </div>
        <footer class="footer_wrap">  
          <Footer></Footer>
        </footer>
      </>
    );
  }
}

export default App;

import { Component } from 'react';
import 'css/common_ui.css';
import 'css/normalize.css';

class Header extends Component {
  render() {
    return(
      <header className="header_wrap">
        <div className="header_inner">
          <h1 className="header_logo">
            <a>
              <img src={require('images/common/header_logo.svg').default} alt="SEESAWLABS" />
            </a>
          </h1>
          <ul className="header_langbox">
              <li className="on"><a href="">KOR</a></li>
              <li><a href="">ENG</a></li>
            </ul>
            <button type="button" class="btn_menu">
              <span></span><span></span><span></span>
            </button>
        </div>
        <div class="gnb_wrap">
					<nav id="gnb_skip" tabindex="0">
						<ul class="gnb_list">
							<li class="gnb_1depth">
								<a href="">ABOUT</a>
								<ul class="gnb_2depth">
									<li><a href="javascript:void(0);">About Us</a></li>
									<li><a href="javascript:void(0);">Technology</a></li>
								</ul>
							</li>
							<li class="gnb_1depth">
								<a href="javascript:void(0);">MEDIA</a>
							</li>
							<li class="gnb_1depth">
								<a href="javascript:void(0);">CONTACT</a>
							</li>
						</ul>
					</nav>
				</div>
      </header>
    );
  }
}

export default Header;

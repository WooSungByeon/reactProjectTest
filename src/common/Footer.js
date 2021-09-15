import { Component } from 'react';
import 'css/common_ui.css';
import 'css/normalize.css';

class Footer extends Component {
  render() {
    return(
        <div className="footer_inner">
          <div className="footer_top">
            <h2 className="footer_logo">
              <img src={require('images/common/footer_logo.png').default} alt="다인리더스"/>
            </h2>
            <ul>
              <li>
                ㈜시소랩스 서울특별시 성동구 성수일로 77 서울숲 IT밸리 516호
              </li>
              <li>
                <ul className="list_bar">
                  <li>이메일 : dodream@dodream.io</li>
                  <li>대표번호 : 02-6951-0157</li>
                </ul>
              </li>
              <li>
                사업자 등록번호 : 000-00-00000
              </li>
            </ul>
          </div>
          <div className="footer_bottom">
            <ul className="list_bar">
              <li>
                <a href="javascript:void(0)">개인정보처리방침</a>
              </li>
              <li>
                <a href="javascript:void(0)">이메일무단수집거부</a>
              </li>
            </ul>
            <p className="copy">
              Copyright &copy; SEESAWLABS, Inc All right reserved.
            </p>
          </div>
          <div className="select_form wd_120">
            <label className="select_common">Family Site</label>
            <select className="select_custom" onchange="if(this.selectedIndex){this.blur; window.open(options[selectedIndex].value);}">
              <option value="" selected>Family Site</option>
              <option value="">example</option>
              <option value="">example</option>
            </select>
          </div>
        </div>
    );
  }
}

export default Footer;

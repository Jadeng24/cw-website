
import { Fragment, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

// import CWLogo from '../../Assets/CWLogo.png'; 
import CWLogoTextSide from '../../Assets/CWTextSide.png';


export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const changeOpenMenu = () => {
    setOpenMenu(value => !value);
  }

  return (
    <Fragment>
      <div className='NavHolder'>
        <div className='Nav'>
          <div className='navSection logoNav'>
            <div className='CWLogoHolder'>
              <Link to={'/'}><img src={CWLogoTextSide} alt='CW' className='CWLogo' /> </Link>
            </div>
          </div>

          <div className='navSection centerNav'>
            <Link to={'/lawncare'}><div className='linkName'>Lawncare</div></Link>
            <div className="divider"></div>
            <Link to={'/maintenance'}><div className='linkName'>Maintenance</div></Link>
            <div className="divider"></div>
            <Link to={'/about'}><div className='linkName'>About</div></Link>
          </div>

          {/* <div className='navSection rightNav'>
            <a href='https://www.facebook.com/CW.lawncareandlandacaping' target='_blank'><img src={fbLogo} alt='logo' /></a>
            <a href='https://www.instagram.com/cw_lawncareandlandscaping/' target='_blank'><img src={insLogo} alt='logo' /></a>
          </div> */}
          <div className='navSection rightNav'>
            <Link to={'/estimate'} className="quoteBtn">Get a Quote</Link>
          </div>

          {/* drop down menu button */}
          {/* <div className='dropDownMenuBtn' onClick={changeOpenMenu}>
            <div className={openMenu ? 'bar bar1 animateBar1' : 'bar bar1'}></div>
            <div className={openMenu ? 'bar midBar1 animateMidBar1' : 'bar midBar1'}></div>
            <div className={openMenu ? 'bar midBar2 animateMidBar2' : 'bar midBar2'}></div>
            <div className={openMenu ? 'bar bar3 animateBar3' : 'bar bar3'}></div>

          </div> */}
        </div>
      </div>
    </Fragment>
  )
}


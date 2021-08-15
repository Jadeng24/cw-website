
import { Fragment, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

import fbLogo from '../../Assets/facebookWhite.png';
import insLogo from '../../Assets/instagramWhite.png';
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
            <Link to={'/estimates'}><p className='linkName'>ESTIMATES</p></Link>
            <Link to={'/lawncare'}><p className='linkName'>LAWNCARE</p></Link>
            <Link to={'/maintenance'}><p className='linkName'>MAINTENANCE</p></Link>
            <Link to={'/about'}><p className='linkName'>ABOUT</p></Link>
          </div>

          <div className='navSection rightNav'>
            <a href='https://www.facebook.com/CW.lawncareandlandacaping' target='_blank'><img src={fbLogo} alt='logo' /></a>
            <a href='https://www.instagram.com/cw_lawncareandlandscaping/' target='_blank'><img src={insLogo} alt='logo' /></a>
          </div>

          {/* drop down menu button */}
          <div className='dropDownMenuBtn' onClick={changeOpenMenu}>
            <div className={openMenu ? 'bar bar1 animateBar1' : 'bar bar1'}></div>
            <div className={openMenu ? 'bar midBar1 animateMidBar1' : 'bar midBar1'}></div>
            <div className={openMenu ? 'bar midBar2 animateMidBar2' : 'bar midBar2'}></div>
            <div className={openMenu ? 'bar bar3 animateBar3' : 'bar bar3'}></div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}


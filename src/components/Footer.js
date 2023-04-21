import iShop from '../Images/ishop.png';
import Facebook from '../Images/facebook.svg';
import Twitter from '../Images/twitter.svg';

const Footer = () => {
  return (
    <>
      <div className='footer__section1'>
        <div className='section1__details'>
          <img src={iShop} alt='iShop' />
          <p className='label5 mt-30'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className='section1__details'>
          <p>Follow Us</p>
          <p className='label5 mt-30'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          </p>
          <div className='icon__container'>
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twttter" />
          </div>
        </div>
        <div className='section1__details'>
        <p>Contact Us</p>
          <p className='label5 mt-30'>
          iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com
          </p>
        </div>
      </div>
      <div className='footer__section2'>
        <div>
            <p>Information</p>
            <ul>
            <li  className='label5 align__left'>About Us</li>
            <li  className='label5 align__left'>Information</li>
            <li  className='label5 align__left'>Privacy Policy</li>
            <li  className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p>Service</p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p>Extras</p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p>My Account</p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p>Useful Links</p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
        <div>
            <p>Our Offers</p>
            <ul>
            <li className='label5 align__left'>About Us</li>
            <li className='label5 align__left'>Information</li>
            <li className='label5 align__left'>Privacy Policy</li>
            <li className='label5 align__left'>Terms & Conditions</li>
        </ul>
        </div>
       
      </div>
    </>
  );
};

export default Footer;

import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className={`${styles.footer_container} flex_items`}>
          <div className="socials flex_items g_1 mb">
            <FaTwitter className={`${styles.footer_svg}`} />
            <FaInstagram className={`${styles.footer_svg}`} />
            <FaLinkedin className={`${styles.footer_svg}`} />
          </div>
          <p className={`${styles.copyright}`}>
            &copy; Web <span className="text_emphasis">Dev</span> All Rights
            Reserved. 2024
          </p>

          <div className={`${styles.creator}`}>
            Made By
            <span className={`${styles.text_emphasis} `}>
              {' '}
              Topofthemountain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

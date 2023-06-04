import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';

import './css/footer.css';

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <ul className="footer_list">
        <li className="footer_item__list">
          <a
            href="https://github.com/Luzin7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li className="footer_item__list">
          <a
            href="https://www.linkedin.com/in/lvictordutra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="footer_item__list">
          <a
            href="https://lvictor-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiWorld />
          </a>
        </li>
      </ul>
      <span>
        {currYear} -{' '}
        <a
          href="https://lvictor-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luan Victor
        </a>
      </span>
    </footer>
  );
}

export default Footer;

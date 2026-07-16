'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="container flex footer--top-row">
        <div className="footer__left-half">
          <div className="footer__contact-us">
            <h3 className="footer--title">Contact us</h3>
            <h4>Church Phone: 07311 711 7300</h4>
            <h4>Email: contactkevenjuma@gmail.com</h4>
            <h4>Pastor Antony: 0722 352589</h4>
            <h4>Pastor Mwangi: 0722 299713</h4>
          </div>

          <ul className="social-links" itemScope itemType="http://schema.org/Organization">
            <li>
              <a
                href="https://www.facebook.com/gracewayagc"
                target="_blank"
                rel="noopener"
                itemProp="sameAs"
                role="button"
                aria-label="Facebook"
              >
                <span
                  className="inline-image"
                  style={{ backgroundImage: 'url(/uploads/2018/08/facebook.svg)' }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                itemProp="sameAs"
                role="button"
                aria-label="Instagram"
              >
                <span
                  className="inline-image"
                  style={{ backgroundImage: 'url(/uploads/2018/08/Instagram.svg)' }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCq65aktTY7wLJARpf8FYXtQ"
                target="_blank"
                rel="noopener"
                itemProp="sameAs"
                role="button"
                aria-label="YouTube"
              >
                <span
                  className="inline-image"
                  style={{ backgroundImage: 'url(/uploads/2018/08/Youtube.svg)' }}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__locations">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7978.456700625076!2d34.979104426860644!3d0.9853293000000118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178189d0286d4769%3A0x588b9c601735822a!2sAGC%20Standard%20Church!5e0!3m2!1sen!2ske!4v1735289568414!5m2!1sen!2ske"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              aspectRatio: '16 / 9',
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Graceway AGC location map"
          />
        </div>
      </div>

      <div className="container flexRowOnly footer--bottom-row">
        <ul className="footer-menu">
          <li className="footer-menu__item footer-menu__item--connect">
            <Link href="/connect" className="footer-menu__link">
              CONNECT
            </Link>
          </li>
          <li className="footer-menu__item footer-menu__item--about">
            <Link href="/about" className="footer-menu__link">
              ABOUT
            </Link>
          </li>
          <li className="footer-menu__item footer-menu__item--project">
            <Link href="/project" className="footer-menu__link">
              NEW CHURCH PROJECT
            </Link>
          </li>
        </ul>

        <div className="footer__copyright">
          <span>
            &copy; {currentYear} Graceway AGC &#124; All Rights Reserved &#124; Church &#124;
            Registered in Kenya
          </span>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export function Header() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('navigation-is-open', navigationOpen);

    return () => {
      document.body.classList.remove('navigation-is-open');
    };
  }, [navigationOpen]);

  useEffect(() => {
    if (!navigationOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNavigationOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [navigationOpen]);

  return (
    <>
      <header className="header">
        <div className="header__gradient" />
        <div className="container flexRowOnly header__row">
          <Link
            href="/"
            className="header__logo"
            style={{ display: 'inline-block' }}
            onClick={() => setNavigationOpen(false)}
          >
            <Image
              src="/uploads/graceway-logos/graceway-logo-rmbg-bright.png"
              alt="Graceway Logo"
              width={150}
              height={150}
              priority
              unoptimized
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          <div className="flex--align-center">
            <Link
              href="/"
              className="header__icon flex--align-center"
              aria-label="Home"
              onClick={() => setNavigationOpen(false)}
            >
              <span className="header__icon--text">HOME</span>
            </Link>
            <Link
              href="/about"
              className="header__icon flex--align-center"
              aria-label="About"
              onClick={() => setNavigationOpen(false)}
            >
              <span className="header__icon--text">ABOUT</span>
            </Link>
            <Link
              href="/connect"
              className="header__icon flex--align-center"
              aria-label="Connect"
              onClick={() => setNavigationOpen(false)}
            >
              <span className="header__icon--text">CONNECT</span>
            </Link>
            <Link
              href="/media"
              className="header__icon flex--align-center"
              aria-label="Media"
              onClick={() => setNavigationOpen(false)}
            >
              <span className="header__icon--text">MEDIA</span>
            </Link>
            <Link
              href="/project"
              className="header__icon header__icon--give flex--align-center"
              aria-label="Project"
              onClick={() => setNavigationOpen(false)}
            >
              <Heart className="w-4 h-4 mr-2 inline" />
              <span className="header__icon--text">PROJECT</span>
            </Link>

            <button
              id="menu-button"
              type="button"
              className="navigation-trigger flex items-center gap-2 text-white p-2"
              aria-label="Mobile menu toggle"
              aria-expanded={navigationOpen}
              onClick={() => setNavigationOpen((v) => !v)}
            >
              {navigationOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="menu-text uppercase tracking-wider font-semibold">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="navigation"
        className="navigation"
        aria-hidden={!navigationOpen}
        onClick={() => setNavigationOpen(false)}
      >
        <div className="navigation--wrapper" onClick={(e) => e.stopPropagation()}>
          <div className="container flexRowOnly">
            <ul className="mega-menu-1 mega-menu-desktop mega-menu-large">
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--1056">
                <Link
                  href="/about"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                />
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Who we Are
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/mission"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Mission
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/our-beliefs"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Beliefs
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/vision"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Vision
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/strategies"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Strategies
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/doctrine"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Doctrine
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/about/leadership"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  Our Leadership
                </Link>
              </li>
              <li className="mega-menu-1 mega-menu-desktop mega-menu-large__item mega-menu-1 mega-menu-desktop mega-menu-large__item--271">
                <Link
                  href="/give"
                  className="mega-menu-1 mega-menu-desktop mega-menu-large__link"
                  onClick={() => setNavigationOpen(false)}
                >
                  GIVE
                </Link>
              </li>
            </ul>

            <div className="flex">
              <ul className="mega-menu-3 mega-menu-desktop">
                <li className="mega-menu-3 mega-menu-desktop__item mega-menu-3 mega-menu-desktop__item--parent mega-menu-3 mega-menu-desktop__item--197">
                  <Link
                    href="/connect"
                    className="mega-menu-3 mega-menu-desktop__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    CONNECT
                  </Link>
                  <ul className="mega-menu-3 mega-menu-desktop__sub-menu mega-menu-3 mega-menu-desktop__sub-menu--1">
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--233">
                      <Link
                        href="/connect/graceway-kids"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Kids
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--235">
                      <Link
                        href="/connect/men-to-men"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Men to Men
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--227">
                      <Link
                        href="/connect/youths-fearless"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Young and Fearless
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--231">
                      <Link
                        href="/connect/graceway-women"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Women Fellowship
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--231">
                      <Link
                        href="/connect/graceway-couples"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Couples Fellowship
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--231">
                      <Link
                        href="/connect/bible-study"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Discepleship
                      </Link>
                    </li>
                    <li className="mega-menu-3 mega-menu-desktop__sub-menu__item mega-menu-3 mega-menu-desktop__sub-menu--1__item mega-menu-3 mega-menu-desktop__item--229">
                      <Link
                        href="/connect/praise-worship"
                        className="mega-menu-3 mega-menu-desktop__sub-menu__link mega-menu-3 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Graceway Praise and Worship Crew
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="mega-menu-4 mega-menu-desktop">
                <li className="mega-menu-4 mega-menu-desktop__item mega-menu-4 mega-menu-desktop__item--parent mega-menu-4 mega-menu-desktop__item--195">
                  <Link
                    href="/media"
                    className="mega-menu-4 mega-menu-desktop__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    MEDIA
                  </Link>
                  <ul className="mega-menu-4 mega-menu-desktop__sub-menu mega-menu-4 mega-menu-desktop__sub-menu--1">
                    <li className="mega-menu-4 mega-menu-desktop__sub-menu__item mega-menu-4 mega-menu-desktop__sub-menu--1__item mega-menu-4 mega-menu-desktop__item--1016">
                      <Link
                        href="/media/sermon"
                        className="mega-menu-4 mega-menu-desktop__sub-menu__link mega-menu-4 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Sermons
                      </Link>
                    </li>
                    <li className="mega-menu-4 mega-menu-desktop__sub-menu__item mega-menu-4 mega-menu-desktop__sub-menu--1__item mega-menu-4 mega-menu-desktop__item--219">
                      <Link
                        href="/media/blog"
                        className="mega-menu-4 mega-menu-desktop__sub-menu__link mega-menu-4 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Blogs
                      </Link>
                    </li>
                    <li className="mega-menu-4 mega-menu-desktop__sub-menu__item mega-menu-4 mega-menu-desktop__sub-menu--1__item mega-menu-4 mega-menu-desktop__item--223">
                      <Link
                        href="/media/gallery"
                        className="mega-menu-4 mega-menu-desktop__sub-menu__link mega-menu-4 mega-menu-desktop__sub-menu--1__link"
                        onClick={() => setNavigationOpen(false)}
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <ul className="main-menu">
            <li className="main-menu__item main-menu__item--1056">
              <a href="#" className="main-menu__link">
                .
              </a>
            </li>
            <li className="main-menu__item main-menu__item--parent main-menu__item--193">
              <Link href="/about" className="main-menu__link" onClick={() => setNavigationOpen(false)}>
                ABOUT
              </Link>
              <ul className="main-menu__sub-menu main-menu__sub-menu--1">
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--1032">
                  <Link
                    href="/about"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Who we Are
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--1448">
                  <Link
                    href="/about/mission"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Mission
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--201">
                  <Link
                    href="/about/our-beliefs"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Beliefs
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--209">
                  <Link
                    href="/about/vision"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Vision
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/about/strategies"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Strategies
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/about/doctrine"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Doctrine
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/about/leadership"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Our Leadership
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item main-menu__item--4289">
              <Link href="/project" className="main-menu__link" onClick={() => setNavigationOpen(false)}>
                PROJECT
              </Link>
            </li>
            <li className="main-menu__item main-menu__item--parent main-menu__item--193">
              <Link href="/connect" className="main-menu__link" onClick={() => setNavigationOpen(false)}>
                CONNECT
              </Link>
              <ul className="main-menu__sub-menu main-menu__sub-menu--1">
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--1032">
                  <Link
                    href="/connect/graceway-kids"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Kids
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--1448">
                  <Link
                    href="/connect/graceway-women"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Women Fellowship
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--201">
                  <Link
                    href="/connect/graceway-couples"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Couples Fellowship
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--209">
                  <Link
                    href="/connect/bible-study"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Discipleship
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/connect/men-to-men"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Men Fellowship
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/connect/youths-fearless"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Young and Fearless
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--207">
                  <Link
                    href="/connect/praise-worship"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Graceway Praise and Worship Crew
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item main-menu__item--parent main-menu__item--195">
              <Link href="/media" className="main-menu__link" onClick={() => setNavigationOpen(false)}>
                MEDIA
              </Link>
              <ul className="main-menu__sub-menu main-menu__sub-menu--1">
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--1016">
                  <Link
                    href="/media/sermon"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Sermon
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--219">
                  <Link
                    href="/media/blog"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li className="main-menu__sub-menu__item main-menu__sub-menu--1__item main-menu__item--223">
                  <Link
                    href="/media/gallery"
                    className="main-menu__sub-menu__link main-menu__sub-menu--1__link"
                    onClick={() => setNavigationOpen(false)}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="main-menu__item main-menu__item--701">
              <Link href="/give" className="main-menu__link" onClick={() => setNavigationOpen(false)}>
                Give
              </Link>
            </li>
          </ul>

          <div className="container flexRowOnly navigation--bottom-row">
            <ul className="social-links" itemScope itemType="http://schema.org/Organization">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener"
                  itemProp="sameAs"
                  role="button"
                  aria-label="Facebook"
                >
                  <span className="inline-image" style={{ backgroundImage: 'url(/uploads/2018/08/facebook.svg)' }} />
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
                  <span className="inline-image" style={{ backgroundImage: 'url(/uploads/2018/08/Instagram.svg)' }} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/"
                  target="_blank"
                  rel="noopener"
                  itemProp="sameAs"
                  role="button"
                  aria-label="YouTube"
                >
                  <span className="inline-image" style={{ backgroundImage: 'url(/uploads/2018/08/Youtube.svg)' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import { Google, Twitter, Instagram, Facebook, Telegram} from 'react-bootstrap-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__place"  data-aos="fade-up" data-aos-offset="-15">
            <div className="footer__top bg-dark">
                <div className="footer__medias">
                    <a href="#"><Google/></a>
                    <a href="#"><Twitter/></a>
                    <a href="#"><Instagram/></a>
                    <a href="#"><Facebook/></a>
                    <a href="#"><Telegram/></a>
                </div>
            </div>
            <div className="footer__bottom bg-secondary">
                <div className="footer__copyright text-white">
                    All Copyrights are reserved &copy;
                </div>
            </div>
            </div>
        </footer>
    )
}

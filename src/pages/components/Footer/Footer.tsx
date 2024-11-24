import "./Footer.css"

export function Footer() {

    return (
		<footer className="footer">
			<section className="footer__info">
				<div className="footer__section">
					<h2 className="footer__title">About</h2>
					<ul className="footer__list">
						<li><a href="#" className="footer__link">Contact Us</a></li>
						<li><a href="#" className="footer__link">About Us</a></li>
						<li><a href="#" className="footer__link">Careers</a></li>
						<li><a href="#" className="footer__link">Press</a></li>
					</ul>
				</div>

				<div className="footer__section">
					<h2 className="footer__title">Policy</h2>
					<ul className="footer__list">
						<li><a href="#" className="footer__link">Return Policy</a></li>
						<li><a href="#" className="footer__link">Terms of Use</a></li>
						<li><a href="#" className="footer__link">Sitemap</a></li>
						<li><a href="#" className="footer__link">Privacy</a></li>
						<li><a href="#" className="footer__link">EPR Compliance</a></li>
					</ul>
				</div>
			</section>

			<hr/>

			<div className="footer__social">
				<ul className="footer__social-list">
					<li className="footer__social-item">
						<img src="src/assets/icons/social-media/fb.svg" alt="Icon Facebook" className="footer__social-icon"/>
					</li>
					<li className="footer__social-item">
						<img src="src/assets/icons/social-media/instagram.svg" alt="Icon Instagram" className="footer__social-icon"/>
					</li>
					<li className="footer__social-item">
						<img src="src/assets/icons/social-media/twitter.svg" alt="Icon twitter" className="footer__social-icon"/>
					</li>
					<li className="footer__social-item">
						<img src="src/assets/icons/social-media/youtube.svg" alt="icon Youtube" className="footer__social-icon"/>
					</li>
				</ul>

				<address className="footer__address">
					<figure className="footer__address-figure">
						<img src="src/assets/icons/location.svg" alt="Location icon" className="footer__address-icon"/>
					</figure>
					<p className="footer__address-text">Perú</p>
				</address>

				<p className="footer__copyright">© 2024 | SHOP All Rights Reserved</p>
			</div>
		</footer>
    )

}
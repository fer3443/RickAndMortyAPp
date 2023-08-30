import React from "react";
import { Link } from "react-router-dom";

import "../footer/Footer.css";
export const Footer = () => {
  return (
		<>
		<div className="containerFooter">
			<div className="footerAbout">
				<span>El contenido de este sitio web no está asociado, ni esponsoreado o especialmente aprobado por Rick and Morty. Todo tipo de infomracion brindada en el mismo, es extraida de <Link to={"https://rickandmortyapi.com/"}>rickandmortyapi</Link> con un fin práctico y educativo en el desarrollo de apps.</span>
			</div>
			<div className="socials">
				<div className="socialTitle">
					<h6>Mis redes sociales:</h6>
				</div>
				<div className="linksFooter">
				<Link to={"https://www.facebook.com/fernando.arroyorodriguez.9/"} className="linkSocial fb"><box-icon type='logo' color="#fff" name='facebook'animation='tada-hover'></box-icon></Link>
				<Link to={"https://www.instagram.com/ferchoar23/"} className="linkSocial ig"><box-icon type='logo' color="#fff" name='instagram' animation='tada-hover'></box-icon></Link>
				<Link to={"https://discord.gg/4dFstx5X"} className="linkSocial ds"><box-icon type='logo' color="#fff" name='discord-alt' animation='tada-hover'></box-icon></Link>
				<Link to={"https://www.linkedin.com/in/fer3443in"} className="linkSocial ldin"><box-icon type='logo' color="#fff" name='linkedin' animation='tada-hover'></box-icon></Link>
				<Link to={"https://github.com/fer3443"} className="linkSocial ghub"><box-icon type='logo' color="#fff" name='github' animation='tada-hover'></box-icon></Link>
				</div>
			</div>
		</div>
		</>
	);
};

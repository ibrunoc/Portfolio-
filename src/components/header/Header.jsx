import './Header.modules.scss';
import { Link } from "react-router-dom";
import Img from './imagem.jpg';

export function Header() {

    function menuHamburger() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
    
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      }

  return (
    <>
    <header>	    
	<nav class="desktop">
            <div><img src='' className="logo" alt='imagem'/></div>
		<ul>
			<li><Link className='Select' to="">&lt; Bruno Costa  /&gt;</Link></li>
			<li><Link to="">Sobre mim</Link></li>
			<li><Link to="">Skills</Link></li>
			<li><Link to="">Projetos</Link></li>
			<li><Link to="">Contato</Link></li>
			<li><Link to="">Formação</Link></li>
		</ul>
		</nav>

	<div class="mobile">
		<nav class="navbar">
		<ul class="nav-menu">
                    <img src={Img} className="logoMobile" alt='imagem'/>
			<li class="nav-item">
				<Link className='nav-link Select' to="">&lt; Bruno Costa  /&gt;</Link>
			</li>

			<li class="nav-item">
                        	<Link className='nav-link' to="">Sobre mim</Link>
			</li>
		
			<li class="nav-item">
				<Link className='nav-link' to="">Skills</Link>
			</li>

			<li class="nav-item">
				<Link className='nav-link' to="">Projetos</Link>
			</li>
		
			<li class="nav-item">
				<Link className='nav-link' to="">Contato</Link>
			</li>
                    	<li class="nav-item">
                        	<Link className='nav-link' to="">Formação</Link>
			</li>
		</ul>
		
                <button onClick={menuHamburger}>
                    <div class="hamburger" id="menuHamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                   </div>     
                </button>                                       
            </nav>
	</div>
    </header>
    </>
  );
}

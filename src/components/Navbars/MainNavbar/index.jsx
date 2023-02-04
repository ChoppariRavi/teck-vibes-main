/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  }

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  }

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  }

  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
            TeckVibesLogo
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link href="/"><a className="nav-link">Home</a></Link>
            </li>

            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </span>
              <ul className="dropdown-menu">
                <li><Link href="/services/staffing-services"><a className="dropdown-item">Staffing Services</a></Link></li>
                <li><Link href="/services/independent-projects"><a className="dropdown-item">Independent Projects</a></Link></li>
                <li><Link href="/services/training-services"><a className="dropdown-item">Training Services</a></Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Partnership
              </span>
              <ul className="dropdown-menu">
                <li><Link href="/partnership/refer-professional"><a className="dropdown-item">Refer a Working Professional</a></Link></li>
                <li><Link href="/partnership/refer-client"><a className="dropdown-item">Refer a client</a></Link></li>
                <li><Link href="/partnership/refer-graduate"><a className="dropdown-item">Refer New College Graduate</a></Link></li>
                <li><Link href="/partnership/refer-own-candidate"><a className="dropdown-item">Bring your own candidate</a></Link></li>

              </ul>
            </li>


            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Careers
              </span>
              <ul className="dropdown-menu">
                <li><Link href="/careers/search-job"><a className="dropdown-item">Search Jobs</a></Link></li>
                <li><Link href="/careers/search-resumes"><a className="dropdown-item">Search Resumes</a></Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
              </span>
              <ul className="dropdown-menu">
                <li><Link href="/solutions/sap"><a className="dropdown-item">SAP</a></Link></li>
                <li><Link href="/solutions/java"><a className="dropdown-item">Java</a></Link></li>
                <li><Link href="/solutions/cloud"><a className="dropdown-item">Cloud</a></Link></li>
                <li><Link href="/solutions/etl"><a className="dropdown-item">ETL</a></Link></li>
                <li><Link href="/solutions/quality-assurance"><a className="dropdown-item">Quality Assurance</a></Link></li>
                <li><Link href="/solutions/integration"><a className="dropdown-item">Integration</a></Link></li>
              </ul>
            </li>


<li className="nav-item dropdown" onMouseMove={dropdownHover} onMouseLeave={dropdownLeave}>
  <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    About Us
  </span>
  <ul className="dropdown-menu">
    <li><Link href="/about/why-tech-vibes"><a className="dropdown-item">Why Tech Vibes</a></Link></li>
    <li><Link href="/about/team"><a className="dropdown-item">Team</a></Link></li>
    <li><Link href="/about/customers"><a className="dropdown-item">Customers</a></Link></li>
  </ul>
</li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="#0"><i className="fab fa-facebook-f"></i></a>
                <a href="#0"><i className="fab fa-twitter"></i></a>
                <a href="#0"><i className="fab fa-dribbble"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
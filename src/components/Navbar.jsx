import "../App.css";

function Navbar(){
return(
    <header>
        <div className="logo">
            <span>Portfolio</span>
        </div>
        <label htmlFor="menu" className="meanu-btm">
            <i className="fas fa-bars"></i>
        </label>
        <nav>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact us</a>
        </nav>
    </header>
);
}
export default Navbar;
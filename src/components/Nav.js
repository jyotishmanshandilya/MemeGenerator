export default function Nav(){
    const logo = require(`../images/Logo.png`);
    return(
        <div className="nav">
            <img className="logo" src={logo} alt="meme generator logo"/> 
            <h4 className="nav--title">React course Project-3</h4>
        </div>
    );
}
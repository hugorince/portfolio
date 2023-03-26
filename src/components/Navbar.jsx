import Menu from "./Menu";
import MenuDropDown from "./MenuDropDown";

const Navbar = ({quizAgain, isMobile}) => {
    
    return (
    <>
    { isMobile ? <MenuDropDown quizAgain={quizAgain} />
    
     : <Menu quizAgain={quizAgain}/> }  
    </>
);
};

export default Navbar;





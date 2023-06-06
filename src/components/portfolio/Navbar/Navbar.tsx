import Menu from "./Menu";
import MenuDropDown from "./MenuDropDown";

type NavBarProps = {
  quizAgain: () => void;
  isMobile: boolean;
};

const Navbar = ({ quizAgain, isMobile }: NavBarProps) => {
  return (
    <>
      {isMobile ? (
        <MenuDropDown quizAgain={quizAgain} />
      ) : (
        <Menu quizAgain={quizAgain} />
      )}
    </>
  );
};

export default Navbar;

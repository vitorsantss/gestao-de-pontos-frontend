import { AuthContext } from "@/contexts/AuthContext";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Clock } from "lucide-react";
import { useContext } from "react";

const Header = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Navbar isBordered>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Clock className="mr-2" size={15} />
          <p className="font-bold text-inherit">Gestão de Pontos</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Clock className="mr-2" size={15} />
          <p className="font-bold text-inherit">Gestão de Pontos</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="danger"onClick={signOut} variant="light">
            Log out
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

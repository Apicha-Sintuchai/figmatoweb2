import Image from "next/image";

import Sizenavbar from "./Sizenavbar";
import Navbar from "./Navbar";
import Menu from "./Menu";
export default function Home() {
  return (
    <div>
    <Sizenavbar></Sizenavbar>
    <Navbar></Navbar>
    <Menu></Menu>
    </div>
  );
}

import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

interface Props {
  children?: any;
}
export const Layout = ({children}: Props) => {
  return (
    <>
      <Header/>
      <Sidebar />
    </>
  )
}
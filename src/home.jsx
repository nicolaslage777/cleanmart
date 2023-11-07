import Header from "./Header"
import Navb from "./Nav"
import UncontrolledExample from "./carouselqq"
import Cardes from "./cardes"
import Footer from "./footer"
import Produtos from "./produtos"

function Home(){
    return(
        <div>
        <Header></Header>
        <Navb></Navb>
        <UncontrolledExample></UncontrolledExample>
        <br/>
        <br/>
        <Cardes></Cardes>
        <Produtos></Produtos>
        <Footer></Footer>
        </div>
    )
}

export default Home
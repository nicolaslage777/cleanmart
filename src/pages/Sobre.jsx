import Header from "../Header"
import Navb from "../Nav"
import Footer from "../footer"

function Sobre(){
 return(
 <div>
 <Header/>
 <Navb/>
 <h1 className="txts">Sobre</h1>
 <p className="txtp">Somos uma empresa que vendemos items voltados para limpeza e organização.</p>
 <p className="txtp">Aqui você encontra tudo em produtos para limpeza residencial e comercial. Para garantir que os produtos estejam sempre em estoque, a nossa loja de produtos de limpeza precisa de bons distribuidores do setor, com todos os segmentos para abastecer o local. Seja para lojas como para os clientes finais, a Fibrilar conta com um acervo variado de produtos de limpeza.</p>
 <div className="divsobre"></div>
 <Footer/>
 </div>
 )
}
export default Sobre

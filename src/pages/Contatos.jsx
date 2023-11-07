import Header from "../Header"
import Navb from "../Nav"
import Footer from "../footer"

function Contatos(){
 return(
 <div>
     <Header/>
 <Navb/>
 <main className="txtp">
 <h1>Contatos</h1>
 <br></br>
 <h2>
 (11) 1234-5678
 </h2>
 <br></br>
 <h2>(11) 99999-9999</h2>
 <br></br>
 <p>Segunda à Sexta: 8:30 – 19:00
Sábado: 8:30 – 15:00</p>
<br></br>
<p>Avenida lins de vasconcelos 2222 – São Paulo – SP</p>
</main>
 <Footer/>
 </div>
 )
}
export default Contatos

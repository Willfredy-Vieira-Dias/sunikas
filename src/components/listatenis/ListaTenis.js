const ListaTenis = ({artigos}) => {
    
    return ( 
        <>
            {artigos.map((artigo) => (
                    <div className="caixa" key={artigo.id}>
                    <div className="icones">
                        <a href="#" className="fa fa-heart"></a>
                        <a href="#" className="fa fa-share"></a>
                        <a href="#" className="fa fa-eye"></a>
                    </div>
                    <div className="conteudo">
                        <img src={artigo.imagem} alt=""/>
                        <h3>{artigo.nome}</h3>
                        <div className="preco">{artigo.preco} Kz<span>{artigo.desconto} Kz</span></div>
                        <div className="estrelas">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                   ))}
        </>
     );
}
 
export default ListaTenis;
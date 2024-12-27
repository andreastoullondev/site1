const items = [
    {
        id:0,
        nome:'curso-python',
        img: 'css/img/image.jpg',
        quantidade:0 
    },
    {
        id:2,
        nome:'curso-back-end',
        img: 'css/img/image.jpg',
        quantidade:0 
    },
    {
        id:3,
        nome:'curso-informatica',
        img: 'css/img/image.jpg',
        quantidade:0 
    },
]


inicializarLoja = () => {
    let containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        
        <div class="produto-single">

            <img src="`+val.img+`" />
            <p>`+val.nome+` </p>
            <a  key="`+val.id+`" href="">Adicionar ao carrinho</a>

        </div>
        
        
        `;
    })
}

inicializarLoja();

const atualizarCarrinho = () =>{
    
}

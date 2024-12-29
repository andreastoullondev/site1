const items = [
    {
        id:0,
        nome:'curso-python',
        img: 'css/img/image.jpg',
        quantidade:0 
    },
    {
        id:1,
        nome:'curso-back-end',
        img: 'css/img/image.jpg',
        quantidade:0 
    },
    {
        id:2,
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
            <a  key="`+val.id+`" href="#">Adicionar ao carrinho</a>

        </div>
        
        
        `;
    })
}

inicializarLoja();

const atualizarCarrinho = () =>{
    console.log(items);
}


let links = document.getElementsByTagName('a');

 console.log('Numero de links',links.length);
 console.log('Numero de links',items.length);

for(let i = 0; i < links.length;i++){

    console.log(' Links', i, 'key:',links[i].getAttribute('key'));
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        console.log('key no clique:', key);
        key = parseInt(key);
        if(key >= 0 && key < items.length){
            items[key].quantidade++;
        }else{
            console.error('error:chave invalida',key);
        }
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

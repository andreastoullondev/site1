const items = [
    {
        id:0,
        nome:'curso-python',
        img: 'image.jpg',
        quantidade:0 
    },
    {
        id:2,
        nome:'curso-back-end',
        img: 'image.jpg',
        quantidade:0 
    },
    {
        id:3,
        nome:'curso-informatica',
        img: 'image.jpg',
        quantidade:0 
    },
]


inicializarLoja = () => {
    let containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        console.log(val.nome);
    })
}

inicializarLoja();

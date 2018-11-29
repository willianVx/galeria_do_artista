jQuery(document).ready(function($){

    var $b_lupa = $('.container');

    $b_lupa.click(function(){
        console.log($(this)["0"]);
        //var id = $(this)["0"].children["0"].attributes[3].nodeValue;
        //render_img_info(id);
       // zoom_modal($(this)["0"].childNodes[1].attributes["0"].nodeValue);
    });
    
    //deixa imagem em tela cheia
    function zoom_modal(imagem){
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = imagem;
        var modalImg = document.getElementById("img01");

        modal.style.display = "block";
        modalImg.src = img;

        //direciona para quadro personalizado
        $("#botao_usar_imagem_modal").click(function(){
            window.location.assign("http://localhost/wordpress/product/quadro-personalizado/?img="+img);
        });

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
        modal.style.display = "none";
        }
        
    }
    //lista de atributos das imagens 
    var img_01 = {
        id: "01",
        titulo: 'Donald, Pato',
        formato: '20x20cm até 50x50cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Cotia - SP',
        data: '17/07/2018',
        preco_minimo: 'A partir de R$ 90,60'
    }

    var img_02 = {
        id: "02",
        titulo: 'Fitinha',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Salvador - Bahia',
        data: '09/05/2014',
        preco_minimo: 'A partir de R$ 80,00'
    }

    var img_03 = {
        id: "03",
        titulo: 'Verde',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }

    var img_04 = {
        id: "04",
        titulo: 'Rio',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }

    /*
    *
    *
    */
    var img_05 = {
        id: "05",
        titulo: 'Montanha 2',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_06 = {
        id: "06",
        titulo: 'Olhos',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_07 = {
        id: "07",
        titulo: 'Neve',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_08 = {
        id: "08",
        titulo: 'Estrada',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }

    /*
    *
    *
    *
    */

    var img_09 = {
        id: "09",
        titulo: 'Onda',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_010 = {
        id: "010",
        titulo: 'Barco',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_011 = {
        id: "011",
        titulo: 'Praia',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var img_012 = {
        id: "012",
        titulo: 'Ponte',
        formato: '10x13cm até 80x95cm',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat blandit leo nec malesuada. Sed.',
        local: 'Varginha - MG',
        data: '10/09/2005',
        preco_minimo: 'A partir de R$ 80,00'
    }
    var imagens = [img_01, img_02, img_03, img_04, img_05, img_06, img_07, img_08, img_09, img_010, img_011, img_012];
    
    var render_img_info = function(id){
        for (let index = 0; index < imagens.length; index++) {
            const element = imagens[index];
            if (id == element.id) {
                render_img(element);
            }
        }
    }
    var $modal = $('#myModal');
    var titulo_formato = $modal["0"].childNodes[11].childNodes[1].children["0"];
    var descricao = $modal["0"].children[2].children["0"].children[1];
    var local = $modal["0"].children[2].children["0"].children[2];
    var data = document.createElement('span');
        data.setAttribute('class','img_data')
    var preco_minimo = $modal["0"].children[2].children[1].children["0"];

    var render_img = function(objeto){
        $(titulo_formato).html(objeto.titulo + " - " + objeto.formato);
        $(descricao).html(objeto.descricao);
        $(local).html(objeto.local);
        data.innerText = objeto.data;
        $(local).append(data);
        $(preco_minimo).html(objeto.preco_minimo);
    }
    
});
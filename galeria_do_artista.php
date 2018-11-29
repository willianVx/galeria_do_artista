<?php
    /**
     * Author: Willian de Olivera
     * Plugin Name: Instaarts - Galeria do Artista
     * Plugin URI: https://instaarts.com.br
     * Description: Inclui uma galeria de imagem para artistas no instaarts
     * Author URI: Willian de oliveira 
     * Version: 1.0 beta
     * Licence: no
     */

     if (!defined('ABSPATH')) {
         exit; // Exit if accessed directly
     }
     
     require 'Front_end/index.php';
     require 'Front_end/gda_jessica.php';

    function gda_content_jessica($content) {
        $page = get_page_by_title( 'jessica_enya' );
        if ( is_page($page->ID) ){
            //enfileira os scripts e estilos para a página
            //wp_enqueue_style('gda_estilo', plugins_url('Galeria_do_artista/Front_end/css/style.css'));
            //wp_enqueue_style('gda_jessica_estilo', plugins_url('Galeria_do_artista/Front_end/jessica_scripts/style.css'));
            wp_enqueue_style('gda_jessica_estilo_2', plugins_url('Galeria_do_artista/Front_end/css/style_2.css'));
            wp_enqueue_script('gda_j_script', plugins_url('Galeria_do_artista/Front_end/jessica_scripts/efeitos.js'),'jquery', 1.4, true);

            $content = galeria_jessica();
        }
        return $content;
    }
    add_filter('the_content', 'gda_content_jessica');
?>
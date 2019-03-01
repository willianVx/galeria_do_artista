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

    function gda_scripts(){
        wp_enqueue_style('gda_jessica_estilo_2', plugins_url('Galeria_do_artista/Front_end/css/style_2.css'));
        wp_enqueue_script('gda_j_script', plugins_url('Galeria_do_artista/Front_end/jessica_scripts/efeitos.js'),'jquery', 1.4, true);
    }

    function gda_content_jessica(){
        $page = get_page_by_title('jessica_enya');
        if( is_page($page->ID )){	
            $dir = plugin_dir_path( __FILE__ );
            add_action('wp_enqueue_scripts', 'gda_scripts');
            include($dir."Front_end/gda_jessica.php");
            die();
        }
    }
    add_action( 'wp', 'gda_content_jessica');
?>
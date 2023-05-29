<?php

/**
 * Plugin Name: Automattic Privacy Toolset
 * Description: Implements a privacy banner with options for users to set privacy preferences.
 * Version: 1.0.0
 * Author:
 *
 * @package automattic-privacy-toolset
 */

namespace Automattic\PrivacyToolset;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class PrivacyToolset {

  	/**
     * Javascript built asset path.
     *
     * @var string
     */
    private $javascript_path = 'block/build/privacy-consent-banner.js';

    /**
     * CSS built asset path.
     *
     * @var string
     */
    private $css_path = 'block/build/privacy-consent-banner.css';

    /**
	   * Class constructor.
	   */
    public function __construct() {
        // Register block for block themes and enqueue assets
        add_action( 'init', [ $this, 'register_assets' ] );
    }

    public function register_assets() {
        // Register block for block themes or manually enqueue javascript and insert footer element for non-block themes
        if ( wp_is_block_theme() ) {
            register_block_type( plugin_dir_path( __FILE__ ) . 'block/build' );
        } else {
            $this->enqueue_javascript();
            add_action( 'wp_footer', [ $this, 'privacy_consent_footer' ] );
        }
        // Enqueue CSS for block/non-block themes
        $this->enqueue_css();
    }

    public function privacy_consent_footer() {
        echo '<div class="wp-block-privacy-tools-consent-banner"><div id="privacy-consent-banner"></div></div>';
    }

    private function enqueue_javascript() {
        wp_enqueue_script( 'vip-cookie-banner-js', plugins_url( $this->javascript_path, __FILE__ ), array( 'react', 'react-dom', 'wp-components', 'wp-element', 'wp-i18n' ), '1.0.0', true);
    }

    private function enqueue_css() {
        wp_enqueue_style( 'privacy-toolset-css', plugins_url( $this->css_path, __FILE__ ), [], '1.0.0' );
    }
}

new PrivacyToolset();
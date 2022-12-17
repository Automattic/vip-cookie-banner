<?php

/**
 * Plugin Name: Automattic Privacy Toolset
 * Description: Implements a privacy banner with options for users to set privacy preferences.
 * Version: 1.0.0
 * Author:
 *
 * @package automattic-privacy-toolset
 */

// TODO setup plugin class
// TODO standardize function names
// TODO add noscript GTM code in body

function create_privacy_toolset_block() {
  register_block_type(__DIR__ . '/block/build');
}
add_action('init', 'create_privacy_toolset_block');

function enqueue_gtm() {
  wp_enqueue_script(
    'gtm-init',
    __DIR__ . '/js/gtm-init.js?ver=' . time(),
    array(),
    false
  );
}
add_action('init', 'enqueue_gtm');

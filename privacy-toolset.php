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
// TODO better version than current time

function create_privacy_toolset_block() {
  register_block_type(__DIR__ . '/block/build');
}
add_action('init', 'create_privacy_toolset_block');

function privacy_toolset_enqueue_styles() {
  wp_enqueue_style(
    'privacy-toolset',
    __DIR__ . '/block/build/privacy-consent-banner.css?ver=' . time()
  );
}
add_action('init', 'privacy_toolset_enqueue_styles');

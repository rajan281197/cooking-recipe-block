<?php
/**
 * Plugin Name: Receipe block
 * Description: Gutenberg recepe block with images with sliders & recepes information,
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author: <a href="https://profiles.wordpress.org/rajanpanchal2028/">Rajan Panchal</a>
 * Version: 1.0.0
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text-Domain: receipe-block
 */

if (!defined('ABSPATH')): exit();endif; // No direct access allowed

/**
 * Register Gutenber Scripts
 */
add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_script(
        'learn-gutenberg-block-editor-script-receipe',
        plugins_url('build/index.js', __FILE__),
        [
            'wp-plugins',
            'wp-blocks',
            'wp-editor',
            'wp-edit-post',
            'wp-i18n',
            'wp-element',
            'wp-components',
            'wp-data',
        ]
    );
});

/**
 * Enqueue Styles
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('learn-gutenberg-block-style-receipe', plugins_url('assets/css/style.css', __FILE__), [], false, 'all');

    wp_enqueue_script('slickerjs', plugins_url('assets/js/slick.min.js', __FILE__), array(), null, true);

    wp_enqueue_style('slickercss', plugins_url('assets/css/slick.min.css', __FILE__), [], false, 'all');

    wp_enqueue_style('slickerthemecss', plugins_url('assets/css/slick-theme.min.css', __FILE__), [], false, 'all');

    wp_enqueue_script('sliderjs', plugins_url('assets/js/slickerslider.js', __FILE__), array('jquery'), '1.0.0', true);

});
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_style('learn-gutenberg-block-editor-style-receipe', plugins_url('assets/css/editor.css', __FILE__), [], false, 'all');

    wp_enqueue_style('slickercss', plugins_url('assets/css/slick.min.css', __FILE__), [], false, 'all');

    wp_enqueue_style('slickerthemecss', plugins_url('assets/css/slick-theme.min.css', __FILE__), [], false, 'all');

});

/**
 * Register A Block
 */
add_action('init', function () {
    register_block_type(
        'gutenberg-receipe-block/receipe-block',
        [
            'style' => 'learn-gutenberg-block-style-receipe',
            'editor_style' => 'learn-gutenberg-block-editor-style-receipe',
            'editor_scripts' => 'learn-gutenberg-block-editor-script-receipe',
            'render_callback' => 'recepe_block_render_callback',
            'attributes' => array(
                'align' => array(
                    'type' => 'string',
                    'default' => 'none',
                ),
                'title' => array(
                    'type' => 'string',
                    'source' => 'html',
                    'selector' => 'h2',
                ),
                'receipenamecolor' => array(
                    'type' => 'string',
                    'default' => '#111',
                ),
                'imagestyle' => array(
                    'type' => 'array',
                    'default' => 'img-rounded',
                ),
                'mediaID' => array(
                    'type' => 'number',
                ),
                'mediaURL' => array(
                    'type' => 'string',
                    'selector' => 'img',
                    'attribute' => 'src',
                ),
                'images' => array(
                    'type' => 'array',
                    'default' => [],
                ),
                'ingredients' => array(
                    'type' => 'string',
                    'source' => 'html',
                ),
                'subtitlecolor' => array(
                    'type' => 'string',
                    'default' => '#111',
                ),
                'bordercolor' => array(
                    'type' => 'string',
                    'default' => '#111',
                ),
                'blockcolor' => array(
                    'type' => 'string',
                    'default' => '#cd2653',
                ),
                'subcontentcolor' => array(
                    'type' => 'string',
                    'default' => '#111',
                ),
                'instructions' => array(
                    'type' => 'string',
                    'selector' => '.steps',
                ),
                'imagestyle' => array(
                    'type' => 'string',
                ),
                'receipe_category' => array(
                    'type' => 'string',
                ),
                'receipe_category' => array(
                    'type' => 'string',
                ),
                'border_style' => array(
                    'type' => 'string',
                ),
                'preptime' => array(
                    'type' => 'string',
                ),
                'cooktime' => array(
                    'type' => 'string',
                ),
                'borderradiousvalue' => array(
                    'type' => 'string',
                    'default' => '10px',
                ),
                'paddingtop' => array(
                    'type' => 'string',
                ),
                'paddingright' => array(
                    'type' => 'string',
                ),
                'paddingbottom' => array(
                    'type' => 'string',
                ),
                'paddingleft' => array(
                    'type' => 'string',
                ),
                'colorValue' => array(
                    'type' => "string",
                ),
                'additional' => array(
                    'type' => 'string',
                ),
                'totaltime' => array(
                    'type' => 'string',
                ),
                'servings' => array(
                    'type' => 'string',
                ),
                'datayield' => array(
                    'type' => 'string',
                ),
                'nutrition_facts' => array(
                    'type' => 'string',
                ),
                'message' => array(
                    'type' => 'string',
                    'source' => 'html',
                ),

            ),
        ]
    );
});

function recepe_block_render_callback($attributes)
{
    ob_start();

    ?>
    <div class="recepe-card"
        style="border-style:<?php esc_attr_e($attributes['border_style']);?>;
        border-color:<?php esc_attr_e($attributes['bordercolor']);?>
        ;background:<?php esc_attr_e($attributes['blockcolor']);?>;
        border-radius:<?php esc_attr_e($attributes['borderradiousvalue']);?>;
        padding-top:<?php esc_attr_e($attributes['paddingtop']);?>;
        padding-left:<?php esc_attr_e($attributes['paddingleft']);?>;
        padding-right:<?php esc_attr_e($attributes['paddingright']);?>;
        padding-bottom:<?php esc_attr_e($attributes['paddingbottom']);?>; "
        >

        <h4 style="color:<?php esc_attr_e($attributes['receipenamecolor']);?>;text-align:<?php esc_attr_e($attributes['align']);?>">
        <?php esc_attr_e($attributes['title']);?>
        </h4>
        <div class="main swiper-slide">
						<div class="slider slider-nav" style="width: 100%; float: left;  ">
        <?php
foreach ($attributes['images'] as $index => $item) {
        ?>
            <img class="swiper-image" src="<?php echo esc_url($item['url']); ?>"  />
        <?php
}
    ?>
	    </div>
					</div>
        <span class='inline_label '> <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Recepe Type: <?php esc_attr_e($attributes['receipe_category']);?>
        </p></span>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Preparation Time: <?php esc_attr_e($attributes['preptime']);?>
        </p>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Cook Time: <?php esc_attr_e($attributes['cooktime']);?>
        </p>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Additional Time: <?php esc_attr_e($attributes['additional']);?>
        </p>
        <?php
$totalminutes = $attributes['preptime'] + $attributes['cooktime'] + $attributes['additional'];
    $minutes = $totalminutes;
    $hours = intdiv($minutes, 60) . ' Hours ' . ($minutes % 60) . ' minutes';
    ?>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Total Time: <?php esc_attr_e($hours);?>
        </p>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Servings: <?php esc_attr_e($attributes['servings']);?>
        </p>

        <p style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        Yield: <?php esc_attr_e($attributes['datayield']);?>
        </p>

        <h3 style="color:<?php esc_attr_e($attributes['subtitlecolor']);?>;margin-top: 20px;">Ingredients</h3>

        <span style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        <?php _e($attributes['ingredients']);?>
        </span>

        <h3 style="color:<?php esc_attr_e($attributes['subtitlecolor']);?>;margin-top: 20px;">Nutrition Facts</h3>

        <span style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        <?php _e($attributes['nutrition_facts']);?>
        </span>

        <h3 style="color:<?php esc_attr_e($attributes['subtitlecolor']);?>;margin-top: 20px;">Steps</h3>

        <span style="color:<?php esc_attr_e($attributes['subcontentcolor']);?>">
        <?php _e($attributes['message']);?>
        </span>

    </div>

    <?php

    return ob_get_clean();

}
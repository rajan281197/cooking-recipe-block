/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import edit from './edit';
// import save from './save';
import '../style.css';

// Destructure the json file to get the name and settings for the block
// For more information on how this works, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// Register the block
registerBlockType( 'gutenberg-receipe-block/receipe-block', {
	apiVersion: '2',
	title: 'Recipe Card Demo',
	icon: 'admin-settings',
	category: 'layout',
	keywords: ['receipe', 'food','food item','Ingredients'],
	attributes: {
		align: {
			type: 'string',
			default: 'none'
		},
		title: {
			type: 'string',
			
		},
		receipenamecolor: {
            type: 'string',
            default: '#111',
        },		
		imagestyle: {
            type: 'string',
        },
		images:{
			type: 'array',
			default: [],
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			selector: 'img',
			attribute: 'src'
		}, 	
		thumbnail: {
			type: 'string',
			attribute: 'data-thumb',
			selector: 'img',
		},	
		ingredients: {
			type: 'string',
		},
		subtitlecolor:{
			type: 'string',
            default: '#111',
		},
		bordercolor:{
			type: 'string',
            default: '#111',
		},
		borderradiousvalue:{
			type: 'string',
			default: '10px',
		},
		paddingtop:{
			type: 'string'
		},
		paddingright:{
			type: 'string'
		},
		paddingbottom:{
			type: 'string'
		},
		colorValue: {
			type: "string",
			default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)"
		},
		paddingleft:{
			type: 'string'
		},
		blockcolor:{
			type: 'string',
            default: '#cd2653',
		},		
		border_style:{
			type: 'string',
		},
		subcontentcolor:{
			type: 'string',
            default: '#111',
		},
		instructions: {
			type: 'string',
			selector: '.steps'
		},
		imagestyle: {
            type: 'string',
        },
		receipe_category: {
			type: 'string',
		},
		preptime :{
			type: 'string',
		},
		cooktime :{
			type: 'string',
		},
		additional :{
			type: 'string',
		},
		totaltime :{
			type: 'string',
		},
		servings :{
			type: 'string',
		},
		datayield : {
			type: 'string',
		},
		nutrition_facts:{
			type:'string',
		},
		message: {
			type: 'string',
		}

	},
	edit, // Object shorthand property - same as writing: edit: edit,
	save: props => {
		return null;
	}, // Object shorthand property - same as writing: save: save,
} );

import { __ } from '@wordpress/i18n';
import {
	RichText, MediaUpload, useBlockProps, AlignmentControl,
	BlockControls, InspectorControls, ColorPalette, MediaUploadCheck
} from '@wordpress/block-editor';
import { Button, Panel, PanelBody, PanelRow, SelectControl, ResponsiveWrapper, __experimentalNumberControl as NumberControl, __experimentalBoxControl as BoxControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import '../style.css';
import { useState } from '@wordpress/element';
import Slider from "react-slick";

const Edit = (props) => {
	const {
		attributes: { align, title, receipenamecolor, mediaURL, mediaID, ingredients, subtitlecolor, subcontentcolor, instructions, imagestyle, receipe_category, preptime, cooktime, additional, totaltime, servings, datayield, nutrition_facts, message, bordercolor, blockcolor, border_style, borderradiousvalue, paddingleft, paddingtop, paddingright, paddingbottom, colorValue, images },
		setAttributes,
	} = props;

	const blockProps = useBlockProps();

	const ALLOWED_MEDIA_TYPES = ['image'];

	function MyMediaUploader({ mediaIDs, onSelect }) {
		return (
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelect}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					value={mediaIDs}
					render={({ open }) => (
						<Button
							onClick={open}
							className="button button-large media-button button-primary"
							style={{ marginBottom: '20px', fontSize: '16px' }}
						>{mediaIDs.length < 1 ? 'Upload/Select Images' : 'Add/Remove Image'}</Button>
					)}
					gallery
					multiple
				/>
			</MediaUploadCheck>
		);
	}

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const ImageChangeHandler = (event) => {
		setAttributes({ images: event });
	};

	const onChangeAlign = (value) => {
		setAttributes({
			align: value === undefined ? 'none' : value,
		})
	}

	const onChangeTitle = (value) => {
		setAttributes({ title: value });
	};

	const onChangeTitleColor = (value) => {
		setAttributes({ receipenamecolor: value });
	};

	const onChangeBorderColor = (value) => {
		setAttributes({ bordercolor: value });
	}

	const onChangeBlockColor = (value) => {
		setAttributes({ blockcolor: value });
	}

	const onChangeBlockBodyColor = (value) => {
		setAttributes({ blockbodyValue: value });
	}

	const onChangeBorderStyle = (value) => {
		setAttributes({ border_style: value });
	}

	const setborderradious = (value) => {
		setAttributes({ borderradiousvalue: value });
	}

	const setPaddingleftvalue = (value) => {
		setAttributes({ paddingleft: value });
	}

	const setPaddingtopvalue = (value) => {
		setAttributes({ paddingtop: value });
	}

	const setPaddingrightvalue = (value) => {
		setAttributes({ paddingright: value });
	}

	const setPaddingbottomvalue = (value) => {
		setAttributes({ paddingbottom: value });
	}

	const setcolorValue = (value) => {
		setAttributes({ colorValue: value });
	}

	const onChangeIngredients = (value) => {
		console.log(value);
		setAttributes({ ingredients: value });
	};

	const onChangesubtitlecolorColor = (value) => {
		setAttributes({ subtitlecolor: value });
	};

	const onChangesubcontentColor = (value) => {
		setAttributes({ subcontentcolor: value });
	};

	const onChangeInstructions = (value) => {
		setAttributes({ instructions: value });
	};

	const onChangeImageStyles = (value) => {
		setAttributes({ imagestyle: value });
	};

	const get_receipe_category = (value) => {
		setAttributes({ receipe_category: value });
	};

	const get_preptime = (value) => {
		setAttributes({ preptime: value });
	};

	const get_cooktime = (value) => {
		setAttributes({ cooktime: value });
	};

	const get_additional = (value) => {
		setAttributes({ additional: value });
	};

	const get_totaltime = (value) => {
		setAttributes({ totaltime: value });
	};

	const get_servings = (value) => {
		setAttributes({ servings: value });
	};

	const get_datayield = (value) => {
		setAttributes({ datayield: value });
	};

	const get_nutrition_facts = (value) => {
		setAttributes({ nutrition_facts: value });
	};

	const get_message = (value) => {
		setAttributes({ message: value });
	};

	return (

		<div {...blockProps} >
			<InspectorControls>


				<PanelBody title={__('Border & Block Settings')} initialOpen={false}>
					<p>Border Color: </p>
					<ColorPalette value={bordercolor} onChange={onChangeBorderColor} />

					<p>Border Radius</p>
					<UnitControl
						onChange={setborderradious}
						value={borderradiousvalue}
					/>
					<br />
					<p>Block Color: </p>
					<ColorPalette value={blockcolor} onChange={onChangeBlockColor} />
					<br />


					<p>Border Style: </p>
					<SelectControl
						value={border_style}
						options={[
							{ label: __('Dotted'), value: __('dotted') },
							{ label: __('Dashed'), value: __('dashed') },
							{ label: __('Solid'), value: __('solid') },
							{ label: __('Double'), value: __('double') },
							{ label: __('Groove'), value: __('groove') },
							{ label: __('Ridge'), value: __('ridge') },
							{ label: __('Insert'), value: __('inset') },
							{ label: __('Outset'), value: __('outset') },
							{ label: __('None'), value: __('none') },
							{ label: __('Hidden'), value: __('hidden') },
							{ label: __('Main Dishes'), value: __('Main Dishes') },
						]}
						onChange={onChangeBorderStyle}
					/>

				</PanelBody>

				<PanelBody title={__('Padding Settings')} initialOpen={false}>

					<p>Padding Type:<sup> Top,Right,Bottom,Left </sup> </p>
					<div className='Paddingparent'>
						<div></div>
						<UnitControl className="paddingfield" onChange={setPaddingtopvalue} value={paddingtop} />
						<UnitControl className="paddingfield" onChange={setPaddingrightvalue} value={paddingright} />
						<UnitControl className="paddingfield" onChange={setPaddingbottomvalue} value={paddingbottom} />
						<UnitControl className="paddingfield" onChange={setPaddingleftvalue} value={paddingleft} />
					</div>

				</PanelBody>


				<PanelBody title={__('Color Settings')} initialOpen={false}>
					<p>Title Color: </p>
					<ColorPalette value={receipenamecolor} onChange={onChangeTitleColor} />
					<p>Sub-Title Title Color: </p>
					<ColorPalette value={subtitlecolor} onChange={onChangesubtitlecolorColor} />
					<p>Sub-Content Text Color: </p>
					<ColorPalette value={subcontentcolor} onChange={onChangesubcontentColor} />



				</PanelBody>

				<PanelBody title={__('Receipe Category')} initialOpen={false}>
					<SelectControl
						value={receipe_category}
						options={[
							{ label: __('Appetizers and Snacks'), value: __('Appetizers and Snacks') },
							{ label: __('Bread Recipes'), value: __('Bread Recipes') },
							{ label: __('Breakfast and Brunch'), value: __('Breakfast and Brunch') },
							{ label: __('Desserts'), value: __('Desserts') },
							{ label: __('Dinner Recipes'), value: __('Dinner Recipes') },
							{ label: __('Drinks'), value: __('Drinks') },
							{ label: __('Everyday Cooking'), value: __('Everyday Cooking') },
							{ label: __('Holidays and Events'), value: __('Holidays and Events') },
							{ label: __('Seafood Recipes'), value: __('Seafood Recipes') },
							{ label: __('Salad Recipes'), value: __('Salad Recipes') },
							{ label: __('Pasta and Noodles'), value: __('Pasta and Noodles') },
							{ label: __('Main Dishes'), value: __('Main Dishes') },
						]}
						onChange={get_receipe_category}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="recepe-card" style={{ borderStyle: border_style, borderColor: bordercolor, background: blockcolor, borderRadius: borderradiousvalue, paddingTop: paddingtop, paddingRight: paddingright, paddingBottom: paddingbottom, paddingLeft: paddingleft }}>
				<BlockControls>
					<AlignmentControl
						value={align}
						onChange={onChangeAlign}
					/>
				</BlockControls>

				<RichText
					tagName='h2'
					style={{ color: receipenamecolor, textAlign: align }}
					placeholder={__('Write Recipe title…')}
					value={title}
					onChange={onChangeTitle}
				/>

				<div>
					<Slider {...settings}>
						{
							images.length >= 1 ?
								images.map((item, index) =>
								(
									<div className='block'>

										<img className={imagestyle} src={item.url} width={item.width} />

									</div>
								)) : <p>Click the button and add some images to your Recipe Block</p>
						}
					</Slider>
				</div>
				<MyMediaUploader
					mediaIDs={images.map(item => item.id)}
					onSelect={ImageChangeHandler}
				/>
				<span className='inline_label '>Preparation time:
					<RichText
						tagName='p'
						placeholder={__('ex.10 mins')}
						style={{ color: subcontentcolor }}
						value={preptime}
						onChange={get_preptime}
					/></span>

				<span className='inline_label'>Cook time:
					<RichText
						tagName='p'
						placeholder={__('ex.50 mins')}
						style={{ color: subcontentcolor }}
						value={cooktime}
						onChange={get_cooktime}
					/></span>

				<span className='inline_label'>Additional time:
					<RichText
						tagName='p'
						placeholder={__('ex.70 mins')}
						style={{ color: subcontentcolor }}
						value={additional}
						onChange={get_additional}
					/></span>


				<span className='inline_label'>Total Services:
					<RichText
						tagName='p'
						placeholder={__('ex.4 Servings')}
						style={{ color: subcontentcolor }}
						value={servings}
						onChange={get_servings}
					/></span>

				<span className='inline_label'>Total Yields:
					<RichText
						tagName='p'
						placeholder={__('ex.4 Servings')}
						style={{ color: subcontentcolor }}
						value={datayield}
						onChange={get_datayield}
					/></span>

				<h3 style={{ color: subtitlecolor }}>{__('Ingredients')}</h3>

				<RichText
					tagName='ul'
					multiline='li'
					placeholder={__('Write a list of ingredients…')}
					value={ingredients}
					onChange={onChangeIngredients}
					style={{ color: subcontentcolor }}
					className='ingredients'
				/>

				<h3 style={{ color: subtitlecolor }}>{__('Instructions')}</h3>

				<RichText
					tagName='ul'
					multiline='li'
					placeholder={__('Write the instructions…')}
					style={{ color: subcontentcolor }}
					value={instructions}
					onChange={onChangeInstructions}
				/>

				<h3 style={{ color: subtitlecolor }}>{__('Nutrition Facts')}</h3>

				<RichText
					tagName='p'
					placeholder={__('salt etc..')}
					style={{ color: subcontentcolor }}
					value={nutrition_facts}
					onChange={get_nutrition_facts}
				/>

				<h3 style={{ color: subtitlecolor }}>{__('Steps :')}</h3>

				<RichText
					tagName='ul'
					multiline='li'
					value={message}
					onChange={get_message}
					style={{ color: subcontentcolor }}
				/>

			</div>
		</div>

	);
};

export default Edit;

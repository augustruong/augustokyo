import React from 'react'
import GalleryGridWrapper from '../sections/GalleryGridWrapper'

import './Pages.css'

export default function GalleryPage() {

  return (
	<div className='dark-theme'>
		<div id='gallery-page'>
			<section className='cover__wrapper'>
				<div className='content__wrapper'>
					<img className='title'
						src={process.env.PUBLIC_URL + `./images/gallery-title.svg`}/>
				</div>
			</section>
			<GalleryGridWrapper/>
			<p style={{textAlign:'center',marginTop:'100px'}}>♡＼(￣▽￣)／♡</p>
		</div>
	</div>
  )
 }
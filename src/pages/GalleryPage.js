import React from 'react'

export default function GalleryPage() {
  return (
	<div id='gallery-page' className='dark-theme'>
		<section className='cover__wrapper'>
			<div className='content__wrapper'>
				<img className='title'
					src={process.env.PUBLIC_URL + `./images/gallery-title.svg`}/>
			</div>
		</section>
	</div>
  )
 }
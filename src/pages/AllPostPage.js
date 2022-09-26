import React from 'react'
import './Pages.css'

export default function AllPostPage() {
  return (
	<div id='allPost-page' className='dark-theme'>
		<section className='cover__wrapper'>
			<div className='content__wrapper'>
				<div className='subtitle'>my stories by words and pictures</div>
				<img className='title'
					src={process.env.PUBLIC_URL + `./images/storyposts-title.svg`}/>
			</div>
		</section>

		<section className='allPost__wrapper'>

		</section>
	</div>
  )
 }
import React from 'react'

import PostThumb from '../components/PostThumb';
import AllPostWrapper from '../sections/AllPostWrapper';


import './Pages.css'


export default function AllPostPage() {
  return (
	<div id='allPost-page' className='dark-theme'>
		<section className='cover__wrapper'>
			<div className='content__wrapper'>
				<img className='title'
					src={process.env.PUBLIC_URL + `./images/storyposts-title.svg`}/>
			</div>
		</section>

		<AllPostWrapper/>
	</div>
  )
 }
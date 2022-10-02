import React from 'react'

import PostThumb from '../components/PostThumb';
import AllPostWrapper from '../sections/AllPostWrapper';


import './Pages.css'


export default function AllPostPage() {
  return (
	<div className='dark-theme'>
		<div id='allPost-page' >
			<section className='cover__wrapper'>
				<div className='content__wrapper'>
					<img className='title'
						src={process.env.PUBLIC_URL + `./images/storyposts-title.svg`}/>
				</div>
			</section>
			<AllPostWrapper/>
		</div>
	</div>
  )
 }
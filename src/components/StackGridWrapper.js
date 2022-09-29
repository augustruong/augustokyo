import React, { Component, useEffect } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';

import './StackGridWrapper.css'


class StackGridWrapper extends React.Component {

	render() {
		const {
			size: {width}
		} = this.props;
		
		return (
			<StackGrid 
				className='stackgrid'
				columnWidth={width <= 768 ? '100%' : '33.33%'}
				gutterWidth={10}
				gutterHeight={10}
				easing = "easings.quartOut"
				gridRef={grid => this.grid = grid}
			>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/10-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/09-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/08-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/04-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/02-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/05-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/03-00.jpg`}/>
				</figure>
				<figure className='stackgrid-img'>
					 <img src={process.env.PUBLIC_URL + `./images/07-00.jpg`}/>
				</figure>
		  </StackGrid>
		)
	}
}

export default sizeMe()(StackGridWrapper);
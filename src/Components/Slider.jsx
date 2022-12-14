import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import SliderArrow from './SliderArrow'
import Img from './Img'
import '../utils/style/animations.css'

export default function Slider({ data }) {
	const [newIndex, setnewIndex] = useState(0)

	const prevImg = () =>
		newIndex > 0 ? setnewIndex(newIndex - 1) : setnewIndex(data.length - 1)

	const nextImg = () =>
		newIndex >= data.length - 1 ? setnewIndex(0) : setnewIndex(newIndex + 1)

	return (
		<SliderContainer>
			{data.map((pictureSrc, curentIndex) => (
				<SlideContainer 
					className={curentIndex === newIndex ? "slide active" : "slide"}
					key={`banner-${curentIndex + 1}`}
				>
					{curentIndex === newIndex &&
					<Img
						src={pictureSrc}
						alt={`picture-${curentIndex + 1}`}
						height="22rem"
						width="100%"
						borderRadius="25px"
						cover
					/>}
				</SlideContainer>
			))}
			<SliderArrow direction="prev" moveSlideFunc={prevImg} />
			<SliderArrow direction="next" moveSlideFunc={nextImg} />
		</SliderContainer>
	)
}

const SliderContainer = styled.section`
	position: relative;
	border-radius: 25px;
	overflow: hidden;
	width: 100%;
	height: 22rem;
`
const SlideContainer = styled.div`
	position: absolute;
	width: 100%;
	overflow-hidden;
`
Slider.propTypes = {
	data: PropTypes.array.isRequired,
}

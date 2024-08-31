import React from 'react'
import { useState } from 'react'
function ImageUploader({setImage ,prev }) {

	const [gallary, setGallary] = useState([])
	// const [filesData , setFilesData] = useState([])
	

	const addImage = (e) => {
		if(gallary.length >= 5) {
			alert('You can only upload 5 images');
			return;
		}
		const file = e.target.files[0]
		const reader = new FileReader()
		
		reader.onload = () => {
			const data = {
				id: Date.now(),
				src: reader.result

			}
			setGallary([...gallary, data])
			
		}
		reader.readAsDataURL(file)
		setImage([...prev , file])
		
		
	}

	const removeImage = (id) => {
		const newGallary = gallary.filter((image) => image.id !== id)
		setGallary(newGallary)
	}


	return (
		<>
			<label htmlFor="file">Upload Image</label>
			<input type="file" id="file" className='form-control' onChange={addImage} />
			<div className='d-flex row-s g-2'>

			
			{gallary.map((image) => (
				<div key={image.id} className='pt-3' onClick={()=>removeImage(image.id)}>
					<img width={"100"} height={"100"} src={image.src} alt="external-image-upload-multimedia-thin-kawalan-studio"/>	
				</div>
			))}
			</div>
		</>
	)
}

export default ImageUploader
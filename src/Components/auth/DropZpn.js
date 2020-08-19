import React, { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
export const DropZonePhoto = (props) => {
	const [files, setFiles] = useState([]);
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
			let Avatar = acceptedFiles[0];
			props.setFieldValue("Avatar", Avatar);
		},
	});

	const thumbs = files.map((file) => (
		<div key={file.name}>
			<img
				src={file.preview}
				alt='hello'
				name='photo'
				style={{ width: "200px", height: "200px", borderRadius: "50%" }}
			/>
		</div>
	));

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	return (
		<React.Fragment>
			<div {...getRootProps()} className='imageProfile'>
				<input {...getInputProps()} />
				{thumbs}
			</div>
		</React.Fragment>
	);
};

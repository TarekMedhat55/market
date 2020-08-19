import React, { Fragment } from "react";
const Categories = ({ categories }) => {
	return (
		<div className='sidebar-box-2'>
			{categories.map((category) => (
				<Fragment key={category._id}>
					<h2 className='heading mb-4'>
						<span>{category.name}</span>
					</h2>
					<ul>
						{category.sub_categories.map((category_sub) => (
							<li key={category_sub._id}>
								<span>{category_sub.name}</span>
							</li>
						))}
					</ul>
				</Fragment>
			))}
		</div>
	);
};

export default Categories;

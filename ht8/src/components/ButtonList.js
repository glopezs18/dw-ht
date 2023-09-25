import React, { Component } from 'react'

class ButtonList extends Component {
    render() {
        let categoriesDatalist = this.props.categories.map(category => {
            return(
                <button
					type='button'
					className='btn-category'
					onClick={() => this.props.filterCategory(category)}
					key={category}
				>
					{category}
				</button>
            )
        });

        return(
            <div className="categories">
                {categoriesDatalist}
            </div>
        )
    }
}

export default ButtonList

// export const ButtonList = ({ categories, filterCategory }) => {
// 	return (
// 		<div className='categories'>
// 			{categories.map(category => (
// 				<button
// 					type='button'
// 					className='btn-category'
// 					onClick={() => filterCategory(category)}
// 					key={category}
// 				>
// 					{category}
// 				</button>
// 			))}
// 		</div>
// 	);
// };

// export default ButtonList
import React, { Component } from 'react'

class ButtonList extends Component {
    render() {
        let categoriesDatalist = this.props.categories.map((category, key) => {
            return(
                <button
                    data-id={key}
					type='button'                    
					className={`btn-category${(this.props.active == key) ? ' active' : ''}`}
					onClick={() => {this.props.filterCategory(category); this.props.toggle(key)}}
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
import React, { Component } from 'react'


class ArticleList extends Component {
    render() {
        let productDatalist = this.props.products.map(product => {
            return(
                <div className="article-container" key={product.id}>
                    <div className="img-container">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="article-body">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="article-footer">
                            <span>Q{product.price}</span>
                        </div>
                    </div>
                </div>
            )
        });

        return(
            <div className="article-list">
                {productDatalist}
            </div>
        )
    }
}

export default ArticleList
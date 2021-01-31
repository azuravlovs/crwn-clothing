import React, { Component } from 'react'
import shopData from './shopData'
import CollectionPreview from '../../componenets/collection-preview/CollectionPreview'

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state ={
            collections: shopData
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

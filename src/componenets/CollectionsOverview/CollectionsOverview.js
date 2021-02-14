import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCollectionForPreview} from '../../redux/shop/shopSelector'

import CollectionPreview from '../CollectionPreview/CollectionPreview'

import './CollectionsOverview.style.scss'

function CollectionsOverview({collections}) {
    return (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)

import React from 'react'
import {Route} from 'react-router-dom'

import CollectionsOverview from '../../componenets/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'

export default function Shop({match}) {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}
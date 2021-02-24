import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionsOverviewContainer from '../../componenets/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'
import WithSpinner from '../../componenets/WithSpinner/WithSpinner'

import {fetchCollectionsStartAsync} from '../../redux/shop/shopActions'
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shopSelector'


const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends Component{
    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        
        fetchCollectionsStartAsync()
    }
    
    render() {
        const {match, isCollectionLoaded} = this.props
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync)
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
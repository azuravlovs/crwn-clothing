import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionsOverview from '../../componenets/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'
import WithSpinner from '../../componenets/WithSpinner/WithSpinner'

import {updateCollections} from '../../redux/shop/shopActions'

import {firestore, convertCollectionsSpanshotToMap} from '../../firebase/firebase'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends Component{
    state = {
        loading: true
    }
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
      const { updateCollections } = this.props;
      const collectionRef = firestore.collection('collections');
  
      collectionRef.get().then((snapshot) => {
        const collectionsMap = convertCollectionsSpanshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({loading: false})
      });
    }
    
    render() {
        const {match} = this.props
        const {loading} = this.state
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`}
                    render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)
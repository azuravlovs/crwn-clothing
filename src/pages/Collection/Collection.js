import React from 'react'
import {connect} from 'react-redux'

import CollectionItem from '../../componenets/CollectionItem/CollectionItem'

import {selectCollection} from '../../redux/shop/shopSelector'

import './Collection.style.scss'

function Collection({collection}) {
  const {title, items} = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
      </div>
  )
}

const mapSatateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapSatateToProps)(Collection)
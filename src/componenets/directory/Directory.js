import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectDirectorySections} from '../../redux/directory/directorySelector'

import MenuItem from '../MenuItem/MenuItem'

import './Directory.style.scss'

function Directory({sections}) {
  return (
    <div>
      <div className='directory-menu'>
        {
          sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

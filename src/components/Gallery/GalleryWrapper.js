import React, { Component } from 'react'

class GalleryWrapper extends Component {

  render () {
    console.log(this.props)
    return (
      <div className="gallery-container">
        {
          this.props.gallery.map(
            image => {
              return (
                  <img
                    key={image.node.display_url}
                    className="displayed-img"
                    src={
                      image.node.display_url
                    }
                    width={150}
                    alt=""
                  />
              );
            }
          )
        }
      </div>
    )
  }
}

export default GalleryWrapper

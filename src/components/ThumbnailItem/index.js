import './index.css'

const ThumbnailItem = props => {
  const {images, onClickImgTab, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl} = images
  const clickImg = () => {
    onClickImgTab(imageUrl)
  }

  const isActiveItem = isActive ? ' ' : 'element'
  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${isActiveItem}`}
        onClick={clickImg}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

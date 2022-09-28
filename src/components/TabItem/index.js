// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const oncLickTabButton = () => {
    changeTabItem(tabId)
  }

  const highlightBorder = isActive ? 'tabboarder' : 'tabButton'

  return (
    <li className="Tab-container">
      <button
        type="button"
        onClick={oncLickTabButton}
        className={highlightBorder}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

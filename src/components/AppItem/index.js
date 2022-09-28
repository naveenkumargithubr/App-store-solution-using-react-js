// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="App-container">
      <img src={imageUrl} alt="search icon" className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem

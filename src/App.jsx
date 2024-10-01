
import './App.css'
import ImageSlider from './Components/image-slider/index.jsx'
import LightDarkMode from './Components/light-dark-mode/index.jsx'
import LoadMoreData from './Components/load-more-data/index.jsx'
import QRCodeGenerator from './Components/qr-code-generator/index.jsx'
// import Accordion from './Components/accordion/Accordion.jsx'
import RandomColor from './Components/random-color/index.jsx'
import ScrollIndicator from './Components/scroll-indicator/index.jsx'
import StarRating from './Components/star-rating/index.jsx'
import { menus } from './Components/tree-view/data.js'
import TreeView from './Components/tree-view/index.jsx'

function App() {


  return (
    <>
      {/* acordion component */}
      {/* <Accordion /> */}
      {/* random color component */}
      {/* <RandomColor/> */}

      {/* <StarRating noOfStars={10}/> */}

      {/* image slider component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component/menu UI component/ recursive navigation */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>

    </>
  )
}

export default App

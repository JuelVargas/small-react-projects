
import './App.css'
import ImageSlider from './Components/image-slider/index.jsx'
import LoadMoreData from './Components/load-more-data/index.jsx'
// import Accordion from './Components/accordion/Accordion.jsx'
import RandomColor from './Components/random-color/index.jsx'
import StarRating from './Components/star-rating/index.jsx'

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
      <LoadMoreData/>

    </>
  )
}

export default App

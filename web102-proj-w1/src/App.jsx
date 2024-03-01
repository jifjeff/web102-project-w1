import './App.css'
import Game from './components/Game'

const bannerImg = '/images/logo.png';
const companies = [
  {
  'name': 'Sony',
  'img': '/images/sony.jpg',
  'link': 'https://www.playstation.com/en-us/'
  },
  {
  'name': 'Nintendo',
  'img': '/images/nintendo.jpg',
  'link': 'https://www.nintendo.com/us/'
  },
  {
  'name': 'Xbox',
  'img': '/images/xbox.png',
  'link': 'https://www.xbox.com/en-US/'
  },
  {
  'name': 'Devolver',
  'img': '/images/devolver.png',
  'link': 'https://www.devolverdigital.com/'
  },
  {
  'name': 'Ubisoft',
  'img': '/images/ubisoft.png',
  'link': 'https://www.ubisoft.com/en-us/'
  },
  {
  'name': 'Electronic Arts (EA)',
  'img': '/images/ea.png',
  'link': 'https://www.ea.com/'
  },
  {
  'name': 'Square Enix',
  'img': '/images/se.png',
  'link': 'https://www.square-enix.com/'
  },
  {
  'name': 'Bethesda',
  'img': '/images/bethesda.jpg',
  'link': 'https://bethesda.net/en/dashboard'
  },
  {
  'name': 'Sega',
  'img': '/images/sega.jpg',
  'link': 'https://www.sega.com/'
  },
  {
  'name': 'Capcom',
  'img': '/images/capcom.png',
  'link': 'https://www.capcomusa.com/'
  },
];

function App() {
  return (
    <>
    <div className="top-image">
        <img src={bannerImg} alt="banner" id="banner"/>
    </div>

    <div className="content">
      <h1>Not-defunct-E3 Presentation Lineup</h1>
      
      <div className="flex-container">
        {
          companies.map((company,i) => {
              return(
                <Game company={company['name']} img={company['img']} link={company['link']} key={i}/>
              )
          })
        }
      </div>  
    </div>   
    </>
  )
}

export default App

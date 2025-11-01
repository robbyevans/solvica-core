import './StartPageStlyes.css'

export const StartPage = () => {
  return (
    <div className="start-page-container">
        <div className='left-container'>
            <div className='title-wrapper'>
            <h1 className='los-text'>Los</h1>
            <h1 className='munchos-text'>Munchos</h1>
            </div>

            <div className='description-wrapper'>
                <p className='description-text'>Grab weekend <br/> special with <br/> awesome Discounts!</p>
            </div>

        </div>
        <div className='right-container'></div>
    </div>
  )
}

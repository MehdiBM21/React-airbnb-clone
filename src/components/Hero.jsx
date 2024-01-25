import grid from '../assets/images-grid.svg'
import Card from './Card'
import cardsData from '../data/cards'
export default function Hero(){
    const cards = cardsData.map((item) => <Card
        key={item.id}
        {...item}
    />);
    return(
        <div className="hero-container">
            <img src={grid} className='images-grid'/>
            <div className='hero-text-container'>
                <h1 className='hero-title'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        <div className="card-list">
            {cards}
        </div>
        </div>
    )
}
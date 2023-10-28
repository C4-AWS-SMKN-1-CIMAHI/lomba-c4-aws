import HeaderHomePage from '../components/HeaderHome'
import FaqComponent from '../components/Faq'
import TimeLine from '../components/TimeLine'

const HomePage = () => {
    return (
        <div className="homepage">
            <HeaderHomePage/>
            <TimeLine/>
            <FaqComponent/>
        </div>
    )
}

export default HomePage
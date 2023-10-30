import HeaderHomePage from '../components/HeaderHome'
import FaqComponent from '../components/Faq'
import TimeLine from '../components/TimeLine'
import VisiMisi from '../components/VisiMisi'
import Culture from '../components/Culture'

const HomePage = () => {
    return (
        <div className="homepage">
            <HeaderHomePage/>
            <TimeLine/>
            <VisiMisi/>
            <Culture/>
            <FaqComponent/>
        </div>
    )
}

export default HomePage
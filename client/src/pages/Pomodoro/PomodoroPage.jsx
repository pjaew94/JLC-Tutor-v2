import Navbar from '../../components/Navbar/Navbar'
import Pomodoro from '../../components/Pomodoro/Pomodoro'
import './PomodoroPage.scss'


const PomodoroPage = () => {
    return (
        <div className='pomodoro-page'>
            <Navbar />
            <Pomodoro />
        </div>
    )
}

export default PomodoroPage
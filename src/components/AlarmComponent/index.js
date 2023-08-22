import { Component } from 'react';

import './index.css';

const initialState = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
    timerLimitInMinutes: 90,
  }
  
class Alarm extends Component {
    state = initialState
  
    componentWillUnmount() {
      this.clearTimerInterval()
    }
  
    clearTimerInterval = () => clearInterval(this.intervalId)
  
    onDecreaseTimerLimitInMinutes = () => {
      const {timerLimitInMinutes} = this.state
  
      if (timerLimitInMinutes > 1) {
        this.setState(prevState => ({
          timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
        }))
      }
    }
  
    onIncreaseTimerLimitInMinutes = () =>
      this.setState(prevState => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
    }))
  
    onResetTimer = () => {
      this.clearTimerInterval()
      this.setState(initialState)
    }
  
    incrementTimeElapsedInSeconds = () => {
      const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
      const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60
  
      if (isTimerCompleted) {
        this.clearTimerInterval()
        this.setState({isTimerRunning: false})
      } else {
        this.setState(prevState => ({
          timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        }))
      }
    }
  
    onStartOrPauseTimer = () => {
      const {
        isTimerRunning,
        timeElapsedInSeconds,
        timerLimitInMinutes,
      } = this.state
      const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60
  
      if (isTimerCompleted) {
        this.setState({timeElapsedInSeconds: 0})
      }
      if (isTimerRunning) {
        this.clearTimerInterval()
      } else {
        this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
      }
      this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
    }
  
    renderTimerController = () => {
      const {isTimerRunning} = this.state
      const startOrPauseImageUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'
  
      return (
        <div className="w-full mx-auto flex flex-col justify-center items-center relative">
            <div className='w-full mx-auto flex flex-row justify-center items-center mt-6'>
                <div className='flex flex-col justify-center items-center mr-6'>
                    <button onClick={this.onStartOrPauseTimer} className='w-[67px] h-[67px] rounded-[100%] bg-[#4200FF] flex items-center justify-center'>
                        <img
                            alt={startOrPauseAltText}
                            className="timer-controller-icon"
                            src={startOrPauseImageUrl}
                        />
                    </button>
                    <span className='font-bold text-[16px] text-white'>{isTimerRunning ? 'Pause' : 'Start'}</span>
                </div>
                <div className='w-[96px] h-[96px] bg-[#DB3002] rounded-[100%] flex items-center justify-center mr-6'><span className='font-bold text-[24px] text-white'>ALARM</span></div>
                <div className='flex flex-col justify-center items-center'>
                    <button onClick={this.onResetTimer} className='w-[67px] h-[67px] rounded-[100%] bg-[#4200FF] flex items-center justify-center'>
                        <img
                            alt="reset icon"
                            className="w-[20px] h-[17px]"
                            src={process.env.PUBLIC_URL + '/images/Resume.png'}
                        />
                    </button>
                    <span className='font-bold text-[16px] text-white'>Resume</span>
                </div>
            </div>
        </div>
      )
    }
  
    getElapsedSecondsInTimeFormat = () => {
      const {timerLimitInMinutes, timeElapsedInSeconds} = this.state
      const totalRemainingSeconds =
        timerLimitInMinutes * 60 - timeElapsedInSeconds
      const minutes = Math.floor(totalRemainingSeconds / 60)
      const seconds = Math.floor(totalRemainingSeconds % 60)
      const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
      const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
  
      return `${stringifiedMinutes}:${stringifiedSeconds}`
    }
  
    render() {
      const {isTimerRunning} = this.state
  
      return (
        <div className="w-full mx-auto flex items-center justify-center">
          <div className="w-full mx-auto digital-timer-container">
            <div className="timer-display-container">
              <div className="elapsed-time-container">
                <p className="timer-state">Date time</p>
                <h1 className="elapsed-time">
                  {this.getElapsedSecondsInTimeFormat()}
                </h1>
              </div>
            </div>
            <div className="w-full mx-auto controls-container">
              {this.renderTimerController()}
            </div>
            <div className='w-full mx-auto flex flex-row justify-center items-center mt-8'>
                <input className='flex-1 m-2 border-2 border-[#D9D9D9] h-[52px] max-w-[39px] text-center bg-[#43385E] text-[28px] p-2' type="text" id="first_alarm" maxLength='1' />
                <input className='flex-1 m-2 border-2 border-[#D9D9D9] h-[52px] max-w-[39px] text-center bg-[#43385E] text-[28px] p-2' type="text" id="second_alarm" maxLength='1' />
                <input className='flex-1 m-2 border-2 border-[#D9D9D9] h-[52px] max-w-[39px] text-center bg-[#43385E] text-[28px] p-2' type="text" id="third_alarm" maxLength='1' />
            </div>
          </div>
        </div>
      )
    }
}
  
export default Alarm

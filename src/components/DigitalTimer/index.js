import { Component } from 'react';

import './index.css';

const initialState = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
    timerLimitInMinutes: 90,
  }
  
  class DigitalTimer extends Component {
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
  
      return (
        <div className="mt-8 flex flex-col justify-center items-center relative">
          <button
            className="w-[125px] h-[125px] rounded-[100%] bg-[#0C8A02] border-4 border-[#4200FF]"
            onClick={this.onStartOrPauseTimer}
            type="button"
          >
            <span className='font-bold text-[40px] text-white'>{isTimerRunning ? 'Pause' : 'Start'}</span>
          </button>
          <button style={{right: '-58px', bottom: '20px'}} className='w-[67px] h-[67px] rounded-[100%] bg-[#4200FF] flex items-center justify-center absolute'><img src={process.env.PUBLIC_URL + '/images/CameraIcon.png'} alt="Camera Icon" /></button>
          <button
            className="timer-controller-btn"
            onClick={this.onResetTimer}
            type="button"
          >
            <img
              alt="reset icon"
              className="timer-controller-icon"
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            />
            <p className="timer-controller-label">Reset</p>
          </button>
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
  
      return (
        <div className="w-full mx-auto flex items-center justify-center">
          <div className="digital-timer-container">
            <div className="timer-display-container">
              <div className="elapsed-time-container">
                <p className="timer-state">Date time</p>
                <h1 className="elapsed-time">
                  {this.getElapsedSecondsInTimeFormat()}
                </h1>
              </div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                <div className='w-full mx-auto flex flex-row justify-around items-center'><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Group</span></div><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Atlanta</span></div></div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-3'><div><span className='font-bold text-[20px] text-[#D9D9D9]'>Delay</span></div><div><span className='font-bold text-[20px] text-[#D9D9D9]'>05:00<span className='font-normal text-[14px] text-[#D9D9D9]'>min</span></span></div></div>
            </div>
            <div className="controls-container">
              {this.renderTimerController()}
            </div>
          </div>
        </div>
      )
    }
  }
  
export default DigitalTimer

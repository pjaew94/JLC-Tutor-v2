import { useState, useEffect } from "react";
import "./Pomodoro.scss";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { BsPlayFill, BsStopFill } from "react-icons/bs";
import { IconContext } from "react-icons";

import { useMediaQuery } from "react-responsive";

// Counts down
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0)
    return (
      <div className="timer">
        <div className="text">Finished!</div>
      </div>
    );

  return (
    <div className="timer">
      <div className="value">
        {Math.floor(remainingTime / 60)}:
        {remainingTime % 60 < 10
          ? "0" + (remainingTime % 60)
          : remainingTime % 60}
      </div>
    </div>
  );
};

// Toggles Pomodoro or Break
const TogglePomOrBreak = ({
  pomodoroOrBreak,
  setStartTimer,
  setPomodoroOrBreak,
  setTimeValue,
  setKey,
}) => {
  const toggleFunc = (boolean) => {
    setPomodoroOrBreak(boolean);
    setStartTimer(false);
    if (boolean) {
      setTimeValue(25 * 60);
    } else {
      setTimeValue(5 * 60);
    }

    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="toggles">
      <button
        className={`pomodoro-toggle ${pomodoroOrBreak && "toggled"}`}
        onClick={() => toggleFunc(true)}
      >
        Pomodoro
      </button>
      <button
        className={`break-toggle ${!pomodoroOrBreak && "toggled"}`}
        onClick={() => toggleFunc(false)}
      >
        Break
      </button>
    </div>
  );
};

// Stop button and time buttons
const PomodoroButtons = ({
  startTimer,
  timeValue,
  setStartTimer,
  pomodoroOrBreak,
  setTimeValue,
  setKey,
}) => {
  const playStopFunc = () => {
    if (startTimer) {
      setStartTimer(false);
      setKey((prevKey) => prevKey + 1);
    } else {
      setStartTimer(true);
    }
  };
  const setTimeFunc = (time) => {
    setTimeValue(time * 60);
    setKey((prevKey) => prevKey + 1);
  };

  // Pomodoro times
  const pomodoroTimes = [25, 30, 35, 40, 45, 50];
  // Break times
  const breakTimes = [5, 10, 15];

  return (
    <>
      <button className="play-stop-button" onClick={() => playStopFunc()}>
        <IconContext.Provider value={{ className: "pomodoro-icon" }}>
          {startTimer ? <BsStopFill /> : <BsPlayFill />}
        </IconContext.Provider>
        {startTimer ? "Stop" : "Start"}
      </button>

      <div className="timer-buttons">
        {pomodoroOrBreak
          ? pomodoroTimes.map((time) => {
              return <button key={time} className={timeValue/60 === time ? 'toggled' : undefined} onClick={() => setTimeFunc(time)}>{time}</button>;
            })
          : breakTimes.map((time) => {
              return <button key={time} className={timeValue/60 === time ? 'toggled': undefined} onClick={() => setTimeFunc(time)}>{time}</button>;
            })}
      </div>
    </>
  );
};

const Pomodoro = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [timeValue, setTimeValue] = useState(1500);
  const [pomodoroOrBreak, setPomodoroOrBreak] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {}, [timeValue]);

  const isHD = useMediaQuery({
    query: "(min-width: 2560px)",
  });

  return (
    <div className="pomodoro">
      <TogglePomOrBreak
        pomodoroOrBreak={pomodoroOrBreak}
        setPomodoroOrBreak={setPomodoroOrBreak}
        setStartTimer={setStartTimer}
        setTimeValue={setTimeValue}
        setKey={setKey}
      />
      <CountdownCircleTimer
        key={key}
        isPlaying={startTimer}
        size={isHD ? 400 : 250}
        strokeWidth={isHD ? 25 : 15}
        isLinearGradient
        duration={timeValue}
        colors={[
          ["#e79792", 0.33],
          ["#c250c1", 0.33],
        ]}
        trailColor={"rgba(255, 255, 255, 0.2)"}
      >
        {renderTime}
      </CountdownCircleTimer>
      <PomodoroButtons
        startTimer={startTimer}
        timeValue={timeValue}
        setStartTimer={setStartTimer}
        setTimeValue={setTimeValue}
        pomodoroOrBreak={pomodoroOrBreak}
        setKey={setKey}
      />
    </div>
  );
};

export default Pomodoro;

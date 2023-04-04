import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import styled from 'styled-components';

export const FlipDate = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = tick => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const offset = new Date();
    const timeDuration = Tick.helper.duration(1, "months",3 ,"days");

    // add 24 hours to get final deadline
    const deadline = new Date(
      offset.setMilliseconds(offset.getMilliseconds() + timeDuration)
    );

    const counter = Tick.count.down(deadline, {
      format: ["d","h", "m", "s"]
    });

    // When the counter updates, update React's state value
    counter.onupdate = function(value) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick">
      <div data-repeat="true">
        <span data-view="flip" />
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from 'react';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: white;
  color: #205295;
  padding: 20px;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const TimeValue = styled.span`
  font-size: 2rem;
`;

const TimeLabel = styled.span`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-left: 5px;
`;

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map(interval => {
    return (
      <TimeContainer key={interval}>
        <TimeValue>{timeLeft[interval]}</TimeValue>
        <TimeLabel>{interval}</TimeLabel>
      </TimeContainer>
    );
  });

  return (
    <Container>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </Container>
  );
}

export default CountdownTimer;





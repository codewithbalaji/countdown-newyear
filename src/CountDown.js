import React, { useEffect, useState } from 'react';
import './Countdown.css';
import { Col, Container, Row } from 'react-bootstrap';

const CountDown = ({ newYear }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const distance = (newYear - now) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);
  return (
    <Container fluid className="app-container">
      <Row className="background-img" />
      <Row className="content">
        <Row>
          <div className="count-text">
            <span style={{ fontSize: '1.3rem', fontWeight: 500 }}>
              Countdown
            </span>
            <br />
            <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>To</span>
            <br />
            <b>New Year</b>
          </div>
        </Row>

        <Row className="count-container">
          <Col className="count-item">
            <div className="count-val">{days}</div>
            <div className="count-label">Days</div>
          </Col>
          <Col className="count-item">
            <div className="count-val">{hours}</div>
            <div className="count-label">Hours</div>
          </Col>
          <Col className="count-item">
            <div className="count-val">{minutes}</div>
            <div className="count-label">Minutes</div>
          </Col>
          <Col className="count-item">
            <div className="count-val">{seconds}</div>
            <div className="count-label">Seconds</div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default CountDown;

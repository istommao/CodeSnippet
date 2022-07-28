import React from 'react';

import { Button, Input, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph, Text, Link } = Typography;

const useDate = () => {
  const locale = 'zh';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'short' });
  const date = `${today.toLocaleDateString(locale, { month: 'long' })}${today.getDate()}日  ${day}`;

  const hour = today.getHours();
  const second = today.getSeconds();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  });

  const mstimestamp = today.getTime();
  const timestamp = parseInt(Date.now() / 1000);

  return {
    timestamp,
    mstimestamp,
    date,
    time,
    wish,
  };
};

const DateTimeApp = () => {
  const [InputTimestamp, setInputTimestamp] = React.useState('');
  const [CovertResult, setCovertResult] = React.useState('');

  const { date, time, wish, timestamp, mstimestamp } = useDate();

  const datetime = date + ' ' + time;

  const onInputChange = (e: any) => {
    setInputTimestamp(e.target.value);

    const result = new Date(parseInt(e.target.value));

    setCovertResult(result.toString());
  };

  return (
    <div>
      <Paragraph>
        <Input value={datetime} />
      </Paragraph>
      <Paragraph>
        <Input value={timestamp} suffix="s" />
      </Paragraph>
      <Paragraph>
        <Input value={mstimestamp} suffix="ms" />
      </Paragraph>

      <Paragraph>
        <Text>timestamp</Text>
        <Input value={InputTimestamp} onChange={onInputChange} />
      </Paragraph>
      <Paragraph>
        <Input value={CovertResult} />
      </Paragraph>
    </div>
  );
};

export { DateTimeApp };

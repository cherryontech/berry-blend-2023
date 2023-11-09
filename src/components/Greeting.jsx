const timeOfDay = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = 'morning';
  else if (hours >= 12 && hours <= 17) greet = 'afternoon';
  else if (hours >= 17 && hours <= 24) greet = 'evening';
  return greet;
};

const DefaultGreeting = () => {
  return (
    <div>
      <h1 className="main--greeting">Good</h1>
      <p className="sub--greeting">Take a break, you deserve it.</p>
    </div>
  );
};

export default DefaultGreeting;

const DefaultGreeting = () => {
  var myDate = new Date();
  var hours = myDate.getHours();
  var greet;

  if (hours < 12) greet = 'morning';
  else if (hours >= 12 && hours <= 17) greet = 'afternoon';
  else if (hours >= 17 && hours <= 24) greet = 'evening';

  return (
    <div>
      <h1 className="main--greeting">Good {greet}</h1>
      <p className="sub--greeting">Take a break, you deserve it.</p>
    </div>
  );
};

export default DefaultGreeting;

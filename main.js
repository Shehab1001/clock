const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
/*
"We start by selecting the elements representing the clock hands so that we can manipulate them to display the current time.

Using document.querySelector(), we select the elements with the classes .second-hand, .min-hand, and .hour-hand, which correspond to the seconds, minutes, and hours hands of our clock, respectively.

These elements are then stored in variables secondHand, minsHand, and hourHand, allowing us to easily reference and update them later in our code.

In summary, this section of code sets the stage for our clock animation by grabbing the necessary elements from the HTML document."
*/

/*Setting Clock Hands Position: The setDate() function calculates the rotation angle for each clock hand based on the current time*/
function setDate() {
  const now = new Date();

  /*
  Here, we're initializing a new Date object using JavaScript's built-in Date constructor. This line effectively captures the current date and time at the moment it's executed. Think of it as a snapshot of the current time. We're assigning this snapshot to a variable called 'now', which we'll use throughout our code to reference the current time. This allows us to calculate the rotation angles for the clock hands based on the current hour, minute, and second."
  */

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  /*
  
  "Now, let's focus on how we calculate and display the rotation of the seconds hand.

First, we obtain the current seconds using now.getSeconds(). This gives us a value between 0 and 59, representing the current second of the minute.

Next, we convert this value into a rotation angle. Since a full circle has 360 degrees and there are 60 seconds in a minute, we can calculate the rotation angle for the seconds hand by multiplying the current seconds by (360 / 60), which equals 6 degrees per second.

However, to ensure that the seconds hand starts from the top (12 o'clock position), we add 90 degrees to the calculated angle.

Once we have the rotation angle (secondsDegrees), we apply it to the seconds hand using CSS transform property. We use template literals to dynamically insert the rotation angle into the rotate() function, thus rotating the seconds hand accordingly.

This process ensures that the seconds hand moves smoothly around the clock face, accurately reflecting the passage of time."
  */

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  /*
  "Now, let's move on to how we calculate and display the rotation of the minutes hand.

First, we retrieve the current minutes using now.getMinutes(). This gives us a value between 0 and 59, representing the current minute of the hour.

Next, we calculate the rotation angle for the minutes hand. Similar to the seconds hand, we consider that a full circle has 360 degrees and there are 60 minutes in an hour. So, we calculate the rotation angle by multiplying the current minutes by (360 / 60), which equals 6 degrees per minute.

However, to ensure the minutes hand moves smoothly between the hour marks, we need to consider the progression of seconds within the current minute. This is where the term ((seconds/60)*6) comes into play. Since there are 60 seconds in a minute, each passing second contributes an additional fraction of a degree to the rotation angle of the minutes hand. So, we add ((seconds/60)*6) to account for this continuous progression.

Finally, we add 90 degrees to ensure that the minutes hand starts from the top (12 o'clock position).

Once we have the rotation angle (minsDegrees), we apply it to the minutes hand using CSS transform property. We use template literals to dynamically insert the rotation angle into the rotate() function, thus rotating the minutes hand accordingly.

This calculation ensures that the minutes hand moves smoothly around the clock face, accurately reflecting the passage of time."
  */

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

/*

"Now, let's discuss how we calculate and display the rotation of the hours hand.

To begin, we retrieve the current hour using now.getHours(). This gives us a value between 0 and 23, representing the current hour of the day.

Next, we calculate the rotation angle for the hours hand. Since there are 12 hours on a clock face, we divide the current hour by 12 to get a fraction representing the proportion of the hour passed. We then multiply this fraction by 360 degrees, as a full circle represents 360 degrees.

Additionally, we account for the movement of the hours hand as time progresses within the current hour. To do this, we take into consideration the current minute (mins). Since there are 60 minutes in an hour, we calculate the fraction of the hour that has passed by dividing the current minute by 60. We then multiply this fraction by 30 degrees, as the hour hand moves 30 degrees for every 60 minutes.

Finally, we add 90 degrees to ensure that the hours hand starts from the top (12 o'clock position).

Once we have calculated the rotation angle (hourDegrees), we apply it to the hours hand using the CSS transform property. This updates the position of the hours hand on the clock face.

By combining these calculations, we ensure that all three hands of our clock move smoothly and accurately, providing a real-time display of the current time."
*/

}

setInterval(setDate, 1000);
setDate();

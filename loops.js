/***: Build a function `forLoop`. It takes an array as an argument.
Start counting from 0, and, using a `for` loop, add a string to the array 25 times.
But not just any string. If your `i` value is `1`, add the string `"I am 1 strange loop."`;
if your `i` value is anything else, add the string `"I am $ strange loops."`.
(Remember flow control with `if` and `else`? And how do we _interpolate_ `i`?) Then return the array.

/****: Create a function called `whileLoop` in `loops.js`. The function should
take a number as an argument. Using a `while` loop, count down (using `console.log`)
from the passed in number to 0. Then return the string `'done'`.

****: Define a function called `doWhileLoop` in `loops.js`. The function
should take an array as an argument. Use the `maybeTrue()` function (you can
copy it from this README) as the condition, and remove elements from the array
until the array is empty or until `maybeTrue()` returns `false`. (Your condition
might look something like `array.length > 0 && maybeTrue()`.) Finally, return the array.
*/
function forLoop(array)
{
  for(var i = 0; i <= 25; i++)
  {
    if(i === 1)
    {
      array[0] = `I am 1 strange loop.`;

    }else
    {
      array.push(`I am ${i} strange loops.`);
    }
  }

  return array;
}

function whileLoop(n)
{
   while(n > 0)
   {
     console.log(--n);
   }

   return "done";
}

function maybeTrue()
{
  return Math.random() >= 0.5
}

function doWhileLoop(array)
{
  do{

    array.splice(0, 1);

  }while(array.length === 0 && maybeTrue())

  return(array);

}

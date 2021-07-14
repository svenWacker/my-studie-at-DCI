import React from "react";
/* Regular Expressions
 way to find a word in a text
some expressions:

? optional
* match zero or more
^ start with
$ ends with
. any chr Except line breaks 
\ escape chr
[^ao] negated range aka not wonted
[A-Z] range of chr aka from to
[a,z]
\w word
\W not a word
\d digit
\D not digit
\s spaces
\S not spaces
\b boundary
\B Not boundary 

*/

const App = () => {
  const emailCheck = (str) => {
    const regex = /^[A-Za-z0-9\.\_\-]+@+[A-Za-z0-9\.\_\-]+\.[A-Za-z]{2}$/g;
    // console.log(regex.source);
    return regex.test(str);
  };
  const visaCheck = (str) => {
    // 444-4444-4444 visa ex
    const regex = /\d{3}-\d{4}-\d{4}/g;

    return regex.test(str);
  };
  const phoneCheck = (str) => {
    // 030-4449999 phone ex
    const regex = /\d{3}-?\d{7}/g;
    return regex.test(str);
  };
  if (emailCheck("hi@hadi.co")) {
    console.log("Yay");
  } else {
    console.log("Noooo");
  }
  console.log(emailCheck(".ex@gmail.com.com"));
  // console.log(visaCheck("2394u39u5"));
  // console.log(visaCheck("333-5556-7777"));
  // console.log(phoneCheck("030-5534444"));
  return <React.Fragment></React.Fragment>;
};
export default App;

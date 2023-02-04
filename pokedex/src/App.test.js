import App from "./App";
import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

//testing react native apps is the same way with this,but just the testing library name is different
//we can write test.js for any component we want

test("renders first test", () => {
  //declare this test structure at the first time,this string is title of out test function
  const comp = render(<App />); //the component which is gonna be testing
  /*expect: the object that we need to get answers when its tested ,we can write anything inside expect(),exmp:5+9,
  expect.function(); Does expect object is meet the condition ?*/
  expect(comp).toMatchSnapshot(); //is component match with snapshot
});

test("example by test id", () => {
  //declare this test structure at the first time,this string is title of out test function
  const comp = render(<App />);
  // const title = comp.getByTestId("title");
  // console.log("test id element:", title);
});

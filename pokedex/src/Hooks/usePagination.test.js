import * as React from "react";
import usePagination from "./usePagination";
import { render, fireEvent, screen } from "@testing-library/react";

//testing react native apps is the same way with this,but just the testing library name is different
//we can write test.js for any component we want

test("usePagination test", () => {
  const comp = render(<usePagination />);

  expect(comp).toMatchSnapshot();
});

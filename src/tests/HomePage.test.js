import React from "react";
import TestRenderer from "react-test-renderer";
import HomePage from "../../src/components/HomePage/HomePage";

it("HomePage render correctly", () => {
  const tree = TestRenderer.create(<HomePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

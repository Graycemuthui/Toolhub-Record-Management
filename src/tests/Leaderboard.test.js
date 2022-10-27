import React from "react";
import TestRenderer from "react-test-renderer";
import Leaderboard from "../../src/components/LeaderBoard/Leaderboard";

it("Leaderboard render correctly", () => {
  const tree = TestRenderer.create(<Leaderboard />).toJSON();
  expect(tree).toMatchSnapshot();
});

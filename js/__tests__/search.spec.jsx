import React from "react";
import { shallow } from "enzyme";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("Test shoul render correct", () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

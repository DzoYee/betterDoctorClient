import React from 'react'
import { mount } from 'enzyme';
import DoctorList from '../src/components/doctor_list.js';
import DoctorListItem from '../src/components/doctor_list_item.js';

describe('DoctorList', () => {
  let props;
  let mountedDoctorList;
  const doctorList = () => {
    if (!mountedDoctorList) {
      mountedDoctorList = mount(
        <DoctorList {...props} />
      );
    }
    return mountedDoctorList;
  }

  beforeEach(() => {
    props = {
      results: []
    };
    mountedDoctorList = undefined;
  });

  it("always renders a div", () => {
    const divs = doctorList().find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
      const divs = doctorList().find("div");
      
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children()).toEqual(doctorList().children());
    });
  });

  it("renders 'DoctorListItems' based on the number of results in props", () => {
    for (var i = 0; i < 2; i++) {
      props.results.push({
        uid: i.toString(),
        first_name: 'bob',
        last_name: 'the',
        title: 'Builder',
        image_url: 'bobtheBuilder.com'
      })
    }
    expect(doctorList().find(DoctorListItem).length).toBe(2);
  });

  describe("rendered 'DoctorListItem'", () => {
    it("receives props", () => {
      props.results.push({
      uid: 'bobbyBrown',
      first_name: 'bob',
      last_name: 'the',
      title: 'Builder',
      image_url: 'bobtheBuilder.com'
    })
      const doctorListItem = doctorList().find(DoctorListItem);
      expect(Object.keys(doctorListItem.props()).length).toBe(5);
    });
  });
})
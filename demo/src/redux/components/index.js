import React from 'react';
import PropTypes from 'prop-types';

import { Tabs, TabLink, TabContent } from '../../../../src';

import './styles.css';

const styles = {
  tabs: {
    width: '400px',
    display: 'inline-block',
    marginRight: '30px',
    verticalAlign: 'top',
  },
  links: {
    margin: 0,
    padding: 0,
  },
  tabLink: {
    height: '30px',
    lineHeight: '30px',
    padding: '0 15px',
    cursor: 'pointer',
    border: 'none',
    borderBottom: '2px solid transparent',
    display: 'inline-block',
  },
  activeLinkStyle: {
    borderBottom: '2px solid #333',
  },
  visibleTabStyle: {
    display: 'inline-block',
  },
  content: {
    padding: '0 15px',
  },
};

const App = props => (
  <div id="redux">
    <div>State:</div>
    <code>
      <div>
        <strong>tabs 1:</strong> {String(props.tabs1)}
      </div>
      <div>
        <strong>tabs 2:</strong> {String(props.tabs2)}
      </div>
    </code>
    <div>
      <Tabs
        name="tabs1"
        className="tabs tabs-1"
        handleSelect={props.changeSelectedTab}
        selectedTab={props.tabs1}
        onChange={
          (tab, namespace) =>
            console.log(`Tab selected: ${tab} in namespace ${namespace}`) // eslint-disable-line no-console
        }
      >
        <div className="tab-links">
          <TabLink to="tab1" add="110">
            Tab1
          </TabLink>
          <TabLink to="tab2" add="1110">
            Tab2
          </TabLink>
          <TabLink to="tab3" add="19">
            Tab3
          </TabLink>
        </div>

        <div className="content">
          <TabContent for="tab1" add="1">
            <h2>Tab1 content</h2>
            <p>
              Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis
              deleniti ei cum, amet graece nec an. Eu vix sumo atqui apeirian,
              nullam integre accusamus his at, animal feugiat in sed.
            </p>
            <p>
              Pro vitae percipit no. Per ignota audire no. Ex hinc mutat
              delicata sit, sit eu erant tempor vivendo. Ad modus nusquam
              recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto
              expetendis, est nonumy contentiones voluptatibus cu.
            </p>
          </TabContent>
          <TabContent for="tab2" add="2">
            <h2>Tab2 content</h2>
            <div>¯\_(ツ)_/¯</div>
          </TabContent>
          <TabContent for="tab3" add="3">
            <h2>Tab3 content</h2>
            <div>(╯°□°）╯︵ ┻━┻)</div>
          </TabContent>
        </div>
      </Tabs>

      <Tabs
        name="tabs2"
        handleSelect={props.changeSelectedTab}
        onChange={
          (tab, namespace) =>
            console.log(`Tab selected: ${tab} in namespace ${namespace}`) // eslint-disable-line no-console
        }
        selectedTab={props.tabs2}
        activeLinkStyle={styles.activeLinkStyle}
        visibleTabStyle={styles.visibleTabStyle}
        style={styles.tabs}
      >
        <div style={styles.links}>
          <TabLink to="tab1" style={styles.tabLink} add="010">
            Tab1
          </TabLink>
          <TabLink to="tab2" default style={styles.tabLink} add="11110">
            Tab2
          </TabLink>
          <TabLink to="tab3" style={styles.tabLink} add="230">
            Tab3
          </TabLink>
        </div>

        <div style={styles.content}>
          <TabContent for="tab1" add="4">
            <h2>Tab1 content</h2>
            <p>
              Lorem ipsum dolor sit amet, in vel malorum adipiscing. Duis
              deleniti ei cum, amet graece nec an. Eu vix sumo atqui apeirian,
              nullam integre accusamus his at, animal feugiat in sed.
            </p>
            <p>
              Pro vitae percipit no. Per ignota audire no. Ex hinc mutat
              delicata sit, sit eu erant tempor vivendo. Ad modus nusquam
              recusabo sit. Per ne deserunt periculis, ad sea saepe perfecto
              expetendis, est nonumy contentiones voluptatibus cu.
            </p>
          </TabContent>
          <TabContent for="tab2" add="5">
            <h2>Tab2 content</h2>
            <div>¯\_(ツ)_/¯</div>
          </TabContent>
          <TabContent for="tab3" add="6">
            <h2>Tab3 content</h2>
            <div>(╯°□°）╯︵ ┻━┻)</div>
          </TabContent>
        </div>
      </Tabs>
    </div>
  </div>
);

App.propTypes = {
  tabs1: PropTypes.string,
  tabs2: PropTypes.string,
  changeSelectedTab: PropTypes.func,
};

export default App;

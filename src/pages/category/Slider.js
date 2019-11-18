import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react'

export default class Slider extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
      <p>Content of {tab.title}</p>
    </div>);

  render() {
    const tabs = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
      { title: '10th Tab' },
      { title: '11th Tab' },
      { title: '12th Tab' },
    ];

    return (
      

        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={11} />} tabBarPosition='left' tabDirection='vertical'>
          {this.renderContent}
        </Tabs>

      
    );
  }
}


import React from 'react';
import Content from './Content';
import DefaultButton from './Button.jsx';
import { theme, ThemeContext } from './constant';

class ThemeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme.light
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme() {
    this.setState((prevState) =>({
      theme: prevState.theme === theme.light ? theme.red : theme.light
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <Content />
        </ThemeContext.Provider>
        <DefaultButton handler={this.changeTheme}>change the button theme</DefaultButton>
      </React.Fragment>
    )
  }
}

export default ThemeContent;
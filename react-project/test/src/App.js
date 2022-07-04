/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Myheader from './Myheader';
import Mynav from './Mynav';
import Mysection from './Mysection';
import Controls from './Controls';
import Createsection from './Createsection';
import Updatesection from './Updatesection';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.current_id = 3;
    this.state = {
      mode: 'update',
      selected_id: 0,
      subject: { title: 'React', desc: 'Single Page Application' },
      welcome: { title: 'Welcome', desc: 'Welcome to React' },
      menus: [
        {
          id: 1,
          title: 'HTML',
          desc: 'Hypertext Markup Language'
        },
        {
          id: 2,
          title: 'CSS',
          desc: 'Cascade Style Sheet'
        },
        {
          id: 3,
          title: 'Javascript',
          desc: 'Javascript is for interactive'
        }
      ]
    }
  }

  getArticles() {

    //console.log('App.js실행');
    var _title, _desc, _section = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _section = <Mysection title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
      /*
      반복문.. 클릭한 그 요소의 data-id값이 menus의 각 항목들에 있는지 확인
      */
      var i = 0;
      while (i < this.state.menus.length) {
        var data = this.state.menus[i];
        if (this.state.selected_id === data.id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }

      _section = <Mysection title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _section = <Createsection onSubmit={(_title1, _desc1) => {
        this.current_id = this.current_id + 1;
        // this.state.menus.push({id: this.current_id,title: tit, desc: des});

        // var _menus = this.state.menus.concat({ id: this.current_id,title: tit,desc: des });
        var _menus = Array.from(this.state.menus);
        _menus.push({ id: this.current_id, title: _title1, desc: _desc1 });

        this.setState({
          menus: _menus
        });
      }}
      />;
    } else if (this.state.mode === 'update') {
      _section = <Updatesection onSubmit={(_title1, _desc1) => {
        this.current_id = this.current_id + 1;

        var _menus = Array.from(this.state.menus);
        _menus.push({ id: this.current_id, title: _title1, desc: _desc1 });

        this.setState({
          menus: _menus
        });
      }}
      />;
    }
    return _section;
  }

  render() {
    return (
      <div className='App'>
        <Myheader
          title={this.state.subject.title}
          desc={this.state.subject.desc}
          onChangePage={() => {
            this.setState({ mode: 'welcome' })
          }}
        />

        <Mynav
          data={this.state.menus}
          onChangePage={(num) => {
            this.setState(
              {
                mode: 'read',
                selected_id: Number(num)
              });
          }}
        />
        {this.getArticles()}

        <Controls onChangePage={(str) => {
          this.setState({
            mode: str
          });
        }} />
      </div >
    );
  }
}





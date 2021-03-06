import React, { Component } from 'react';

export default class Createsection extends Component {
  render() {

    return (
      <section>
        <article>
          <h2>Create section</h2>
          <form action="/create_process" method='post'
            onSubmit={(e) => {
              e.preventDefault();
              //this.props.onSubmit(_title, _desc);
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }}>
            <p>
              <input type="text" name='title' placeholder='title' />
            </p>
            <p>
              <textarea name="desc" placeholder='description'></textarea>
            </p>
            <p>
              <input type="submit" value='전송'></input>
            </p>
          </form>
        </article>
      </section>
    );
  }
}


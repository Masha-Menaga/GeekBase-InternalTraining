import React, { useEffect, useState } from "react";
import { Component } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 10) {
      setMessage("value is defined");
      setCount("10");
    }
  }, [count]);
  return (
    <>
      <h1>hello {count}</h1>

      <button onClick={() => setCount(count + 1)}>add</button>
      {message}
    </>
  );
};

export default Count;

export const ApiCalling = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apicall = async () => {
      const responce = await fetch("https://fakestoreapi.com/products");
      const values = await responce.json();
      setData(values);
    };
    apicall();
  }, []);

  return (
    <>
      <h1>get the Data</h1>
      <div>
        {data.map((item) => (
          <ul>
            <li>
              <div>
                {item.id} - {item.category}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

//class Component
export class ClsCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div>
          {this.state.count}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            add
          </button>
        </div>
      </>
    );
  }
}

//Bind Component
export class BindCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <>
        <div>
          {this.state.count}

          <button onClick={this.increment}>click</button>
        </div>
      </>
    );
  }
}

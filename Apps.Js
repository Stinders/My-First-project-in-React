import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from 'react';
import { Addtodo } from "./MyComponents/Addtodo";
import { About } from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
   Route,
   
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    //console.log("this is a delete function", todo)
    //let index = todos.indexOf(todo);
    //0todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  const addTodo = (title, desc) => {
    //console.log("i am adding this", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    //console.log(myTodo)


    localStorage.setItem("todos", JSON.stringify(todos));


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  return (
    <>
      <Router>
        <Header title="My To do list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos}  onDelete={onDelete} />
              </>)
          }
          }>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>

  );
}

export default App;
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from 'react';
import { Addtodo } from "./MyComponents/Addtodo";
import { About } from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
   Route,
   
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    //console.log("this is a delete function", todo)
    //let index = todos.indexOf(todo);
    //0todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }



  const addTodo = (title, desc) => {
    //console.log("i am adding this", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    //console.log(myTodo)


    localStorage.setItem("todos", JSON.stringify(todos));


  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])

  return (
    <>
      <Router>
        <Header title="My To do list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todos todos={todos}  onDelete={onDelete} />
              </>)
          }
          }>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>

  );
}

export default App;

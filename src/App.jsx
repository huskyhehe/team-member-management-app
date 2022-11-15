import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import List from './views/List';
import Add from './views/Add';
import Edit from './views/Edit';

import './styles/styles.css';

const viewList = [
    {
        id: 'list',
        path: '/',
        element: <List />
    },
    {
        id: 'add',
        path: '/add',
        element: <Add />
    },
    {
        id: 'edit',
        path: '/edit',
        element: <Edit />
    }
];


function App() {
    return (
        <div className="App">
            <Router> 
                <Routes>
                    { viewList.map((view) => {
                        return <Route key={view.id} path={view.path} element={view.element} />
                    })}
                </Routes>         
            </Router>          
        </div>
    );
}

export default App;

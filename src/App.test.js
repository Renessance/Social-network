import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from "./App";
import {act} from "@testing-library/react";

it('renders without crashing', function () {
    const div = document.createElement('div');

    act(() => {
        ReactDOM.render(<MainApp/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
});
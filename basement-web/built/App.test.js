"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var App_ts_1 = require("./App.ts");
test('renders learn react link', function () {
    react_1.render(<App_ts_1.default />);
    var linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

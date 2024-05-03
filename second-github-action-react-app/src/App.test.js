import { render, screen, fireEvent } from '@testing-library/react';
import App from "./App";
import { replaceCamelWithSpaces } from './App';

test ('button has correct initial color, and updates when clicked', () =>{
    // renders App component
    render(<App/>);
    // "screen": has access to the virtual DOM we created
    // find an el with a role of button and text of 'Change to blue
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    // expect the backgound color to be red
    expect(colorButton).toHaveStyle({background: 'red'});
    // click button
    fireEvent.click(colorButton);
    // expect the background dolor to be blue
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
    // expect the button text to be "Change to red"
    expect(colorButton).toHaveTextContent('Change to red');
});

test ('initial conditions', () =>{
    render(<App/>);
    // check that the button starts out enabled
    const colorButton = screen.getByRole('button', { name: 'Change to blue'});
    expect(colorButton).toBeEnabled();
    // check that the checkbox starts out unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test ('Checkbox will diables button on first click and enables on second click', () =>{
    render(<App/>);
    const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
    const checkBox = screen.getByRole('checkbox', { name: "Disable button"});
    fireEvent.click(checkBox);
    expect(colorBtn).not.toBeEnabled();
    fireEvent.click(checkBox);
    expect(colorBtn).toBeEnabled();
});

test ('disabled button has gray background and reverts to red', () =>{
    render(<App/>);
    const colorBtn = screen.getByRole('button', { name: 'Change to blue'});
    const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({backgroundColor: 'gray'});
    fireEvent.click(checkbox);
    expect(colorBtn).toHaveStyle({backgroundColor: 'red'})
});

// unit testing functions
// groping tests
describe('spaces before camel-case capital letters', () =>{
    test ('Works for no inner capital letters', () =>{
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    test ('Works for one inner capital letter', () =>{
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test ('Works for multiple inner capital letters', () =>{
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });
});
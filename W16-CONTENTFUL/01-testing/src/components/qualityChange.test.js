import { fireEvent, render, screen } from "@testing-library/react"
import QuantityChange from "./QuantityChange"

test('<QualityChange />', () => {
    render(<QuantityChange />)

    const plusButton = screen.getByTestId('plusbutton')
    // console.log("🚀 ~ plusButton", plusButton)

    // screen.debug()

    expect(plusButton.textContent).toContain('a')
})

test('<QualityChange /> state testing', () => {

    render(<QuantityChange />)

    const counter = screen.getByTestId('counter');

    expect(counter.textContent).toBe('0')

    // User presses the plus button
    const plusButton = screen.getByTestId('plusbutton')
    fireEvent.click(plusButton)
    fireEvent.click(plusButton)
    
    expect(counter.textContent).toBe('2')
    
    // User presses the minus button
    const minusButton = screen.getByTestId('minusbutton')
    
    fireEvent.click(minusButton)
    expect(counter.textContent).toBe('1')

})
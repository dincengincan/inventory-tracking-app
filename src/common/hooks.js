import React, {useState} from 'react';
import '../App.css'

const useForm = (labels, options, defaultStates ) => {
    const [comboboxSelectedValue, setComboboxSelectedValue] = useState(defaultStates ? defaultStates.dropdown : options[0])
    const [firstInputValue, setFirstInputValue] = useState( defaultStates ? defaultStates.firstInput : "")
    const [secondInputValue, setSecondInputValue] = useState(defaultStates ? defaultStates.secondInput : "")
    const [thirdInputValue, setThirdInputValue] = useState(defaultStates ? defaultStates.thirdInput : "")
    const [fourthInputValue, setFourthInputValue] = useState(defaultStates ? defaultStates.fourthInput : "")
    const [fifthInputValue, setFifthInputValue] = useState(defaultStates ? defaultStates.fifthInput : "")
    const [sixthInputValue, setSixthInputValue] = useState(defaultStates ? defaultStates.sixthInput : "")

    const handleComboboxChange = (e) => setComboboxSelectedValue(e.target.value)
    const handleFirstInputChange = (e) => setFirstInputValue(e.target.value)
    const handleSecondInputChange = (e) => setSecondInputValue(e.target.value)
    const handleThirdInputChange = (e) => setThirdInputValue(e.target.value)
    const handleFourthInputChange = (e) => setFourthInputValue(e.target.value)
    const handleFifthInputChange = (e) => setFifthInputValue(e.target.value)
    const handleSixthInputChange = (e) => setSixthInputValue(e.target.value)

    

    const Form = () => (
        <form>
            {
                labels.dropdown && (
                    <div className="input-area">
                        {labels.dropdown}
                        <select className="new-user-form-input" value={comboboxSelectedValue} onChange={handleComboboxChange}>
                            {options.map(option => {
                                return <option  key={option} value={option} >{option}</option>
                            })}
                        </select>
                    </div>
                )
            }
            {
                labels.firstInput && (
                    <div className="input-area">
                        <label>
                            {labels.firstInput}
                            <input className="new-user-form-input" type="text" value={firstInputValue} onChange={handleFirstInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                labels.secondInput && ( 
                    <div className="input-area">
                        <label>
                            {labels.secondInput}
                            <input className="new-user-form-input" type="text" value={secondInputValue} onChange={handleSecondInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                labels.thirdInput && ( 
                    <div className="input-area">
                        <label>
                            {labels.thirdInput}
                            <input className="new-user-form-input" type="text" value={thirdInputValue} onChange={handleThirdInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                labels.fourthInput && ( 
                    <div className="input-area">
                        <label>
                            {labels.fourthInput}
                            <input className="new-user-form-input" type="text" value={fourthInputValue} onChange={handleFourthInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                labels.fifthInput && ( 
                    <div className="input-area">
                        <label>
                            {labels.fifthInput}
                            <input className="new-user-form-input" type="text" value={fifthInputValue} onChange={handleFifthInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                labels.sixthInput && ( 
                    <div className="input-area">
                        <label>
                            {labels.sixthInput}
                            <input className="new-user-form-input" type="text" value={sixthInputValue} onChange={handleSixthInputChange}/>
                        </label>
                    </div>
                )
            }
        </form>
    )

    return [ Form, [comboboxSelectedValue, firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue]]
}


export default useForm;
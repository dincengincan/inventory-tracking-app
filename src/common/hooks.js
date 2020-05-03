import React, {useState} from 'react';
import '../App.css'

const useNewItem = (comboboxObject, firstInput, secondInput, thirdInput, fourthInput, fifthInput, sixthInput) => {
    const [comboboxSelectedValue, setComboboxSelectedValue] = useState(comboboxObject.options[0])
    const [firstInputValue, setFirstInputValue] = useState("")
    const [secondInputValue, setSecondInputValue] = useState("")
    const [thirdInputValue, setThirdInputValue] = useState("")
    const [fourthInputValue, setFourthInputValue] = useState("")
    const [fifthInputValue, setFifthInputValue] = useState("")
    const [sixthInputValue, setSixthInputValue] = useState("")

    const handleComboboxChange = (e) => setComboboxSelectedValue(e.target.value)
    const handleFirstInputChange = (e) => setFirstInputValue(e.target.value)
    const handleSecondInputChange = (e) => setSecondInputValue(e.target.value)
    const handleThirdInputChange = (e) => setThirdInputValue(e.target.value)
    const handleFourthInputChange = (e) => setFourthInputValue(e.target.value)
    const handleFifthInputChange = (e) => setFifthInputValue(e.target.value)
    const handleSixthInputChange = (e) => setSixthInputValue(e.target.value)

    

    const element = () => (
        <form>
            {
                comboboxObject && (
                    <div className="input-area">
                        {comboboxObject.title}
                        <select className="new-user-form-input" value={comboboxSelectedValue} onChange={handleComboboxChange}>
                            {comboboxObject.options.map(option => {
                                return <option  key={option} value={option} >{option}</option>
                            })}
                        </select>
                    </div>
                )
            }
            {
                firstInput && (
                    <div className="input-area">
                        <label>
                            {firstInput}
                            <input className="new-user-form-input" type="text" value={firstInputValue} onChange={handleFirstInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                secondInput && ( 
                    <div className="input-area">
                        <label>
                            {secondInput}
                            <input className="new-user-form-input" type="text" value={secondInputValue} onChange={handleSecondInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                thirdInput && ( 
                    <div className="input-area">
                        <label>
                            {thirdInput}
                            <input className="new-user-form-input" type="text" value={thirdInputValue} onChange={handleThirdInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                fourthInput && ( 
                    <div className="input-area">
                        <label>
                            {fourthInput}
                            <input className="new-user-form-input" type="text" value={fourthInputValue} onChange={handleFourthInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                fifthInput && ( 
                    <div className="input-area">
                        <label>
                            {fifthInput}
                            <input className="new-user-form-input" type="text" value={fifthInputValue} onChange={handleFifthInputChange}/>
                        </label>
                    </div>
                )
            }
            {
                sixthInput && ( 
                    <div className="input-area">
                        <label>
                            {sixthInput}
                            <input className="new-user-form-input" type="text" value={sixthInputValue} onChange={handleSixthInputChange}/>
                        </label>
                    </div>
                )
            }
        </form>
    )

    return [ element, comboboxSelectedValue, firstInputValue, secondInputValue, thirdInputValue, fourthInputValue, fifthInputValue, sixthInputValue]
}


export default useNewItem;
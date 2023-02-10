import React, {useState} from 'react';

import "../styles.css";

const CreateShow = () => {
    const [toggleAddShow, setToggleAddShow] = useState(false);
    const [showname, setShowname] = useState(null);
    const [description, setDescription] = useState(null);
    const [userFields, setUserFields] = useState([
        {user: ''}
    ])

    const callback = () => {
        setToggleAddShow(!toggleAddShow);
    }

    const handleCreateShow = () => {
        console.log(userFields);
        console.log(showname);
        console.log(description);
    }

    const handleUserFormChange = (index, event) => {
        let data = [...userFields];
        data[index][event.target.name] = event.target.value;
        setUserFields(data);
    }

    const addUserField = (event) => {
        event.preventDefault();
        let newfield = {user: ""};
        setUserFields([...userFields, newfield]);
    }

    const removeUserField = (index, event) => {
        event.preventDefault();
        let data = [...userFields];
        data.splice(index, 1);
        setUserFields(data);
    }

    const formatUserArray = () => {
        // IN: Array of objects {user: ''}
        // OUT: Array of strings

        // TODO: Add function to format form field object into supabase expected input
    }

    const validateFormFields = () =>{
        // TODO: Validate form fields to remove invalid form data
    }

    return (
        <div className="createContainer">
            <form onSubmit={handleCreateShow}>
                <h2>Create a Show</h2>
                <label htmlFor="showname">Name of show</label>
                <br />
                <input 
                    id="showname" 
                    type="text"
                    defaultValue={showname || ""}
                    onChange={(event) => setShowname(event.target.value)}></input>

                <br />
                <div>
                    Upload show photo
                    <br />
                    TODO: Add uploading for show photo
                </div>

                <br />
                <textarea 
                    name="description" 
                    rows="10" 
                    cols="50" 
                    defaultValue={description || 
                        "Exclusively on 8-Ball Radio"
                    }
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br/>
                    {toggleAddShow
                        ? <div>
                            Click here to disable 
                            <input 
                                type="checkbox" 
                                defaultChecked={toggleAddShow} 
                                onClick={callback} />
                            <div>
                                <button onClick={addUserField}>Add user</button>
                                {userFields.map((input, index) => {
                                    return (
                                        <div key={index}>
                                            <input
                                                name='user'
                                                placeholder='User'
                                                onChange={event => handleUserFormChange(index, event)}
                                                value={input.user}
                                            />
                                            <button onClick={(event) => removeUserField(index, event)}>Remove user</button>
                                        </div>
                                    )
                                })}
                            </div>
                          </div>                    
                        : <div>
                              Click here to add more users!
                             <input type="checkbox" defaultChecked={toggleAddShow} onClick={callback} />
                          </div>
                    }
            </form>

            <button onClick={handleCreateShow}>Create Show</button>
        </div>
    )
}

export default CreateShow;
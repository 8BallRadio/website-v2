import React, {useState, useEffect} from 'react';

import supabase from '../config/supabaseClient';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

import "../styles.css";
import { Autocomplete, TextField } from '@mui/material';

const CreateShow = () => {
    const [toggleAddShow, setToggleAddShow] = useState(false);
    const [showname, setShowname] = useState(null);
    const [description, setDescription] = useState(null);
    const [userFields, setUserFields] = useState([
        {user: ''}
    ]);
    const [currentUserDetails, setCurrentUserDetails] = useState(null);
    const [siteUsers, setSiteUsers] = useState(null);
    const [formError, setFormError] = useState('');

    // Check current user's id to find username 
    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [user]);

    const fetchData = async () => {
        const { data, error } = await supabase
            .from("profiles")
            .select()
        
        console.log();

        if(error){
            console.log(error);
        } else {
            setSiteUsers(data.filter(function(el) { return el.id != user.id}));
            setCurrentUserDetails(data.filter(function(el) { return el.id == user.id}));
        }
    }

    const callback = () => {
        setToggleAddShow(!toggleAddShow);
    }

    const handleCreateShow = async () => {
        if (!showname || !description){
            setFormError('Please fill the fields before submitting');
            return;
        }

        const formattedUsers = formatUserArray();
        const key = formatUserRouteURL(showname);
        const { error } = await supabase
            .from('shows')
            .insert({ 
                showname: showname, 
                description: description, 
                users: formattedUsers,
                key: key
             })

        if(error){
            setFormError("There was a problem with creating your show.");
        } else {
            navigate("/shows/" + key);
        }
        // Add authenticated user's username to userArray
        // Redirect if successful to the newly created show page, otherwise show an error!
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

        let data = userFields.map(({user}) => user);
        data.push(currentUserDetails.username);
        return data;
    }

    const formatUserRouteURL = (showname) => {
        // IN: Text string with characters, spaces
        // OUT: Text string with spaces replaced with hyphen, special characters removed
        
        // TODO: remove last hyphen at the end if the character ends up being a space

        return showname.replace(/\s+/g, '-').replace(/[^-a-zA-Z0-9]/g, "").toLowerCase();
    }

    const validateFormFields = () =>{
        // TODO: Validate form fields to remove invalid form data
        // Name of Show can only be letters, numbers, and select symbols
        // Or it could be anything? and then we format the showname accordingly on submission?
    }

    const removeCurrentUser = (data) => {
        return data.filter(function(el) { return el.id != user})
    }

    return (
        <div className={`pushFromTop createContainer`}>
            <form onSubmit={handleCreateShow}>
                <h2>Create a Show</h2>
                <div>
                <label htmlFor="showname">Name of show</label>
                <br />
                <input 
                    id="showname" 
                    type="text"
                    defaultValue={showname || ""}
                    onChange={(event) => setShowname(event.target.value)}/>
                </div>
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
                                            <Autocomplete
                                                name='user'
                                                placeholder='User'
                                                options={siteUsers}
                                                onChange={event => handleUserFormChange(index, event)}
                                                value={input.user}
                                                renderInput={(params) => (
                                                    <TextField {...params}
                                                    
                                                    />
                                                )}
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
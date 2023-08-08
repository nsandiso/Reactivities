import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityForm(){
    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity,updateActivity,loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        tittle: '',
        category: '',
        description: '',
        date: '', 
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
     activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = event.target;
        setActivity({...activity,[name]:value})
    }  

    



    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit}autoComplete='off'>
                <Form.Input placeholder= 'Tittle'  value={activity.tittle} name='tittle' onChange={handleInputChange}/>
                <Form.Input placeholder= 'Description'  value={activity.description} name='Description' onChange={handleInputChange} />
                <Form.Input placeholder= 'Category' value={activity.category} name='Category' onChange={handleInputChange} />
                <Form.Input type='date'placeholder= 'Date' value={activity.date} name='Date' onChange={handleInputChange} />
                <Form.Input placeholder= 'City'  value={activity.city} name='City' onChange={handleInputChange}/>
                <Form.Input placeholder= 'Venue' value={activity.venue} name='Venue' onChange={handleInputChange} />
                <Button loading={loading} floated="right" positive type="submit" content="submit"  />
                <Button  onClick={closeForm} floated="right" positive type="button" content="Cancel" />
            </Form>
        </Segment>
    )
})
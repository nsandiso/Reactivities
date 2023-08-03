import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface props{
   activity: Activity | undefined;
   closeForm : () => void;
   createOrEdit: (activity:Activity |any) => void;
}



export default function ActivityForm({activity:selectedActivity,closeForm, createOrEdit}: props){
    const initialState = selectedActivity ?? {
        id: '',
        tittle: '',
        category: '',
        description: '',
        date: '', 
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
      createOrEdit(activity);
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
                <Form.Input placeholder= 'Date' value={activity.date} name='Date' onChange={handleInputChange} />
                <Form.Input placeholder= 'City'  value={activity.city} name='City' onChange={handleInputChange}/>
                <Form.Input placeholder= 'Venue' value={activity.venue} name='Venue' onChange={handleInputChange} />
                <Button floated="right" positive type="submit" content="submit"  />
                <Button onClick={closeForm} floated="right" positive type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}
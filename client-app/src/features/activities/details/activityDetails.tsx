import React from "react";
import { Button, Card,Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface props{
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;


}

export default function ActivityDetails({activity, cancelSelectActivity, openForm}: props) {
    return( 
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.tittle}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                  {activity.description}
                </Card.Description>
                
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() => openForm(activity.id)} basic color="blue" content="Edit" />
                    <Button onClick={cancelSelectActivity} basic color="red" content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
export{};
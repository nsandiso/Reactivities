import React from "react";
import { Grid} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/activityDetails";
import ActivityForm from "../../form/ActivityForm";


interface props {
    activities : Activity[];
    selectedActivity : Activity | undefined;
    selectActivity: (id: string)=> void
    cancelSelectActivity: () => void;
    editMode: boolean;
    OpenForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity:(id:string) => void;
}

export default function ActivityDashboard({activities,selectActivity, deleteActivity, cancelSelectActivity,
     selectedActivity,editMode,OpenForm,closeForm ,createOrEdit}:props) {
return(
    <Grid>
        <Grid.Column width='10'>
        <ActivityList activities={activities} 
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
        />
        </Grid.Column>
        <Grid.Column width='6'>
            {selectedActivity &&
        <ActivityDetails activity={selectedActivity} 
        cancelSelectActivity={cancelSelectActivity}
        openForm= {OpenForm}

         />}
        {editMode &&
        <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
        </Grid.Column>
    </Grid>
)

} 
export{};
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

 import ModeEditIcon from '@mui/icons-material/ModeEdit';
 import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from "axios";




export default function BlogCard({title,description,categoryDescription,time,id}) {
  const navigate = useNavigate()
  const handleEditClick = () => {
  navigate(`/blog-details/${id}`)
  };

  const handleDeleteClick = async() => {
    try{
const {data} = await axios.delete(`http://localhost:8000/api/blogs/${id}`)
if(data?.success) {
  alert("Blog deleted");
  navigate("/blogs");
}
    } catch (error) {
console.log(error);
    }
   };

  return (
    <Card sx={{
            width: "40%",
            margin: "auto",
            mt: 2,
            padding: 2,
            boxShadow: "5px 5px 10px #ccc",
            ":hover:": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
          >
      <CardHeader  
        subheader={time}
       
      />
     
     <CardContent>

       <Typography variant="body2" color="text.secondary">
          Title: {title}   
           </Typography>

         <Typography variant="body2" color="text.secondary">
           Description: {description}   
           </Typography>

            <Typography variant="body2" color="text.secondary">
          Category Description: {categoryDescription}   
            </Typography>

       </CardContent>

       <CardActions disableSpacing>
       <IconButton sx={{ marginLeft: "auto" }}  onClick={handleEditClick}>
            <ModeEditIcon color="info"/>
           </IconButton>
           <IconButton onClick={handleDeleteClick}>
             <DeleteIcon color="error" />
          </IconButton>
            </CardActions>

            {/* <Collapse in={edit} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}


    </Card>
  );
}

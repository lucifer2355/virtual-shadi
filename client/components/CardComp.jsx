import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";

const CardComp = ({ title, description }) => {
  return (
    <div className='pl-10 pr-10 mt-5'>
      <Card>
        <CardActionArea>
          <CardContent>
            <div className='flex justify-between'>
              <h2 className='text-2xl'>{title}</h2>
              <h2 className='text-sm text-gray-400 self-end'>23/5/2021</h2>
            </div>
            <p className='text-xm text-justify mt-1'>{description}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Edit
          </Button>
          <Button size='small' color='primary'>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComp;

import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const CardComp = () => {
  return (
    <div className='pl-10 pr-10 mt-5'>
      <Card>
        <CardActionArea>
          <CardContent>
            <h2 className='text-2xl'>Lizard</h2>
            <p className='text-xm text-justify'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComp;

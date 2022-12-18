import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardDate = (props) => {
    return (
        <div style={{ display: "inline-block" }}>
            <Card sx={{ width: 110, backgroundColor: `${props.bgColor}`, borderTop: `4px solid ${props.borderColor}`}}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {props.dateNumber}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                        | {props.decision}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardDate;
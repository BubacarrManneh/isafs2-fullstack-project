import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Product} from './types'
import { Link } from 'react-router-dom';
import '../App.css'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type ProductProps = {
    product: Product
}
const ProductCard = ({product}: ProductProps) => {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <div>
        <Card sx={{ maxWidth: 350 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton className="productName">
                        {product.name}
                        <MoreVertIcon />
                    </IconButton>
                    }
                    
                />
                <CardMedia
                    
                   src={product.image}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    <p>Category: {product.category}</p>
                    <Typography paragraph>
                        <p>Price: {product.price}</p>
                    </Typography>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph><Link to={`/product/${product._id}`}>More</Link></Typography>
                    <Typography paragraph>
                        <p>Price: {product.price}</p>
                    </Typography>
                    <Typography paragraph>
                        <p>Category: {product.category}</p>
                    </Typography>
                    <Typography paragraph>
                        <p>Description: {product.description}</p>
                    </Typography>
                    <Typography paragraph>
                        <p>Variant: {' '}{product.variant.map((variant) => (
                            <>{variant}</>
                        ))}</p>
                    </Typography>
                    <Typography paragraph>
                        <p>Customer: {product.customer}</p>
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default ProductCard

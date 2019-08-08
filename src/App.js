import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import ProductList from './components/productList'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  }
});

const products = [
  {
    'p_picture': 'https://placeimg.com/300/300/1',
    'p_name': '반다나 블라우스',
    'p_price': '24000원',
  },
  {
    'p_picture': 'https://placeimg.com/300/300/2',
    'p_name': '꽃무늬 롱스커트',
    'p_price': '20000원',
  },
  {
    'p_picture': 'https://placeimg.com/300/300/3',
    'p_name': '루앤스커트',
    'p_price': '21000원',
  }
];

class App extends Component{
  render(){
    const{ classes } =this.props;
    return(
      <Paper className={classes.root}>
         <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">products</ListSubheader>
        </GridListTile>
        {products.map(tile => {return (<ProductList key={tile.p_picture} p_picture={tile.p_picture} p_name={tile.p_name} p_price={tile.p_price}/>);})}
        </GridList>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

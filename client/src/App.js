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

class App extends Component{

  state={
    products:""
  }
  componentDidMount(){
    this.callApi()
    .then(res=>this.setState({products:res}))
    .catch(err=>console.log(err));
  }
  callApi=async()=>{
    const response =await fetch('/api/products');
    const body =await response.json();
    return body;
  }
  render(){
    const{ classes } =this.props;
    return(
      <Paper className={classes.root}>
         <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">products</ListSubheader>
        </GridListTile>
        {this.state.products ? this.state.products.map(tile => {
          return (<ProductList key={tile.p_picture} p_picture={tile.p_picture} p_name={tile.p_name} p_price={tile.p_price}/>);
        }):""}
        </GridList>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

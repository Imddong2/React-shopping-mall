import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class productList extends React.Component{
    render(){
        return(
        <GridListTile>
            <img src={this.props.p_picture} alt='profile' />
            <GridListTileBar
                title ={this.props.p_name}
                subtitle ={<span>price:{this.props.p_price}</span>}
            />
        </GridListTile>
        )
    }
}
export default productList
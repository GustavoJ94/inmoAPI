import React, { Component } from 'react';
///
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
///

class InmoDrawer extends Component {
    render(){
        return (
			<Drawer 
				docked={false}
				width={300}
				open={this.props.open}
                onRequestChange={this.props.onRequestChange}
				>

                <Avatar
                    size={40}
                    style={{margin:5}}
                    >

                    JR
                </Avatar>

  				<MenuItem>Menu Item</MenuItem>
  				<MenuItem>Menu Item 2</MenuItem>

			</Drawer>
        	);
    }
}

export default InmoDrawer
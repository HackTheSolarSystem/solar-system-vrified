import React from "react";
import { Menu } from "semantic-ui-react";

const SidebarItems = addPlanet => {
  return (
    <>
      <Menu.Item as="a" className="shape-btn" onClick={addPlanet}>
        Add Planet
      </Menu.Item>
      {/* <Menu.Item as='a' className="shape-btn" onClick={()=>{this.props.addPrimitive('box')}}>cube</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={()=>{this.props.addPrimitive('torus-knot')}}>torus knot</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={()=>{this.props.addPrimitive('plane')}}>plane</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={()=>{this.props.addPrimitive('light')}}>kill lights</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={this.props.addText}>Add Text</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={this.props.addText2}>Add Text v2</Menu.Item>
        <Menu.Item as='a' className="shape-btn" onClick={this.props.handleColorPicker} >Select Color</Menu.Item>
        <Menu.Item as='a' className="shape-btn warning" onClick={this.props.removeAllUserAdded}>clear</Menu.Item> */}
    </>
  );
};

export default SidebarItems;

import React from "react";
import { Ul, Label, Input, Accslide } from "../../styled/styled_main";

const MainCollapse = () => {
  return (
    <Ul>
      <li>
        {/* Using radio Inputs means only one can be selected at a time*/}
        {/* The ID must be unique so the label will point to the Input*/}
        <Input id="rad1" type="radio" name="rad" defaultChecked="checked" />
        <Label htmlFor="rad1">
          <div>Just keep going with longer text</div>
        </Label>
        <Accslide>
          <div className="content">
            <h1>Just keep going with longer text</h1>
            <p>Lorem ipsum...</p>
          </div>
        </Accslide>
      </li>
      <li>
        {/* Using radio Inputs means only one can be selected at a time*/}
        {/* The ID must be unique so the label will point to the Input*/}
        <Input id="rad2" type="radio" name="rad" />
        <Label htmlFor="rad2">
          <div>Second panel</div>
        </Label>
        <Accslide>
          <div className="content">
            <h1>Second panel</h1>
            <p>Lorem ipsum...</p>
          </div>
        </Accslide>
      </li>
      <li>
        {/* Using radio Inputs means only one can be selected at a time*/}
        {/* The ID must be unique so the Label will point to the Input*/}
        <Input id="rad3" type="radio" name="rad" />
        <Label htmlFor="rad3">
          <div>Third panel</div>
        </Label>
        <Accslide>
          <div className="content">
            <h1>Third panel</h1>
            <p>Lorem ipsum...</p>
          </div>
        </Accslide>
      </li>
      <li>
        {/* Using radio Inputs means only one can be selected at a time*/}
        {/* The ID must be unique so the Label will point to the Input*/}
        <Input id="rad4" type="radio" name="rad" />
        <Label htmlFor="rad4">
          <div>Fourth panel</div>
        </Label>
        <Accslide>
          <div className="content">
            <h1>Fourth panel</h1>
            <p>Lorem ipsum...</p>
          </div>
        </Accslide>
      </li>
    </Ul>
  );
};

export default MainCollapse;

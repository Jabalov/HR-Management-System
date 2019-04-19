import React, {Component} from 'react';

import ERD from "../hr-system.png";

export default class ViewModel extends Component
{
    render()
    {
        return (
            <div>
              <img src={ERD} width="1280" height="720" alt=" "/>
            </div>
        );
    }
}
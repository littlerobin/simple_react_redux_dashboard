import React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import TreeView from './TreeView';
import './Grid.css';

enableRipple(true);

const GridTree =(props)=>{

        return (<div style={{textAlign: 'left'}}>
            <ButtonComponent cssClass='e-flat' style={{marginBottom: '15px'}}>User Creation Wizard</ButtonComponent>

            <div className='e-btn-group' style={{width: '100%'}}>
                <ButtonComponent>Modules and Rights</ButtonComponent>
            </div>
            <TreeView/>

            <div style={{marginTop: '15px', backgroundColor: '#E5E5E5', textAlign: 'center'}}>
                <ButtonComponent cssClass='e-info' style={{margin: '15px'}}>Save</ButtonComponent>
                <ButtonComponent cssClass='e-info' style={{margin: '15px'}}>Cancel</ButtonComponent>
            </div>
        </div>);
    }

    export default GridTree;
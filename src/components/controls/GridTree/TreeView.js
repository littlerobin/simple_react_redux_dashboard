import React from 'react';
import { enableRipple } from '@syncfusion/ej2-base';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Filter, Inject } from '@syncfusion/ej2-react-treegrid';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { sampleData, numberOfItems } from './data';
import './Grid.css';

enableRipple(true);

const TreeView =(props)=>{
   const displayItem0=(props)=> {
        let offset = numberOfItems - props.menus.length, index = 0;

        if (index < offset)
            return <div></div>

        let state = props.menus[index - offset]
        if (state === true || state === false)
            return <SwitchComponent onLabel="YES" offLabel="NO" checked={state}/>
        return <div>{state}</div>
    }

    const displayItem1=(props)=> {
        let offset = numberOfItems - props.menus.length, index = 1;

        if (index < offset)
            return <div></div>

        let state = props.menus[index - offset]
        if (state === true || state === false)
            return <SwitchComponent onLabel="YES" offLabel="NO" checked={state}/>
        return <div>{state}</div>
    }

    const displayItem2=(props)=> {
        let offset = numberOfItems - props.menus.length, index = 2;

        if (index < offset)
            return <div></div>

        let state = props.menus[index - offset]
        if (state === true || state === false)
            return <SwitchComponent onLabel="YES" offLabel="NO" checked={state}/>
        return <div>{state}</div>
    }

    const displayItem3=(props)=> {
        let offset = numberOfItems - props.menus.length, index = 3;

        if (index < offset)
            return <div></div>

        let state = props.menus[index - offset]
        if (state === true || state === false)
            return <SwitchComponent onLabel="YES" offLabel="NO" checked={state}/>
        return <div>{state}</div>
    }

    const displayItem4=(props) =>{
        let offset = numberOfItems - props.menus.length, index = 4;

        if (index < offset)
            return <div></div>

        let state = props.menus[index - offset]
        if (state === true || state === false)
            return <SwitchComponent onLabel="YES" offLabel="NO" checked={state}/>
        return <div>{state}</div>
    }

    const onSearchChange=(e) =>{
        alert("123123213");
    }

   const displayTitle=(props) =>{
        let isSearch = props.isSearched;
        if (isSearch === true)
            return <input type="text" placeholder="Search"/>
        return <span>{props.title}</span>
    }


        return (
            <div className='control-pane'>
                <div className='control-section'>
                <TreeGridComponent dataSource={sampleData} treeColumnIndex={0} enableCollapseAll={true} childMapping='subTitle' width='100%' height='250'>
                    <ColumnsDirective>
                        <ColumnDirective template={displayTitle} headerText='' textAlign='Left'/>
                        <ColumnDirective field='' headerText=''/>
                        <ColumnDirective template={displayItem0} headerText='' width='150' textAlign='Left'/>
                        <ColumnDirective template={displayItem1} headerText='' width='150' textAlign='Left'/>
                        <ColumnDirective template={displayItem2} headerText='' width='150' textAlign='Left'/>
                        <ColumnDirective template={displayItem3} headerText='' width='150' textAlign='Left'/>
                        <ColumnDirective template={displayItem4} headerText='' width='150' textAlign='Left'/>
                    </ColumnsDirective>
                    <Inject services={{Filter}}/>
                </TreeGridComponent>
                </div>
            </div>
        )
    }

    export default TreeView;
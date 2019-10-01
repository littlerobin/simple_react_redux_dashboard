import * as React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import {useSelector} from 'react-redux';
import { DefaultPropertyValue } from "./defaultconfig";

const CbDialog = ({propertyName,header,footerTemplate,content,showCloseIcon,
    target,width,height,open,close,visible}) => {
        const enableRtl = useSelector(state => state.loggedInDetails.OtherInfo.isRTL);
    return (
            <DialogComponent 
            name={propertyName} 
            id={propertyName} 
            header={header}
            footerTemplate={footerTemplate}
            content={content}
            showCloseIcon={showCloseIcon}
            target={target}
            width={width}
            height={height}
            open={open}
            close={close}
            visible={visible}
            enableRtl={enableRtl !== undefined ? enableRtl : DefaultPropertyValue.enableRtl}
            >
            </DialogComponent>
    );
};

export default CbDialog;
